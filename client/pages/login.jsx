import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const Login = () => {
  const [password, setpassword] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/users/login/', {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        toast.success('login successful');
        if (res.data) {
          localStorage.setItem('userInfo', JSON.stringify(res.data));
          router.push('/feed');
        }
        setpassword('');
        setEmail('');
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  };
  return (
    <div className='Login'>
      <div className='intro'>
        <h1 className='head-text'>AceHood</h1>
        <p className='para'>
          connect with family,friends and meet new people the world around you
          on AceHood
        </p>
      </div>
      <div className='login-form'>
        <div className='param'>
          <form onSubmit={handleSubmit}>
            <div className='email'>
              <input
                type='email'
                placeholder='Enter Email..'
                className='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div className='password'>
              <input
                type='password'
                placeholder='Enter Password...'
                className='password'
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <br />
            <br />
            <button
              type='Submit'
              className='submit'>
              Log In
            </button>
          </form>

          <div className='forgot'>
            <a href='/forgot'>forgot password ?</a>
          </div>
          <hr />
          <div className='create'>
            <a
              href='/register'
              className='lik'>
              Create Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
