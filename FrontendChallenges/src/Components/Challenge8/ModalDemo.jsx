import { useState } from 'react';
import { Info, CheckCircle, AlertTriangle } from 'lucide-react';
function ModalDemo() {
    const [basicModal, setBasicModal] = useState(false);
    const [infoModal, setInfoModal] = useState(false);
    const [successModal, setSuccessModal] = useState(false);
    const [warningModal, setWarningModal] = useState(false);

    return (
        <div className="min-h-screen bg-slate-100 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-slate-800 mb-2">Modal Component</h1>
                        <p className="text-slate-500">Click any button to open a modal with React Portal</p>
                    </div>

                    {/* Trigger Buttons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button
                            onClick={() => setBasicModal(true)}
                            className="px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all active:scale-95"
                        >
                            Open Basic Modal
                        </button>
                        <button
                            onClick={() => setInfoModal(true)}
                            className="px-6 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all active:scale-95"
                        >
                            Open Info Modal
                        </button>
                        <button
                            onClick={() => setSuccessModal(true)}
                            className="px-6 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all active:scale-95"
                        >
                            Open Success Modal
                        </button>
                        <button
                            onClick={() => setWarningModal(true)}
                            className="px-6 py-4 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all active:scale-95"
                        >
                            Open Warning Modal
                        </button>
                    </div>

                    {/* Info Box */}
                    <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
                        <h3 className="font-semibold text-blue-900 mb-2">Features:</h3>
                        <ul className="text-sm text-blue-800 space-y-1">
                            <li>✓ Rendered as direct child of body tag (Portal)</li>
                            <li>✓ Press ESC key to close</li>
                            <li>✓ Click backdrop to close</li>
                            <li>✓ Prevents body scrolling when open</li>
                            <li>✓ Smooth animations</li>
                        </ul>
                    </div>
                </div>

                {/* Basic Modal */}
                <Modal isOpen={basicModal} onClose={() => setBasicModal(false)} title="Basic Modal">
                    <div className="space-y-4">
                        <p className="text-slate-700">
                            I'm rendered in a Portal! Inspect the element and you'll see I'm a direct child of the body tag,
                            not nested in the component tree.
                        </p>
                        <div className="p-3 bg-slate-50 rounded-lg">
                            <code className="text-sm text-slate-600">
                                ReactDOM.createPortal(modal, document.body)
                            </code>
                        </div>
                    </div>
                </Modal>

                {/* Info Modal */}
                <Modal isOpen={infoModal} onClose={() => setInfoModal(false)}>
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                            <Info className="text-purple-600" size={32} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-3">Information</h2>
                        <p className="text-slate-600 mb-6">
                            This is an informational modal. It provides important details to the user without requiring immediate action.
                        </p>
                        <button
                            onClick={() => setInfoModal(false)}
                            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all active:scale-95"
                        >
                            Got it!
                        </button>
                    </div>
                </Modal>

                {/* Success Modal */}
                <Modal isOpen={successModal} onClose={() => setSuccessModal(false)}>
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                            <CheckCircle className="text-green-600" size={32} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-3">Success!</h2>
                        <p className="text-slate-600 mb-6">
                            Your action has been completed successfully. All changes have been saved.
                        </p>
                        <button
                            onClick={() => setSuccessModal(false)}
                            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all active:scale-95"
                        >
                            Awesome!
                        </button>
                    </div>
                </Modal>

                {/* Warning Modal */}
                <Modal isOpen={warningModal} onClose={() => setWarningModal(false)}>
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                            <AlertTriangle className="text-yellow-600" size={32} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-3">Warning</h2>
                        <p className="text-slate-600 mb-6">
                            This action cannot be undone. Are you sure you want to proceed?
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setWarningModal(false)}
                                className="flex-1 px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-all active:scale-95"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setWarningModal(false)}
                                className="flex-1 px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg font-semibold transition-all active:scale-95"
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                </Modal>
            </div>

            <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
        </div>
    );
}

export default ModalDemo;