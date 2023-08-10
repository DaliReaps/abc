import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import {  useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom' 
import { logout } from '../redux/slices/userSlice';


const Navbar = () => {
  const navigate=useNavigate()
  const {isAuth}=useSelector(state=>state.user)
  useEffect(()=>{})
  
  return (
    <div>
      {(!isAuth)? <div><Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/all">Welcomme</Link>

        </div>:<div><Link to="/profile">Profile</Link>
        <button onClick={()=>{logout()}}>logout</button>
        <Link to="/all">Welcomme</Link>
        </div>}

        
    </div>
  )
}

export default Navbar