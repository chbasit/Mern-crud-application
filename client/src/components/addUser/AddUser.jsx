import React, { useState } from 'react';
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import axios from 'axios';  
 
import './AddUser.css';

export const AddUser = () => {
  const [user, setUser] = useState({ name: "", email: "", address: "" });
    
  const navigate=useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/create", user)
      
        toast.success(response.data.msg,{position:"top-right"})
      navigate('/');
       
    } catch (error) {
      console.error('Error posting data:', error);
    }
  }
   

  return (
    <div className='container'>
      <Link to={'/'}>Back</Link>  
      <h1>Add User</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' onChange={handleChange} name="name" autoComplete='off' placeholder='Name' />
        <label htmlFor="email">Email</label>
        <input type="email" id='email' name="email" onChange={handleChange} autoComplete='off' placeholder='Email' />
        <label htmlFor="address">Address</label>
        <input type="text" id='address' onChange={handleChange} name="address" autoComplete='off' placeholder='address' />
        <button type='submit'>Add User</button>
      </form>
    </div>
  );
}
