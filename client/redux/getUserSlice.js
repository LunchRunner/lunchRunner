import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const initialState = {
    username: "",
    firstName: "",
    lastName: "",
    userId: "",
    status:"idle", 
    
}
export const getUser = createAsyncThunk(
  'users/getUser', 
  async (data) => {
    const response = await fetch("/users/getUser")
    console.log(json)
    const json = await response.json()
    // console.log('json', json)
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
        state.userId = action.payload['_id']
        state.username = action.payload.username;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName
        state.status = "succeeded";
      })
    },
  })
  export const {} = getUserSlice.actions;
  export default getUserSlice.reducer;
