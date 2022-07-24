import React, { useEffect, useState } from 'react';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    const handleDeleteUser = id => {
        const proceed = window.confirm('Want to delete?')
        if (proceed) {
            console.log('deleting ', id);
        }
    }
    return (
        <div>
            <h1>This is home</h1>
            <h2>Available Users: {users.length}</h2>
            <ul>
                {
                    users.map(user => <li
                        key={user._id}
                    >Name:{user.name} :: Email: {user.email}
                        <button onClick={() => handleDeleteUser(user._id)}>x</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Home;