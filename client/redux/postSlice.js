import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	postTotal: 0,
}

export const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		incrementPostTotal: (state)=> {
			state.postTotal++;
		}

	}

})

export const { incrementPostTotal } = postSlice.actions;
export default postSlice.reducer;
