import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const userSlice = createAsyncThunk(
    'users/createNewUser', 
    async (data) => {
        const response = await fetch()
    }
)