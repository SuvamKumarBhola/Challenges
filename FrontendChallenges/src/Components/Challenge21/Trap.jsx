import { useState } from 'react';
import AccessibleModal from './AccessibleModal';

export default function Trap() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ padding: '50px', textAlign: 'center' }}>
            <h1>A11y Focus Trap Demo</h1>

            <p>
                Navigate with your keyboard (Tab). <br />
                Notice that when the modal opens, you cannot Tab to this background button:
            </p>

            <button onClick={() => alert("I am a background button")}>
                Background Button (Should be unreachable when modal is open)
            </button>

            <br /><br />

            <button
                onClick={() => setIsOpen(true)}
                style={{ padding: '10px 20px', fontSize: '16px', fontWeight: 'bold' }}
            >
                Open Modal
            </button>

            <AccessibleModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Security Confirmation"
            >
                <p>Please confirm your email address below.</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <label>Email: <input type="email" placeholder="test@example.com" /></label>
                    <label>Confirm: <input type="text" placeholder="Type 'CONFIRM'" /></label>
                    <button onClick={() => alert("Confirmed!")} style={{ background: '#4CAF50', color: 'white' }}>
                        Submit Data
                    </button>
                </div>
            </AccessibleModal>
        </div>
    );
}
