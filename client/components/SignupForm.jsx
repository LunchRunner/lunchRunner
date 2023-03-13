import { useDispatch } from "react-redux"
import { createNewUser } from "../redux/userSlice"

export default function SignupForm(props) {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createNewUser)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input text="text" placeholder="Username"></input>
            <input text="password" placeholder="Password"></input>
            <input text="text" placeholder="Firstname"></input>
            <input text="text" placeholder="Lastname"></input>
            <input text="date" value="1997-12-12" placeholder="Date of birth"></input>
            <input text="email" placeholder="Email"></input>
            <input type="submit" value="submit"/>
        </form>
    )
}