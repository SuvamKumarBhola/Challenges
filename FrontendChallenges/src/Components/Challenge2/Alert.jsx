import React, { useEffect, useState } from 'react';
import { CheckCircle, XCircle, AlertTriangle, X, Info } from 'lucide-react';

function Alert({ type = 'info', message, duration = 3000, onClose }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (duration) {
            const timer = setTimeout(() => {
                setIsVisible(false);
                if (onClose) onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [duration, onClose]);

    const alertConfig = {
        success: {
            bg: 'bg-green-50',
            border: 'border-green-200',
            text: 'text-green-800',
            icon: <CheckCircle size={20} className="text-green-600" />,
            iconBg: 'bg-green-100'
        },
        error: {
            bg: 'bg-red-50',
            border: 'border-red-200',
            text: 'text-red-800',
            icon: <XCircle size={20} className="text-red-600" />,
            iconBg: 'bg-red-100'
        },
        warning: {
            bg: 'bg-yellow-50',
            border: 'border-yellow-200',
            text: 'text-yellow-800',
            icon: <AlertTriangle size={20} className="text-yellow-600" />,
            iconBg: 'bg-yellow-100'
        },
        info: {
            bg: 'bg-blue-50',
            border: 'border-blue-200',
            text: 'text-blue-800',
            icon: <Info size={20} className="text-blue-600" />,
            iconBg: 'bg-blue-100'
        }
    };

    const config = alertConfig[type] || alertConfig.info;

    const handleClose = () => {
        setIsVisible(false);
        if (onClose) onClose();
    };

    if (!isVisible) return null;

    return (
        <div className={`${config.bg} ${config.border} ${config.text} border-l-4 rounded-lg p-4 shadow-md flex items-start gap-3 animate-slide-down`}>
            <div className={`${config.iconBg} p-2 rounded-full shrink-0`}>
                {config.icon}
            </div>
            <div className="flex-1 min-w-0">
                <p className="font-medium leading-relaxed">{message}</p>
            </div>
            <button
                onClick={handleClose}
                className="shrink-0 p-1 hover:bg-black hover:bg-opacity-5 rounded-lg transition-colors"
                aria-label="Close alert"
            >
                <X size={18} />
            </button>
        </div>
    );
}

// Demo Component to showcase all alert types
function AlertDemo() {
    const [alerts, setAlerts] = useState([]);

    const addAlert = (type, message) => {
        const newAlert = {
            id: Date.now(),
            type,
            message
        };
        setAlerts(prev => [...prev, newAlert]);
    };

    const removeAlert = (id) => {
        setAlerts(prev => prev.filter(alert => alert.id !== id));
    };

    return (
        <div className="min-h-screen bg-slate-100 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
                    <h1 className="text-3xl font-bold text-slate-800 mb-2">Alert Component</h1>
                    <p className="text-slate-500 mb-6">Modern, customizable alert notifications</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <button
                            onClick={() => addAlert('success', 'Operation completed successfully!')}
                            className="px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl active:scale-95"
                        >
                            Success
                        </button>
                        <button
                            onClick={() => addAlert('error', 'An error occurred. Please try again.')}
                            className="px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl active:scale-95"
                        >
                            Error
                        </button>
                        <button
                            onClick={() => addAlert('warning', 'Please review your settings before continuing.')}
                            className="px-4 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl active:scale-95"
                        >
                            Warning
                        </button>
                        <button
                            onClick={() => addAlert('info', 'Here\'s some helpful information for you.')}
                            className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl active:scale-95"
                        >
                            Info
                        </button>
                    </div>
                </div>

                <div className="space-y-4">
                    {alerts.map((alert) => (
                        <Alert
                            key={alert.id}
                            type={alert.type}
                            message={alert.message}
                            duration={5000}
                            onClose={() => removeAlert(alert.id)}
                        />
                    ))}
                </div>

                {alerts.length === 0 && (
                    <div className="text-center py-12 text-slate-400">
                        <p className="text-lg">Click any button above to see alerts in action</p>
                    </div>
                )}
            </div>

            <style>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
        </div>
    );
}

export default AlertDemo;