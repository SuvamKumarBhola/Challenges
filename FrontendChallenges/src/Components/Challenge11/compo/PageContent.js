const PageContent = () => {
    const { theme } = useTheme();

    return (
        <div className="min-h-screen p-12 transition-all duration-300 ease-in-out bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-6 bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                    Current Theme: {theme.toUpperCase()}
                </h2>
                <p className="text-lg leading-relaxed mb-8 text-gray-700 dark:text-gray-300">
                    This component is reading state from the Context API.
                    It does not receive any props from App.js!
                </p>

                {/* Info Card */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 transition-colors duration-300 mb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                        How Context API Works
                    </h3>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                        <li className="flex items-start gap-3">
                            <span className="text-blue-500 dark:text-blue-400 mt-1">→</span>
                            <span>The ThemeProvider wraps the entire application</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-blue-500 dark:text-blue-400 mt-1">→</span>
                            <span>Any component can access theme state using the useTheme hook</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-blue-500 dark:text-blue-400 mt-1">→</span>
                            <span>No prop drilling required - components communicate through context</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-blue-500 dark:text-blue-400 mt-1">→</span>
                            <span>Changes propagate automatically to all consuming components</span>
                        </li>
                    </ul>
                </div>

                {/* Feature Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl p-6 border border-blue-200 dark:border-blue-700 transition-colors duration-300">
                        <div className="text-3xl mb-3">🎨</div>
                        <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                            Dynamic Styling
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            All styles automatically adapt based on the current theme state
                        </p>
                    </div>

                    <div className="bg-linear-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl p-6 border border-purple-200 dark:border-purple-700 transition-colors duration-300">
                        <div className="text-3xl mb-3">⚡</div>
                        <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                            Instant Updates
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Theme changes are reflected immediately across all components
                        </p>
                    </div>

                    <div className="bg-linear-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-xl p-6 border border-green-200 dark:border-green-700 transition-colors duration-300">
                        <div className="text-3xl mb-3">🔄</div>
                        <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                            State Management
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Centralized theme state eliminates the need for prop drilling
                        </p>
                    </div>

                    <div className="bg-linear-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 rounded-xl p-6 border border-orange-200 dark:border-orange-700 transition-colors duration-300">
                        <div className="text-3xl mb-3">✨</div>
                        <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                            Clean Code
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                            Context API provides an elegant solution for global state
                        </p>
                    </div>
                </div>

                {/* Stats */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                    <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
                        Theme Statistics
                    </h3>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                {theme === 'light' ? '☀️' : '🌙'}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                Active Theme
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                                0.3s
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                Transition Time
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                                100%
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                Coverage
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageContent;