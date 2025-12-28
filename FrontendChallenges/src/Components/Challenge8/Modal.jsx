import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import X from 'lucide-react';
function Modal({ isOpen, onClose, children, title }) {
    if (!isOpen) return null;

    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = originalStyle;
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    const modalContainer = (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in"
            onClick={handleBackdropClick}
        >
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full animate-slide-up">
                {/* Modal Header */}
                {title && (
                    <div className="flex items-center justify-between p-6 border-b border-slate-200">
                        <h2 className="text-xl font-bold text-slate-800">{title}</h2>
                        <button
                            onClick={onClose}
                            className="p-1 hover:bg-slate-100 rounded-lg transition-colors"
                            aria-label="Close modal"
                        >
                            <X size={24} className="text-slate-500" />
                        </button>
                    </div>
                )}

                {/* Modal Body */}
                <div className="p-6">
                    {!title && (
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-1 hover:bg-slate-100 rounded-lg transition-colors"
                            aria-label="Close modal"
                        >
                            <X size={24} className="text-slate-500" />
                        </button>
                    )}
                    {children}
                </div>
            </div>
        </div>
    );

    return ReactDOM.createPortal(modalContainer, document.body);
}

export default Modal