import logo from './logo.svg';
import './App.css';
import { Route ,Routes} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Navbar from './component/Navbar';
import Welcomme from './pages/Welcomme';


function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/all' element={<Welcomme/>}/>

     </Routes>
    </div>
  );
}

export default App;
