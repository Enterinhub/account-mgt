import React, { useState, useEffect } from 'react';

const Profile = ({ user, onUpdateUser }) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedUser = { ...user, name, email };
        onUpdateUser(updatedUser);
        alert('Profile updated successfully');
    };

    return (
        <div className="form-container">
            <h2>Profile</h2>
            <form onSubmit={handleUpdate}>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default Profile;
