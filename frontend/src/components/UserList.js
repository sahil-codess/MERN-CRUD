import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const UserList = () => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        handleUser()
    }, [])

    const handleUser = async () => {
        await axios.get('http://localhost:5000/users')
            .then(res => {
                setUsers(res.data.data)
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <div className='columns'>
            <div className='column is-half'>
                <Link to="/add" className='button is-success'>Add User</Link>
                <table className='table is-striped is-fullwidth mt-5'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phoneNumber}</td>
                                        <td>{user.gender}</td>
                                        <td>
                                            <button className='button is-info is-small '>Edit</button>
                                        </td>
                                        <td><button className='button is-danger is-small'>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserList