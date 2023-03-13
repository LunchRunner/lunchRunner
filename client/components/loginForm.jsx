import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../redux/userSlice";
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';

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
        <div class="formbox">
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" name="username" value = {form.username} onChange={onChange}></input>
            </label>
            <label>
                Password:
                <input type="password" onChange={onChange} value = {form.password} name="password"></input>
            </label>
            <input type="submit" value="Login"></input>
        </form>
        </div>
    )
}