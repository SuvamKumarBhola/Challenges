import { useToast } from './ToastContext';

const SettingsPanel = () => {
    const { addToast } = useToast();

    const handleSave = () => {
        console.log("Saving...");

        addToast("Settings Saved Successfully!", "success");
    };

    const handleError = () => {
        addToast("Failed to connect to server.", "error");
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ddd' }}>
            <h3>User Settings</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={handleSave}>Save Changes</button>
                <button onClick={handleError}>Simulate Error</button>
            </div>
        </div>
    );
};

export default SettingsPanel;