import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Userlist= () => {
    const [users, setUser] = useState([]);
   
    useEffect(() => {
      getUsers();
    }, []);
   
    const getUsers = async () => {
      const response = await axios.get("http://localhost:5000/users");
      setUser(response.data);
    };
   
    const deleteUser = async (id) => {
      try {
        await axios.delete(`http://localhost:5000/users/${id}`);
        getUsers();
      } catch (error) {
        console.log(error);
      }
    };
    
  return (
    <div>
        <h1 className="title">Users</h1>
        <h2 className="subtitle">List of Users</h2>
        <table className='table is-stripped is-fullwidth'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {users.map((user, index) => (
            <tr key={user.uuid}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Link
                  to={`/users/edit/${user.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteUser(user.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
            </tbody>
        </table>
    </div>
  )
}

export default Userlist