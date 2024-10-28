import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const endpoint = import.meta.env.VITE_API_URL

export const sendSignUpData = createAsyncThunk('register/sendSignUpData',async(payload,{rejectWithValue})=>{
    try{
        console.log(payload)
        const formData = new FormData()
        for(let i in payload){
            formData.append(i,payload[i])
        }
        const response = await axios.post(endpoint,formData,{
            headers:{
                "Content-Type":'multipart/form-data'
            }
        })
        return response.data
    }
    catch(e){
        return rejectWithValue(e.response.data)
    }
})

export const orgRegisterData = createAsyncThunk('register/orgRegisterData',async(payload,{rejectWithValue})=>{
    try{
        console.log(payload)
        const formData = new FormData()
        for(let i in payload){
            formData.append(i,payload[i])
        }
        const response = await axios.post(`${endpoint}org-register/`,formData,{
            headers:{
                "Content-Type":'multipart/form-data'
            }
        })
        return response.data
    }
    catch(e){
        return rejectWithValue(e.response.data)
    }
})

const RegisterSlice = createSlice({
    name:"register",
    initialState:{
        data:[],
        status:'idle',
        error:null
    },
    extraReducers:(builder)=>{
        builder.addCase(sendSignUpData.pending,(state)=>{
            state.status = 'loading'
        }).addCase(sendSignUpData.fulfilled,(state,action)=>{
            state.status = 'sccessed'
            state.data = action.payload
        }).addCase(sendSignUpData.rejected,(state,action)=>{
            state.status = 'failed'
            state.data = action.payload
        }).addCase(orgRegisterData.pending,(state)=>{
            state.status = 'loading'
        }).addCase(orgRegisterData.fulfilled,(state,action)=>{
            state.status = 'sccessed'
            state.data = action.payload
        }).addCase(orgRegisterData.rejected,(state,action)=>{
            state.status = 'failed'
            state.data = action.payload
        })
    }
    
})

export const RegisterActions = RegisterSlice.actions

const store = configureStore({
    reducer:{
        register:RegisterSlice.reducer
    }
})


export default store