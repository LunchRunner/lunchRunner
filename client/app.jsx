import Login from "./pages/login";
import Signup from "./pages/signup";
import "./style.css" 
export default function App() {
    return (
        <div className="login-page">
            <h1>LunchRunner</h1>
            <Login className="login"/>
            <a href={`/signup`}>Sign up now!</a>
        </div>
    )
}
