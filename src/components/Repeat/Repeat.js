import React, { useState } from 'react';

const Repeat = () => {
    const [users, setUsers] = useState([]);

    const handleAddUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;

        const user = { name, email };

        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                alert('User Added Successfully')
                e.target.reset();
            })
    }
    return (
        <div>
            <h2>Repeat to Add User</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" name='name' placeholder='Name' required />
                <br />
                <input type="email" name='email' placeholder='Email' required />
                <br />
                <button>Add User</button>
            </form>
        </div>
    );
};

export default Repeat;