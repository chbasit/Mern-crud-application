import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
 

import './User.css';

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching data from API
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/getAll");
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchUser();
  }, []);


const deleteUser=async(userId)=>{
const response= await axios.delete(`http://localhost:5000/api/delete/${userId}`)
    setUsers((prevUser)=>prevUser.filter((user)=>user._id!==userId))
    toast.success(response.data.msg,{position:"top-right"})
}

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!Array.isArray(users) || users.length === 0) {
    return <div>No users found</div>;
  }

  return (
    <div className="container">
      <Link to="/add">Add User</Link>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (  
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td className="action-buttons">
                <button  onClick={()=>deleteUser(user._id)} >Delete</button>
                <Link to={`/edit/${user._id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;
