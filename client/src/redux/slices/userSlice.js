import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
export const signup=createAsyncThunk(
    "/api/register",async(info,rejectWithValue)=>{
        try{
                const res=await axios.post("/register",info)
                return res.data
        }
        catch(errors){
                return rejectWithValue(errors.response.data.msg)
        }
    }
)

// export const signup = createAsyncThunk(
//     "user/signup", async (info, rejectWithValue) => {
//         try {
//             const res = await axios.post("/register", info)
//             return res.data

//         } catch (error) {
//             return rejectWithValue(error.response.data.msg)
//             //  console.log(error.response.data.msg)
//         }
//     }
// )
export const sigin=createAsyncThunk(
    "/api/login",async(info,rejectWithValue)=>{
        try{
                const res=await axios.post("/login",info)
                return res.data
        }
        catch(errors){
                return rejectWithValue(errors.response.data.msg)
        }
    }
)

export const logout=()=>{localStorage.clear()}


const userSlice=createSlice({
    name:"user",
    initialState:{
        userdata:[],
        isLoading:false,
        token:localStorage.getItem("token")||null,
        isAuth:Boolean(localStorage.getItem("isAuth")) || false
    },
    reducers:{
    },
    extraReducers:{
        [signup.pending]:(state)=>{
            state.isLoading=true},
        [signup.fulfilled]:(state,action)=>{
        state.isLoading=false
        state.isAuth=true
        state.userdata=action.payload.user
        state.token=action.payload.token
        localStorage.setItem("token",state.token)
        localStorage.setItem("isAuth",state.isAuth)


        

        },
        [signup.rejected]:(state)=>{
        state.isLoading=false
        state.isAuth=false
        state.token=null
        },
        [sigin.pending]:(state)=>{
        state.isLoading=true},
        [sigin.fulfilled]:(state,action)=>{
        state.isAuth=true
        state.isLoading=false
        state.userdata=action.payload.user
        state.token=action.payload.token
        localStorage.setItem("token",state.token)
        localStorage.setItem("isAuth",state.isAuth)
        },
        [sigin.rejected]:(state)=>{
        state.isLoading=false
        state.isAuth=false
        state.token=null
        },
    }
})

export default userSlice.reducer
