import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

export default function DashBoard() {
    const [name, setName] = useState('');
    const [isLogged, setIsLogged] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogout = async () => {
        await fetch('http://localhost:8000/api/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
        })
        setIsLogged(false)
    }

    useEffect(() => {
        setIsLoading(true);
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
        setIsLoading(false);
    })

    if(isLogged) {
        return (
            <>
                {isLoading && (
                    <ClipLoader color="black" />
                )}
                {!isLoading && (
                    <>
                        <h1>hi {name}</h1>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                )}
            </>
        )
    } else {
        return <Navigate to={'/'} />
    }
}