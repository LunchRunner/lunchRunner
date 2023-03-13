import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const initialState = {
    username: "",
    status:"idle", 
    
}
export const getUser = createAsyncThunk(
  'users/getUser', 
  async (data) => {
    const response = await fetch("/users/Login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    const json = await response.json()
    console.log('json', json)
    return json;
  }
)
const getUserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
      builder.addCase(getUser.fulfilled, (state, action) => {

        if(action.payload.err) { 
            state.status = 'failed'
          }else {
            state.status = 'succeeded'
          }
        // Add user to the state array
        console.log(action.payload)
        state.username = action.payload;
        state.status = "succeeded";
      })
    },
  })
  export const {} = getUserSlice.actions;
  export default getUserSlice.reducer;
