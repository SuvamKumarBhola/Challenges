import React, { useEffect, useState } from 'react';
import { Type, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

function LiveCharCounter() {
    const [text, setText] = useState("");
    const [status, setStatus] = useState("Safe");
    const MAX_LIMIT = 150;
    const WARNING_THRESHOLD = 100;
    const charCount = text.length;
    const remaining = MAX_LIMIT - charCount;
    const progress = (charCount / MAX_LIMIT) * 100;

    const handleChange = (e) => {
        const newText = e.target.value;
        if (newText.length <= MAX_LIMIT) {
            setText(newText);
        }
    };

    useEffect(() => {
        document.title = `${charCount}/${MAX_LIMIT} Characters`;

        if (charCount >= MAX_LIMIT) {
            setStatus("Limit Reached");
        } else if (charCount > WARNING_THRESHOLD) {
            setStatus("Warning");
        } else {
            setStatus("Safe");
        }

        return () => {
            document.title = "React App";
        };
    }, [charCount]);

    const getStatusConfig = () => {
        switch (status) {
            case "Limit Reached":
                return {
                    color: "text-red-600",
                    bg: "bg-red-50",
                    border: "border-red-300",
                    progressBar: "bg-red-500",
                    icon: <XCircle size={20} className="text-red-600" />
                };
            case "Warning":
                return {
                    color: "text-yellow-600",
                    bg: "bg-yellow-50",
                    border: "border-yellow-300",
                    progressBar: "bg-yellow-500",
                    icon: <AlertCircle size={20} className="text-yellow-600" />
                };
            default:
                return {
                    color: "text-green-600",
                    bg: "bg-green-50",
                    border: "border-green-300",
                    progressBar: "bg-green-500",
                    icon: <CheckCircle size={20} className="text-green-600" />
                };
        }
    };

    const statusConfig = getStatusConfig();
    const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-3xl">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-purple-100 rounded-lg">
                        <Type className="text-purple-600" size={28} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800">Live Character Counter</h1>
                        <p className="text-sm text-slate-500">Track your text as you type</p>
                    </div>
                </div>

                {/* Textarea */}
                <div className="mb-4">
                    <textarea
                        value={text}
                        onChange={handleChange}
                        rows="8"
                        placeholder="Start typing here..."
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all resize-none ${status === "Limit Reached"
                                ? "border-red-300 focus:border-red-500"
                                : status === "Warning"
                                    ? "border-yellow-300 focus:border-yellow-500"
                                    : "border-slate-200 focus:border-purple-500"
                            }`}
                    />
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                            className={`h-full ${statusConfig.progressBar} transition-all duration-300`}
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-slate-50 rounded-lg p-4 text-center">
                        <div className="text-3xl font-bold text-slate-800">{charCount}</div>
                        <div className="text-sm text-slate-500 mt-1">Characters</div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 text-center">
                        <div className="text-3xl font-bold text-slate-800">{wordCount}</div>
                        <div className="text-sm text-slate-500 mt-1">Words</div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 text-center">
                        <div className={`text-3xl font-bold ${statusConfig.color}`}>{remaining}</div>
                        <div className="text-sm text-slate-500 mt-1">Remaining</div>
                    </div>
                </div>

                {/* Status Badge */}
                <div className={`${statusConfig.bg} ${statusConfig.border} border-l-4 rounded-lg p-4 flex items-center gap-3`}>
                    <div className="shrink-0">
                        {statusConfig.icon}
                    </div>
                    <div className="flex-1">
                        <div className={`font-semibold ${statusConfig.color}`}>
                            {status === "Limit Reached" && "Character Limit Reached!"}
                            {status === "Warning" && "Approaching Character Limit"}
                            {status === "Safe" && "All Good - Keep Typing"}
                        </div>
                        <div className="text-sm text-slate-600 mt-1">
                            {status === "Limit Reached" && "You've reached the maximum character limit"}
                            {status === "Warning" && `Only ${remaining} characters remaining`}
                            {status === "Safe" && `${remaining} characters available`}
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6">
                    <button
                        onClick={() => setText("")}
                        disabled={charCount === 0}
                        className={`flex-1 py-3 rounded-lg font-semibold transition-all ${charCount === 0
                                ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                                : "bg-slate-600 hover:bg-slate-700 text-white shadow-lg hover:shadow-xl active:scale-95"
                            }`}
                    >
                        Clear Text
                    </button>
                    <button
                        onClick={() => navigator.clipboard.writeText(text)}
                        disabled={charCount === 0}
                        className={`flex-1 py-3 rounded-lg font-semibold transition-all ${charCount === 0
                                ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                                : "bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl active:scale-95"
                            }`}
                    >
                        Copy to Clipboard
                    </button>
                </div>

                {/* Footer Info */}
                <div className="mt-6 pt-6 border-t border-slate-200">
                    <div className="flex justify-between text-xs text-slate-500">
                        <span>Max limit: {MAX_LIMIT} characters</span>
                        <span>Warning at: {WARNING_THRESHOLD} characters</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LiveCharCounter;