import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id:'0', name:'Ravinder Puri' },
    { id:'1', name:'Pinki Puri' },
    { id:'3', name:'Aarvi Puri' },
    { id:'4', name:'Saanvi Puri' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer