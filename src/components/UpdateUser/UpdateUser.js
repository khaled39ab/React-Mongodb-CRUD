import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

const UpdateUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/update/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [id]);

    const handleUpdateUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;

        const user = { name, email }

        //sent data to the server
        const url = `http://localhost:5000/update/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                alert('User Updated successfully...')
                e.target.reset();
            });
    }

    return (
        <div>
            <h2>Updating User: {user.name}</h2>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name='name' placeholder='Name' required/>
                <br />
                <input type="email" name='email' placeholder='Email' required />
                <br />
                <button>Update</button>
            </form>
        </div>
    );
};

export default UpdateUser;