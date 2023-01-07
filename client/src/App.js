import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Login/>} />
  <Route path='/register' element={<Register/>} />
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
