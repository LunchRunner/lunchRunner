import { useDispatch, useSelector } from "react-redux"
import { createNewUser } from "../redux/userSlice"
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';

// inside your component
export default function SignupForm(props) {
    const {status} = useSelector((state) => {
        return state.user
    })
    const navigate = useNavigate()
    useEffect(() => {
        if(status == 'succeeded') {
            navigate('/home')
        }
    }, [status])
    const [form, setForm] = useState({
        username: "a",
        password: "b",
        firstName: "c",
        lastName: "d",
        date_of_birth: new Date(new Date().setFullYear(new Date().getFullYear() - 20)),
        email: "a@a.com",
    });
    const onChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }
    const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(createNewUser(form))
        
    }
    return (
        <div className="loginTextBoxes" class="formbox">
        <form onSubmit={handleSubmit}>
            <label className = "passUserLabel">
                Username:
            </label>
                <input type="text" name="username" value = {form.username} onChange={onChange} placeholder="Username"></input>
            <label className = "passUserLabel">
                Username:
            </label>
                <input type="password" name="password" value = {form.password} onChange={onChange} placeholder="Password"></input>
            <label className = "passUserLabel">
                Username:
            </label>
                <input type="text" name="firstName" value = {form.firstName} onChange={onChange} placeholder="Firstname"></input>
            <label className = "passUserLabel">
                Username:
            </label>
                <input type="text" name="lastName" value = {form.lastName} onChange={onChange} placeholder="Lastname"></input>
                <label className = "passUserLabel">
                Username:
            </label>
                <input type="date" name="date_of_birth" value={form.date} onChange={onChange} placeholder="Date of birth"></input>
                <label className = "passUserLabel">
                Username:
            </label>
                <input type="email" name="email" value = {form.email} onChange={onChange} placeholder="Email"></input>
            
            <input type="submit"/>
        </form>
        </div>
    )
}