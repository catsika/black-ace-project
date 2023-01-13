import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaCamera } from 'react-icons/fa'
import axios from 'axios'

const CreateFeedPost = () => {
    const [caption, setCaption] = useState('')
    const [image, setImage] = useState(null)
    const [imageUrl, setImageUrl] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const info = JSON.parse(localStorage.getItem('userInfo'))

    const handleUpload = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        if (!image) {
            setError('Please select an image')
            setIsLoading(false)
            return
        }

        const formData = new FormData()
        formData.append('image', image, image.name);
        // formData.append('image', image)
        // formData.append('description', caption)
        // formData.append('user', info._id)

        try {
            const res = await axios.post('http://localhost:5000/api/feed/addfeed',{
                description:caption,
                image:image.name,
                user:info._id

            }, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            setImageUrl(res.data.image)
            setCaption('')
            setImage(null)
            navigate('/feed')
        } catch (err) {
            setError(err.response.data.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className='post-container'>
            <form onSubmit={handleUpload}  encType="multipart/form-data">
                <div className='post-descr'>
                    <textarea
                        placeholder='say something...'
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                    />
                </div>
                <br />
                <div className='image-upload'>
                    <label htmlFor='image-upload-input'>
                        <FaCamera className='camera-icon' />
                    </label>
                    <input
                        id='image-upload-input'
                        type='file'
                        className='file-input'
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </div>
                <br />
                <br />
                <button className='submit' type='submit' disabled={isLoading}>
                    {isLoading ? 'Posting...' : 'Post'}
                </button>
                {error && <p className='error-message'>{error}</p>}
            </form>
            {imageUrl && <img src={imageUrl} alt='Uploaded post' className='uploaded-image' />}
        </div>
    )
}

export default CreateFeedPost
