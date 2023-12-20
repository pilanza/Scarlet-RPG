import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom";

export default function DashBoard() {
    const [name, setName] = useState('');
    const [isLogged, setIsLogged] = useState(true);

    const handleLogout = async () => {
        await fetch('http://localhost:8000/api/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
        })
        setIsLogged(false)
    }

    useEffect(() => {
        (
            async () => {
                try {
                    const response = await fetch('http://localhost:8000/api/user', {
                        headers: {'Content-Type': 'application/json'},
                        credentials: 'include'
                    });

                    const content = await response.json();
                    setName(content.name);
                    setIsLogged(true);
                } catch(e) {
                    setIsLogged(false);
                }
            }
        ) ();
    })

    if(isLogged) {
        return (
            <>
                <h1>hi {name}</h1>
                <button onClick={handleLogout}>Logout</button>
            </>
        )
    } else {
        return <Navigate to={'/'} />
    }
}