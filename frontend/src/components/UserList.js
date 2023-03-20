import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from "axios";

const UserList = () => {

    const [user, setUser] = useState([])

    useEffect(() => {
        handleUser()
    }, [])

    const handleUser = async () => {
        await axios.get('http://localhost:5000/users')
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <div className='columns'>
            <div className='column is-half'>
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
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserList