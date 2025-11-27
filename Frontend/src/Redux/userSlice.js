import { createSlice } from '@reduxjs/toolkit'


const savedUser = JSON.parse(localStorage.getItem("user"))  || null

const userSlice = createSlice({
    name : "user",
    initialState : {
        user : savedUser,
        isAuthenticated : savedUser ? true : false
    },
    reducers : {
        setUser : (state , action) =>{
            state.user = action.payload;
            state.isAuthenticated = true;
            localStorage.setItem("user",JSON.stringify(action.payload))
        },
        logoutUser:(state)=>{
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem("user")
        },
    },
})

export const {setUser , logoutUser} = userSlice.actions;
export default userSlice.reducer;