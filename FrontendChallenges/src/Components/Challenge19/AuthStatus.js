import { useNavigate } from 'react-router-dom';
import {  useAuth } from './AuthContext';

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

export default AuthStatus;