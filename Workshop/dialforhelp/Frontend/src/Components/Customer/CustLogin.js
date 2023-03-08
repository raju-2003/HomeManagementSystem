//functional component for login with email password and submit
import React, { useState } from 'react';
import axios from 'axios';

function CustLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleemail = (event) => {
        setEmail(event.target.value);
    }
    const handlepassword = (event) => {
        setPassword(event.target.value);
    }

    async function handlesubmit(event) {
        event.preventDefault();
        const data = {
            email: email,
            password: password
        }
        await axios.post('http://localhost:8080/custvalidate', data)
            .then(res => {
                console.log(res.data);
                if(res.data==="Login Successful"){
                    alert("Login Successful");
                    //store email in local storage
                    localStorage.setItem('email', email);
                    window.location.href = "/custprofile";
                }
                else{
                    alert("Login Failed");
                    window.location.href = "/custlogin";
                }
            })
            .catch(err => {
                console.log(err);
            })
        setEmail('');
        setPassword('');
    }

    return (
        <div className="custlogin">
            <div className="custlogin__container">
                <h1>Customer Login</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={handleemail} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={handlepassword} />
                    <button type="submit" onClick={handlesubmit} className="custlogin__signInButton">Login</button>
                </form>
            </div>
        </div>
    )
}

export default CustLogin


