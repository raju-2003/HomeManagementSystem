//axios get method to get data from backend from localstorage

import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Profile() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [id, setId] = useState([]);

    useEffect(() => {
        const email = localStorage.getItem('email');
        console.log(email);
        axios.get('http://localhost:8080/customer/' + email)
            .then(res => {
                console.log(res.data);
                setEmail(res.data.email);
                setPassword(res.data.password);
                setName(res.data.name);
                setAddress(res.data.address);
                setPhone(res.data.phone);
                setId(res.data.id);

            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    //create function handlesubmit to update data
    async function handleSubmit(event) {
        event.preventDefault();
        const data = {
            email: email,
            password: password,
            name: name,
            address: address,
            phone: phone,
            id: id
        }
        await axios.put('http://localhost:8080/customer/' + id, data)
            .then(res => {
                console.log(res.data);
                if (res.data === "Customer Updated") {
                    alert("Customer Updated");
                    window.location.href = "/custprofile";
                }
                else {
                    alert("Customer Not Updated");
                    window.location.href = "/custprofile";  
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    async function handleDelete(event) {
        event.preventDefault();
        await axios.delete('http://localhost:8080/custdelete/' + id)
            .then(res => {
                console.log(res.data);
                if (res.data === "Delete Successful") {
                    alert("Customer Deleted");
                    window.location.href = "/custlogin";
                }
                else {
                    alert("Delete ");
                    window.location.href = "/custprofile";
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
















    return (
        <div className="profile">
        <h1>Profile</h1>
        <h5>Name: {name}</h5>
        <h5>Email: {email}</h5>
        <h5>Address: {address}</h5>
        <h5>Phone: {phone}</h5>
        <h5>Password: {password}</h5>
        <h5>Id: {id}</h5>
        <button className="profile__deleteButton" onClick={handleDelete}>Delete</button>
            <div className="profile__container">
                <h1>Update Profile</h1>
                <form>
                    <h5>Id</h5>
                    <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
                    <h5>Name</h5>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <h5>Address</h5>
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                    <h5>Phone</h5>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />                
                    <button className="profile__updateButton" onClick={handleSubmit}>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Profile