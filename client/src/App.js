import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {ToastContainer} from'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Feed from "./pages/Feed";
import ErrorPage from './components/Error'

function App() {
  return (
    <div>
<BrowserRouter>
<ToastContainer position='top-center'/>
<Navbar/>
<Routes>
  <Route path='/' element={<Login/>} />
  <Route path='/register' element={<Register/>} />
  <Route path='/feed' element={<Feed/>}/>
  <Route path='*' element={<ErrorPage/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
