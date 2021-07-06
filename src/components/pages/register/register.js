import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css'

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error,setError] = useState(false)
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(false);
        try{
            const res = await axios.post("/auth/register", {
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");
        }catch(err){
            setError(true)
        }
    }
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
             <form className="registerForm" onSubmit={handleSubmit}>
                 <label>Username</label>
                 <input 
                    className="registerInput" 
                    type="text" 
                    placeholder="Username"
                    onChange={e => setUsername(e.target.value)}
                 />
                 <label>Email</label>
                 <input 
                    className="registerInput" 
                    type="text" 
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                 />
                 <label>Password</label>
                 <input 
                    className="registerInput" 
                    type="password" 
                    placeholder="password"
                    onChange={e => setPassword(e.target.value)}
                 />
                 <button 
                    type="submit"
                    className="registerButton">register</button>
             </form>
             <button className="registerLoginButton">
                <Link className="link" to="/login">Login</Link>
             </button>
             {error && <span style={{color: "red", marginTop:"10px"}}>Something went wrong</span>}
        </div>
    )
}

export default Register;