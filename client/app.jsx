import Login from "./pages/login";
import Signup from "./pages/signup";
import SideBar from '../client/components/SideBar'
import { Outlet, Link } from "react-router-dom"
import "./styles/App.css" 
export default function App() {


    return (
        <div className = "mainpage">
            <SideBar/>
            <div className = "outlet">
                <Outlet />
                {/* <Login /> */}
            </div>
        </div>
        

    )
}
