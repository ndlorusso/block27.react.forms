import { useState } from 'react'

export default function Authenticate ({ token }) {
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    console.log("Token", token);

    async function handleClick() {
      const API = "https://fsa-jwt-practice.herokuapp.com/authenticate";

        try {
          const response = await fetch (API,
          {
            method : "GET",
            headers : {
                "Content-Type" : "application/json",
                Authorization : `Bearer ${token}`,
            },
           }
         );
         const result = await response.json();
         console.log("Authenticate Result", result);
         setSuccessMessage(result.message);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
        <h2>Authenticate</h2>
        {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>}
        <button onClick={handleClick}>Authenticate Token!</button>
        </>
    );
}