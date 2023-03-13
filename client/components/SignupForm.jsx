import { useDispatch } from "react-redux"
import { createNewUser } from "../redux/userSlice"
import { useState } from "react"
export default function SignupForm(props) {
    const [form, setForm] = useState({});
    const onChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createNewUser(form))
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" value = {form.username} onChange={onChange} placeholder="Username"></input>
            <input type="password" name="password" value = {form.password} onChange={onChange} placeholder="Password"></input>
            <input type="text" name="firstName" value = {form.firstName} onChange={onChange} placeholder="Firstname"></input>
            <input type="text" name="lastName" value = {form.lastName} onChange={onChange} placeholder="Lastname"></input>
            <input type="date" name="date" value={form.date} onChange={onChange} placeholder="Date of birth"></input>
            <input type="email" name="email" value = {form.email} onChange={onChange} placeholder="Email"></input>
            <input type="submit" value="submit"/>
        </form>
    )
}