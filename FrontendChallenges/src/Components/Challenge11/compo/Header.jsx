import { useTheme } from '../context/ThemeContext';

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header style={{
            padding: '20px',
            borderBottom: '1px solid #ccc',
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: theme === 'light' ? '#fff' : '#333',
            color: theme === 'light' ? '#000' : '#fff'
        }}>
            <h1>Global State App</h1>

            <button
                onClick={toggleTheme}
                style={{ padding: '10px 20px', cursor: 'pointer' }}
            >
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
        </header>
    );
};

export default Header;