import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../redux/userSlice";
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import "../styles/loginForm.css"

export default function LoginForm() {
    const dispatch = useDispatch()
    const {isLoggedIn} = useSelector((state) => {
        console.log(state.user)
        return state.user
    })
    const navigate = useNavigate()
    useEffect(() => {
        console.log(isLoggedIn)
        if(isLoggedIn) {
            navigate('/home')
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
        dispatch(getUser(form))
    }
    return (
        <div className="loginTextBoxes" class="formbox">
        <form onSubmit={handleSubmit}>
            <label className = "passUserLabel">
                Username:
            </label>
             <input className = "inputText"type="text" name="username" value = {form.username} onChange={onChange}/>
            <label className = "passUserLabel">
                Password:
            </label>
            <input type="password" onChange={onChange} value = {form.password} name="password"/>
            <input className = "inputText" type="submit" value="Login"></input>
        </form>
        </div>
    )
}