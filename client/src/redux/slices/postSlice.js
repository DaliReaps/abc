import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
export const getposts=createAsyncThunk(
    "/api/addpost",async(_,rejectWithValue)=>{
        try{
                const res=await axios.get("/getpost",{
                    headers:{token:localStorage.getItem("token")}
                })
                return res.data
        }
        catch(errors){
                return rejectWithValue(errors.response.data.msg)
        }
    }
)
export const addpost=createAsyncThunk(
    "/api/addpost",async(info,{rejectWithValue,dispatch})=>{
        try{
                const res=await axios.post("/newpost",info,{
                    headers:{token:localStorage.getItem("token")}
                })
                dispatch(getposts())
                return res.data
        }
        catch(errors){
                return rejectWithValue(errors.response.data.msg)
        }
    }
)

export const allposts=createAsyncThunk(
    "/api/allposts",async(info,{rejectWithValue,dispatch})=>{
        try{
                const res=await axios.get("/allpost")
                return res.data
        }
        catch(errors){
                return rejectWithValue(errors.response.data.msg)
        }
    }
)

const postSlice=createSlice({
    name:"post",
    initialState:{
        postdata:[],
        posts:[],
        isLoading:false,
       
    },
    reducers:{

    },
    extraReducers:{
        [getposts.pending]:(state)=>{
            state.isLoading=true},
        [getposts.fulfilled]:(state,action)=>{
        state.isLoading=false
        state.postdata=action.payload.posts
        },
        [getposts.rejected]:(state)=>{
        state.isLoading=false
        },



        [allposts.pending]:(state)=>{
            state.isLoading=true},
        [allposts.fulfilled]:(state,action)=>{
        state.isLoading=false
        state.posts=action.payload.posts
        },
        [allposts.rejected]:(state)=>{
        state.isLoading=false
        },
       
    }
})

export default postSlice.reducer