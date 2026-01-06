import { useState } from 'react'

function BuggyWidget({ title, children }) {
    const [count, setCount] = useState(0);

    if (count === 5) {
        throw new Error(`Crashed at ${title} !!`)
    }

    return (
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
            <p className="text-gray-300 mb-4 text-lg">
                Click Count: <span className="text-purple-400 font-semibold">{count}</span>
            </p>
            <button
                onClick={() => setCount(count + 1)}
                className="px-6 py-3 bg-linear-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
            >
                Click Me
            </button>
        </div>
    )
}

export default BuggyWidget