import { useState } from "react";
import style from "./style.module.css";
import { Navigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email, 
                password
            })
        })

        setRedirect(true);
    }

    if(redirect) {
        return <Navigate to="/admin/dashboard" />
    }

    return(
        <div className={style.login_page}>
            <main>
                <h1>Sign In</h1>
                <div className={style.login_input}>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Email" 
                        required
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Password" 
                        required
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button className={style.login_button} onClick={handleSubmit}>Sign In</button>
            </main>
            <aside>
                <h2>Hello, Friend!</h2>
                <p>Have a nice day and remember to always take care of yourself</p>
            </aside>
        </div>
    )
}