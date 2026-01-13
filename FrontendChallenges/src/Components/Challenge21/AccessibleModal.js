import { createPortal } from 'react-dom';
import useFocusTrap from './useFocusTrap';

const styles = {
    overlay: {
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.7)',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        zIndex: 1000
    },
    modal: {
        backgroundColor: 'white', padding: '30px', borderRadius: '8px',
        width: '400px', maxWidth: '90%',
        boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
        outline: 'none' 
    }
};

const AccessibleModal = ({ isOpen, onClose, title, children }) => {
    const modalRef = useFocusTrap(isOpen, onClose);

    if (!isOpen) return null;

    return createPortal(
        <div style={styles.overlay} onClick={onClose}>
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal_title"
                style={styles.modal}
                ref={modalRef}
                onClick={e => e.stopPropagation()} 
            >
                <h2 id="modal_title">{title}</h2>

                {children}

                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default AccessibleModal;