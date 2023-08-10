import { useEffect } from "react"
import { allposts } from "../redux/slices/postSlice"
import { useDispatch,useSelector } from "react-redux"

const Welcomme = () => {
    const dispatch=useDispatch()
    const {posts}=useSelector(state=>state.post)
    useEffect(()=>{
        dispatch(allposts())
        console.log(allposts)
      },[])
  return (
    <div>

        {posts &&  posts.map(el=><div>
          <h1>{el.title}</h1>
          <h1>{el.desc}</h1>
          </div>)}
    </div>
  )
}

export default Welcomme