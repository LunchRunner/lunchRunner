import SignupForm from "../components/SignupForm"
import "../styles/signup.css"
export default function Signup() {
    return (
        <div className="signup-display">
            <h2>Create Your Account</h2>
            <SignupForm className= "signupBox"/>
        </div>
    )
}