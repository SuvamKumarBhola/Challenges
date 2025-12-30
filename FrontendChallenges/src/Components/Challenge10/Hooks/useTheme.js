import { useEffect, useState } from 'react'

function useTheme() {
    const [theme, setTheme]= useState(()=>{
        const savedTheme = localStorage.getItme('app-theme')
        if(savedTheme) return savedTheme;

        if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
        return 'light';
    });

    useEffect(()=>{
        document.documentElement.setAttribute('dark-theme', theme)
        localStorage.setItem('app-theme', theme)
    },[theme]);

    const toggleTheme=()=>{
        setTheme((prevTheme)=> (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return {theme, toggleTheme};
};

export default useTheme;