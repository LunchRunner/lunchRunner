import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const initialState = {
    username: "",
    firstName: "",
    lastName: "",
    userId: "",
    status:"idle", 
}
export const createNewUser = createAsyncThunk(
    'users/createNewUser', 
    async (data) => {
      const response = await fetch("/users/createUser", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      const json = await response.json()
      console.log(json)
      // console.log('json', json)
      return json;
    }
)
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
      builder.addCase(createNewUser.fulfilled, (state, action) => {
        if(action.payload.err) { 
          state.status = 'failed'
        }else {
          state.status = 'succeeded'
          state.userId = action.payload.user['_id']
          state.username = action.payload.user.username;
          state.firstName = action.payload.user.firstName;
          state.lastName = action.payload.user.lastName 
        }
      })
      // builder.addCase(createNewUser.fulfilled, (state, action) => {
      //   console.log('builder', state, action.payload)
      //   state.userId = action.payload.user.username
      // })
    },
  })
  export const {} = usersSlice.actions;
  export default usersSlice.reducer;
