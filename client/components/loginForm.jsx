import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../redux/userSlice";
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import "../styles/loginForm.css"
import { changeView } from "../redux/postSlice";

export default function LoginForm() {
    const dispatch = useDispatch()
    const {isLoggedIn} = useSelector((state) => {
        return state.user
    })
    const navigate = useNavigate()
    useEffect(() => {
        if(isLoggedIn) {
            navigate('/listview')
        }
    }, [isLoggedIn])
    const [form, setForm] = useState({
        username: "",
        password: "",
    });
    const onChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(changeView('viewruns'))
        dispatch(getUser(form))
    }
    return (
        <div className="loginTextBoxes" >
        <form className = "formBox"onSubmit={handleSubmit}>
            <label className = "passUserLabel">
                Username:
            </label>
             <input className = "inputText"type="text" name="username" value = {form.username} onChange={onChange}/>
            <label className = "passUserLabel">
                Password:
            </label>
            <input className = "inputText" type="password" onChange={onChange} value = {form.password} name="password"/>
            {/* <input className = "inputText" type="submit" value="Login"></input> */}
            <button className = "loginButton" type="submit" value="Login">Login</button>
            
        </form>
        {/* <button
            onClick={(e) => {
            // fetch('/oauth', {mode: 'no-cors'})}}
            window.location.href='/oauth'}}
            >Login With Github</button> */}
        </div>
    )
}