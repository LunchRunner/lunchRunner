import { useDispatch } from "react-redux"
import { getUser } from "../redux/getUserSlice";
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
export default function loginForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [form, setForm] = useState({});
    const onChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await dispatch(getUser(form))
        navigate('/home')
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" name="username"></input>
            </label>
            <label>
                Password:
                <input type="password" name="password"></input>
            </label>
            <input type="submit" value="Login"></input>
        </form>
    )
}