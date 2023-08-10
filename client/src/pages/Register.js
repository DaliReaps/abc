import React from 'react'
import { useForm } from 'react-hook-form';
import{useDispatch} from "react-redux"
import { signup } from '../redux/slices/userSlice';

const Register = () => {
    const dispatch=useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {dispatch(signup(data))};
    console.log(errors);
  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="name" {...register("name", {required: true})} />
      <input type="number" placeholder="age" {...register("age", {required: true})} />
      <input type="text" placeholder="email" {...register("email", {required: true})} />
      <input type="password" placeholder="passwor" {...register("password", {required: true})} />
      <input type="submit" />
    </form>
    </div>
  )
}

export default Register