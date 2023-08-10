import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { addpost, getposts } from '../redux/slices/postSlice'
import { useForm } from 'react-hook-form';

const Profile = () => {
  const dispatch=useDispatch()
  const {isLoading,postdata}=useSelector(state=>state.post)
  useEffect(()=>{
    dispatch(getposts())
    console.log(postdata)
  },[])
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {console.log(data)
  dispatch(addpost(data))
  };
  return (
    <div>{isLoading && <p>Loading</p>}
     <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="title" {...register("title", {required: true})} />
      <input type="text" placeholder="desc" {...register("desc", {required: true})} />
      <input type="submit" />
    </form>
        {postdata && postdata.map(el=><div>
          <h1>{el.title}</h1>
          <h1>{el.desc}</h1>
          </div>)}
          <h1></h1>
    </div>

  )
}

export default Profile