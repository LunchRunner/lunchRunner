import Login from "./pages/login";
import Signup from "./pages/signup";
import "./style.css" 
export default function App() {
    return (
        <div>
            <h1>LunchRunner</h1>
            <Login/>
            <a href={`/signup`}>Sign up now!</a>
        </div>
    )
}
