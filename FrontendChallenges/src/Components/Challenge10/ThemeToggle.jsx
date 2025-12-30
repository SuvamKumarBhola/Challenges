import useTheme from './Hooks/UseTheme'

function ThemeToggle() {
    const {theme, toggleTheme} = useTheme();

  return (
    <button 
        className='theme-toggle-button'
        onClick={toggleTheme}
        aria-label='Toggle Dark Mode'>
        {theme === 'light' ? '☀️: Switch to Dark Mode' : '🌙: Switch to Light Mode'}
    </button>
  )
}

export default ThemeToggle 