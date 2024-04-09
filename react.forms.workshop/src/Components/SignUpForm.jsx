import { useState } from 'react'

export default function SignUpForm ( { token, setToken } ) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    // console.log("Hello Nick");
    const API = "https://fsa-jwt-practice.herokuapp.com/signup";

    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type" : "application/json",
        },
        body: JSON.stringify({
           username : "test",
           password : "example",
          }),
      });
      const result = await response.json();
      console.log("Result", result);
      setToken(result.token);
    } catch (error) {
      console.error(setError);
    }
  }
   
  return (
 <>
  <h2>Sign Up!</h2>
  {error && <p>{error}</p>}

  <form onSubmit={handleSubmit}>
  <label>
    Username: <input value={username} onChange={(e) => setUsername(e.target.value)}/>
  </label>
  <label>
    Password: <input value={password} onChange={(e) => setPassword(e.target.value)}/>
  </label>
  <button>Submit</button>
  </form>
 </>
  );
}