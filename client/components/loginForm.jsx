import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../redux/getUserSlice";
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';

export default function loginForm() {
    const dispatch = useDispatch()
    const {status} = useSelector((state) => {
        return state.user
    })
    const navigate = useNavigate()
    useEffect(() => {
        if(status == 'succeeded') {
            navigate('/home')
        }
    }, [status])
    const [form, setForm] = useState({});
    const onChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(form)
        dispatch(getUser(form))
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" name="username" onChange={onChange}></input>
            </label>
            <label>
                Password:
                <input type="password" onChange={onChange} name="password"></input>
            </label>
            <input type="submit" value="Login"></input>
        </form>
    )
}