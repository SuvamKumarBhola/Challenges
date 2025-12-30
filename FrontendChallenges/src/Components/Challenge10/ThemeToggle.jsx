import useTheme from './Hooks/UseTheme'

function ThemeToggle() {
    const {theme, toggleTheme} = useTheme();

  return (
      <button
          className="px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white focus:ring-purple-500"
          onClick={toggleTheme}
          aria-label="Toggle Dark Mode"
      >
          <span className="flex items-center gap-2">
              <span className="text-xl">
                  {theme === 'light' ? '☀️' : '🌙'}
              </span>
              <span>
                  {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              </span>
          </span>
      </button>
  )
}

export default ThemeToggle 