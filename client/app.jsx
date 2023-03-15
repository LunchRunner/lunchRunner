import Login from "./pages/login";
import Signup from "./pages/signup";
import SideBar from '../client/components/SideBar'
import PostsDisplay from '../client/components/postsDisplay'
import { Outlet, Link } from "react-router-dom"
import "./styles/App.css" 
export default function App() {


    return (
        <div className = "mainpage">
            <SideBar/>
            <div className = "outlet">
                {/* <Outlet />
                <PostsDisplay/> */}
                <Login />
            </div>
        </div>
        

    )
}
