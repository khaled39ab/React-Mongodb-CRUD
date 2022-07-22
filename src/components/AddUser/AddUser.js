import React from 'react';

const AddUser = () => {
    const handleAddUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;

        const user = { name, email }

        //sent data to the server
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    
    return (
        <div>
            <h2>Please Add a New User</h2>
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

export default AddUser;