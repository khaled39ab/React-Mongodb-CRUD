import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <ul style={{ display: 'flex', fontSize: '20px' }}>
                <li style={{ marginRight: '40px' }}>
                    <NavLink to="home" > Home </NavLink>
                </li>
                <li style={{ marginRight: '40px' }}>
                    <NavLink to="add-user" > Add User </NavLink>
                </li>
                <li style={{ marginRight: '20px' }}>
                    <NavLink to="repeat"> Repeat </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Header;