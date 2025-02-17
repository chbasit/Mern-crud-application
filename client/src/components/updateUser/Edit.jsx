import React, { useEffect, useState } from 'react'
 import {useNavigate} from 'react-router-dom';
import {Link,useParams} from "react-router-dom"
import toast from 'react-hot-toast';
 


import '../addUser/AddUser.css'
import  axios  from 'axios';
export const Edit = () => {
  const navigate=useNavigate();
  const {id}= useParams();
  const [user,setUser]=useState({ name: "", email: "", address: "" });
const inputChange=(e)=>{
 const {name,value}=e.target;
 setUser({...user,[name]:value});
}
useEffect(()=>{
   axios.get(`http://localhost:5000/api/getOne/${id}`)
    .then((response)=>{
    setUser(response.data)
  }).catch((error)=>{
console.log(error)
    })
},[id]);

const submitForm=async(e)=>{
  e.preventDefault();
  await axios.put(`http://localhost:5000/api/update/${id}`,user)
  .then((response)=>{
  toast.success(response.data.msg,{position:"top-right"})
  navigate('/');
  }).catch(error=>console.log(error))
}
 
  return (
    <div className='container'>
        <Link to={'/'}> Back</Link>
        <h1> Edit User</h1>
  
<form onSubmit={submitForm}>
    <label htmlFor="name">Name</label>
   <input type="text" id='name'value={user.name} autoComplete='off' onChange={inputChange} name="name"   placeholder='name' />
   <label htmlFor="email">Email</label>
   <input type="email" id='email'value={user.email} name="email" onChange={inputChange}  autoComplete='off'  placeholder='email' />
   <label htmlFor="address">Address</label>
   <input type="text" id='address' value={user.address} name="address" onChange={inputChange} autoComplete='off'  placeholder='address' />
   <button type='submit'>Edit  user</button>
</form>



  </div>
    )
}
