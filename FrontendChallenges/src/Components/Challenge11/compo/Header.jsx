const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="px-6 py-5 border-b border-gray-300 dark:border-gray-700 flex justify-between items-center bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 shadow-sm">
            <h1 className="text-2xl md:text-3xl font-bold bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Global State App
            </h1>
            <button
                onClick={toggleTheme}
                className="px-5 py-2.5 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 active:scale-95 bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            >
                <span className="flex items-center gap-2">
                    <span>{theme === 'light' ? '🌙' : '☀️'}</span>
                    <span className="hidden sm:inline">
                        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
                    </span>
                    <span className="sm:hidden">
                        {theme === 'light' ? 'Dark' : 'Light'}
                    </span>
                </span>
            </button>
        </header>
    );
};

export default Header;