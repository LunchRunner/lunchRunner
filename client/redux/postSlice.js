import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	postTotal: 0,
	posts: [],
	view: ''
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
		},
		changeView: (state, action) => {
			state.view = action.payload
		}
	}

})

export const { addPost, setInitialPosts, changeView } = postSlice.actions;
export default postSlice.reducer;
