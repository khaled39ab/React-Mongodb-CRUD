import React from 'react';

const Repeat = () => {
    const handleAddUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;

        const user = { name, email }
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