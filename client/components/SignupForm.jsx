import { useDispatch, useSelector } from "react-redux"
import { createNewUser } from "../redux/userSlice"
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import "../styles/SignupForm.css"

// inside your component
export default function SignupForm(props) {
    const {status} = useSelector((state) => {
        return state.user
    })
    const navigate = useNavigate()
    useEffect(() => {
        if(status == 'succeeded') {
            navigate('/listview')
        }
    }, [status])
    const [form, setForm] = useState({
        username: "",
        password: "",
        // firstName: "",
        // lastName: "",
        // date_of_birth: new Date(new Date().setFullYear(new Date().getFullYear() - 20)),
        // email: "",
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
        <div className="loginTextBoxes" >
        <form className = "formBox" onSubmit={handleSubmit}>
            
            <label className = "passUserLabel">
                Username:
            </label>
                <input type="text" name="username" value = {form.username} onChange={onChange} placeholder="username"></input>

            <label className = "passUserLabel">
                Password:
            </label>
                <input type="password" name="password" value = {form.password} onChange={onChange} placeholder="password"></input>
            
            {/* <label className = "passUserLabel">
                First Name:
            </label>
                <input type="text" name="firstName" value = {form.firstName} onChange={onChange} placeholder="first name"></input>
            
            <label className = "passUserLabel">
                Last Name:
            </label>
                <input type="text" name="lastName" value = {form.lastName} onChange={onChange} placeholder="last name"></input>
        
            <label className = "passUserLabel">
                DOB:
            </label>
                <input type="date" name="date_of_birth" value={form.date} onChange={onChange} placeholder="Date of birth"></input>
            
            <label className = "passUserLabel">
                Email:
            </label>
                <input type="email" name="email" value = {form.email} onChange={onChange} placeholder="***@mail.com"></input> */}
            
            <input type="submit"/>
        </form>
        </div>
    )
}