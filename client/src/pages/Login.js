import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';

import {useNavigate} from 'react-router-dom' 

import { useDispatch, useSelector } from 'react-redux';
import { sigin } from '../redux/slices/userSlice';
const Login = () => {
  const {isAuth}=useSelector(state=>state.user)
  const dispatch=useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {console.log(data)
    dispatch(sigin(data))
    console.log(isAuth)
    };
    const navigate=useNavigate()
    useEffect(()=>{
        if(isAuth) navigate('/profile')
    },[isAuth])
    console.log(errors);
  return (
    <div>
         <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="email" {...register("email", {required: true})} />
      <input type="password" placeholder="passwor" {...register("password", {required: true})} />
      <input type="submit" />
    </form>
    </div>
  )
}

export default Login