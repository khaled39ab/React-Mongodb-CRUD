import React from 'react';

const AddUser = () => {
    return (
        <div>
            <h2>Please Add a New User</h2>
            <form>
                <input type="text" name='username' placeholder='Username' />
                <br />
                <input type="password" name='password' placeholder='Password' />
                <br />
                <button>Add User</button>
            </form>
        </div>
    );
};

export default AddUser;