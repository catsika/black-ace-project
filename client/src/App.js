import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {ToastContainer} from'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Feed from "./pages/Feed";
import ErrorPage from './components/Error'
import Profile from './pages/ProfilePage';
import CreateFeedPost from './components/CreateFeedPost';
import Forgot from './components/Forgot';
import Community from './components/Community';

function App() {
  return (
    <div>

<ToastContainer position='top-center'/>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Login/>} />
  <Route path='/feed' element={<Feed/>}/>
  <Route path='/profile' element={<Profile/>}/>
  <Route path='*' element={<ErrorPage/>}/>
  <Route path='/createpost' element={<CreateFeedPost/>} />
  <Route path='/register' element={<Register/>} />
  <Route path='/forgot' element={<Forgot/>}/>
  <Route path='/community' element={<Community/>} />

</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
