import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	postTotal: 0,
	posts: [],
}

export const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		addPost: (state, action)=> {
			state.postTotal++;
			state.posts.push(action.payload);
		},
		setInitialPosts: (state, action) => {
			state.posts = action.payload; 
			state.postTotal = action.payload.length;
		}
	}

})

export const { addPost, setInitialPosts } = postSlice.actions;
export default postSlice.reducer;
