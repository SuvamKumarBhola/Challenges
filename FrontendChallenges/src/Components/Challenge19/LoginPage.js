import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();

    const from = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const username = formData.get("username");

        login(username, () => {
            navigate(from, { replace: true });
        });
    };

    return (
        <div style={{ padding: '20px', maxWidth: '300px', margin: '50px auto', border: '1px solid #ccc' }}>
            <h3>Login Page</h3>
            <p>You must log in to view the page at: <strong>{from}</strong></p>

            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input name="username" type="text" />
                </label>
                <button type="submit" style={{ marginTop: '10px' }}>Login</button>
            </form>
        </div>
    );
};

export default LoginPage;