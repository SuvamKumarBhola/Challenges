import useSmartFetch from './useSmartFetch';

const UserProfile = ({ userId }) => {
    const { data, loading, error } = useSmartFetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    if (loading) return <div className="loader">Loading User {userId}...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div style={{
            border: '1px solid #ccc',
            padding: '20px',
            borderRadius: '8px',
            background: '#f9f9f9',
            animation: 'fadeIn 0.5s'
        }}>
            <h2>{data.name}</h2>
            <p>📧 {data.email}</p>
            <p>🏢 {data.company.name}</p>
            <small style={{ color: '#888' }}>User ID: {data.id}</small>
        </div>
    );
};

export default UserProfile;