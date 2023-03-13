import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const initialState = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    date_of_birth: "",
    email: "",
}
export const createNewUser = createAsyncThunk(
    'users/createNewUser', 
    async (data) => {
        console.log(data)
        const response = await fetch("https://localhost:3000/users", {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
        return response;
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
      builder.addCase(createNewUser.fulfilled, (state, response) => {
        // Add user to the state array
        
      })
    },
  })
//   export {} = usersSlice.actions
  export default usersSlice.reducers;
