import React from 'react';
import { useTheme } from '../context/ThemeContext';

const PageContent = () => {
    const { theme } = useTheme();

    const styles = {
        container: {
            height: '100vh',
            padding: '50px',
            backgroundColor: theme === 'light' ? '#f0f0f0' : '#222',
            color: theme === 'light' ? '#333' : '#f0f0f0',
            transition: 'all 0.3s ease',
        }
    };

    return (
        <div style={styles.container}>
            <h2>Current Theme: {theme.toUpperCase()}</h2>
            <p>
                This component is reading state from the Context API.
                It does not receive any props from App.js!
            </p>
        </div>
    );
};

export default PageContent;