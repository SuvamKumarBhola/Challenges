import useHistory from './useHistory';

const TextEditor = () => {
    const { state, set, undo, redo, canUndo, canRedo } = useHistory("Start typing...");

    return (
        <div style={{ maxWidth: '600px', margin: '50px auto', fontFamily: 'sans-serif' }}>
            <h1>Time-Travel Editor ⏳</h1>

            <div style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}>
                <button onClick={undo} disabled={!canUndo}>
                    ↩️ Undo
                </button>
                <button onClick={redo} disabled={!canRedo}>
                    ↪️ Redo
                </button>
            </div>

            <textarea
                value={state}
                onChange={(e) => set(e.target.value)}
                rows={10}
                style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '16px',
                    border: '1px solid #ccc',
                    borderRadius: '4px'
                }}
            />

            <div style={{ marginTop: '10px', color: '#666', fontSize: '0.9em' }}>
                <strong>Status:</strong> {canUndo ? 'Can Undo' : 'Start'} | {canRedo ? 'Can Redo' : 'Latest'}
            </div>
        </div>
    );
};

export default TextEditor;