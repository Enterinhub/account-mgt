import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Header from './components/Header';

const App = () => {
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);
console.log(user)
    const handleRegister = (newUser) => {
        setUsers([...users, newUser]);
    };

    const handleLogin = (email, password) => {
        const foundUser = users.find(u => u.email === email && u.password === password);
        if (foundUser) {
            setUser(foundUser);
            return true;
        }
        return false;
    };

    const handleLogout = () => {
        setUser(null);
    };

    const handleUpdateUser = (updatedUser) => {
        const updatedUsers = users.map(u => (u.email === user.email ? updatedUser : u));
        console.log(updatedUsers)
        setUsers(updatedUsers);
        setUser(updatedUser);
    };
console.log(users)
    return (
        <Router>
            <Header user={user} onLogout={handleLogout} />
            <Routes>
                <Route path="/register" element={<Register onRegister={handleRegister} />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/profile" element={user ? <Profile user={user} onUpdateUser={handleUpdateUser} /> : <Navigate to="/login" />} />
                <Route path="*" element={<Navigate to="/register" />} />
            </Routes>
        </Router>
    );
};

export default App;