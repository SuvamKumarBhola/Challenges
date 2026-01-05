import { useAuth } from "./AuthContext";
import { protectedUserList as ProtectedUserList, protectedAdminSettings as ProtectedAdminSettings } from "./Dashboard";
const AppContent = () => {
    const { user, login } = useAuth();

    return (
        <div style={{ padding: '20px' }}>
            <h1>RBAC Demo (HOC Pattern)</h1>

            <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
                <p>Current User: <strong>{user ? user.role : 'Logged Out'}</strong></p>
                <button onClick={() => login('viewer')}>Login as Viewer</button>
                <button onClick={() => login('admin')}>Login as Admin</button>
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>
                <ProtectedUserList title="Company Directory" />
                <hr />
                <ProtectedAdminSettings />
            </div>
        </div>
    );
};

export default AppContent;