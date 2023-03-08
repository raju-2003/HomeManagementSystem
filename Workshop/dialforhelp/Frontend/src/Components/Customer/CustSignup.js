import React, { useState } from 'react';
import axios from 'axios';
import "./CustSignup.css"

function CustSignup() {
    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [business, setBusiness] = useState('');
    const [phone, setPhone] = useState('');

    const handlename = (event) => {
        setname(event.target.value);
    }
    const handleemail = (event) => {
        setEmail(event.target.value);
    }
    const handlepassword = (event) => {
        setPassword(event.target.value);
    }
    const handleaddress = (event) => {
        setAddress(event.target.value);
    }
    const handlebusiness = (event) => {
        setBusiness(event.target.value);
    }
    const handlephone = (event) => {
        setPhone(event.target.value);
    }

    async function handlesubmit(event) {
        event.preventDefault();
        const data = {
            name: name,
            email: email,
            password: password,
            address: address,
            business: business,
            phone: phone
        }
        await axios.post('http://localhost:8080/custadd', data)
            .then(res => {
                console.log(res.data);
                if(res.data==="Signup Successful"){
                    alert("Signup Successful");
                    window.location.href = "/custlogin";
                }
            })
            .catch(err => {
                console.log(err);
            })
        setAddress('');
        setBusiness('');
        setPhone('');
        setname('');
        setEmail('');
        setPassword('');
    }

    

    return (
        <div className='dynamic-form'>
            <div className='full'>
                <center><h3>Customer Signup</h3></center>
                
                <label >Name</label>
                <input type="text" id="name" placeholder='Your Username' onChange={handlename} value={name}></input>
                
                <label>Email</label>
                <input type="email" id="email" placeholder='Your Email' onChange={handleemail} value={email}></input>
                
                <label>Password</label>
                <input type="password" id="password" placeholder='Your Password' onChange={handlepassword} value={password}></input>
                
                <label>Address</label>
                <input type="text" id="address" placeholder='Your Address' onChange={handleaddress} value={address}></input>
                
                <label>Business</label>
                <input type="text" id="business" placeholder='Your Business' onChange={handlebusiness} value={business}></input>
                
                <label>Phone</label>
                <input type="text" id="phone" placeholder='Your Phone' onChange={handlephone} value={phone}></input><br />
                
                <center>
                    <button className="btn btn-primary" onClick={handlesubmit}>Submit</button>
                </center>

            </div>
        </div>
    )
}


export default CustSignup;

