import React, { useState } from 'react';
import { Plus, Trash2, X, ListChecks, Inbox } from 'lucide-react';

function DynamicList() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddItem = () => {
        if (!inputValue.trim()) return;
        const newItem = {
            id: Date.now(),
            text: inputValue,
            createdAt: new Date().toLocaleTimeString()
        };
        setItems([...items, newItem]);
        setInputValue('');
    };

    const handleDelete = (idToDelete) => {
        setItems(items.filter((item) => item.id !== idToDelete));
    };

    const handleClear = () => {
        setItems([]);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddItem();
        }
    };

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-100 rounded-lg">
                        <ListChecks className="text-blue-600" size={28} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800">Dynamic List Manager</h1>
                        <p className="text-sm text-slate-500">Organize your items efficiently</p>
                    </div>
                </div>

                {/* Input Section */}
                <div className="mb-6">
                    <div className="flex gap-2 mb-3">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Enter an item..."
                            className="flex-1 px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                        />
                        <button
                            onClick={handleAddItem}
                            disabled={!inputValue.trim()}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${inputValue.trim()
                                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl active:scale-95'
                                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                }`}
                        >
                            <Plus size={20} />
                            Add
                        </button>
                    </div>

                    {items.length > 0 && (
                        <button
                            onClick={handleClear}
                            className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg font-medium transition-all active:scale-95"
                        >
                            <Trash2 size={18} />
                            Clear All ({items.length})
                        </button>
                    )}
                </div>

                {/* List Section */}
                <div className="min-h-75">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-16 text-center">
                            <div className="p-4 bg-slate-100 rounded-full mb-4">
                                <Inbox className="text-slate-400" size={48} />
                            </div>
                            <p className="text-slate-500 font-medium mb-1">No items to display</p>
                            <p className="text-sm text-slate-400">Add your first item to get started</p>
                        </div>
                    ) : (
                        <div className="space-y-2">
                            <div className="flex justify-between items-center mb-4">
                                <p className="text-sm font-medium text-slate-600">
                                    {items.length} {items.length === 1 ? 'item' : 'items'}
                                </p>
                            </div>
                            <ul className="space-y-2">
                                {items.map((item, index) => (
                                    <li
                                        key={item.id}
                                        className="group flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 transition-all animate-slide-in"
                                        style={{ animationDelay: `${index * 0.05}s` }}
                                    >
                                        <div className="flex items-center gap-3 flex-1">
                                            <div className="shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                                <span className="text-sm font-semibold text-blue-600">
                                                    {index + 1}
                                                </span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-slate-800 font-medium truncate">{item.text}</p>
                                                <p className="text-xs text-slate-400 mt-1">Added at {item.createdAt}</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="shrink-0 p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                                            title="Delete item"
                                        >
                                            <X size={20} />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Footer Stats */}
                {items.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-slate-200">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-slate-600">
                                Total items: <span className="font-semibold text-slate-800">{items.length}</span>
                            </span>
                            <span className="text-slate-400">
                                Last added: {items[items.length - 1]?.createdAt}
                            </span>
                        </div>
                    </div>
                )}
            </div>

            <style>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
          opacity: 0;
        }
      `}</style>
        </div>
    );
}

export default DynamicList;