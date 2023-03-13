import { configureStore } from "@reduxjs/toolkit";
import postReducer from './postSlice';
import userReducer from "./userSlice"
import getUserReducer from "./getUserSlice"

export const store = configureStore({
	reducer: {
		post: postReducer,
		user: userReducer,
		getUser: getUserReducer,
	},
})
