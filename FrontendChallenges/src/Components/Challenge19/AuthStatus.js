import React from 'react';
import { useNavigate } from 'react-router-dom';
import {  useAuth } from './AuthContext';

const PublicPage = () => <h3>Public Page (Anyone can see this)</h3>;
const Dashboard = () => <h3>Dashboard (Protected)</h3>;
const Settings = () => <h3>User Settings (Protected)</h3>;

const AuthStatus = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    if (!user) return <p>You are not logged in.</p>;

    return (
        <p>
            Welcome {user.username}!
            <button onClick={() => logout(() => navigate("/"))}>Sign out</button>
        </p>
    );
};