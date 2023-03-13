import { useState } from "react";
export default function loginForm() {
    const [form, setForm] = useState({});
    const onChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }
    return (
        <form>
            <label>
                Username:
                <input type="text"></input>
            </label>
            <label>
                Password:
                <input type="password"></input>
            </label>
            <input type="submit" value="Login"></input>
        </form>
    )
}