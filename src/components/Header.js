import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ user, onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate('/login');
    };

    return (
        <header>
            <nav>
                <ul>
                    {!user ? (
                        <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><button onClick={handleLogout}>Logout</button></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
