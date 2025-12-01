import React, { createContext, useContext, useState, useEffect } from 'react';

const SettingsContext = createContext();

export const useSettings = () => {
    return useContext(SettingsContext);
};

export const SettingsProvider = ({ children }) => {
    // Theme: 'system', 'light', 'dark'
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'system');

    // Alignment: 'left', 'center', 'right'
    const [alignment, setAlignment] = useState(() => localStorage.getItem('alignment') || 'center');

    // Density: 'normal', 'compact'
    const [density, setDensity] = useState(() => localStorage.getItem('density') || 'normal');

    // Apply Theme
    useEffect(() => {
        const root = document.documentElement;
        const applyTheme = (selectedTheme) => {
            if (selectedTheme === 'dark') {
                root.classList.add('dark');
                root.classList.remove('light');
            } else if (selectedTheme === 'light') {
                root.classList.add('light');
                root.classList.remove('dark');
            } else {
                // System
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    root.classList.add('dark');
                    root.classList.remove('light');
                } else {
                    root.classList.add('light');
                    root.classList.remove('dark');
                }
            }
        };

        applyTheme(theme);
        localStorage.setItem('theme', theme);

        // Listener for system changes if theme is 'system'
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            if (theme === 'system') {
                applyTheme('system');
            }
        };
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [theme]);

    // Apply Alignment
    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove('align-left', 'align-center', 'align-right');
        root.classList.add(`align-${alignment}`);
        localStorage.setItem('alignment', alignment);
    }, [alignment]);

    // Apply Density
    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove('density-normal', 'density-compact');
        root.classList.add(`density-${density}`);
        localStorage.setItem('density', density);
    }, [density]);

    const value = {
        theme,
        setTheme,
        alignment,
        setAlignment,
        density,
        setDensity,
    };

    return (
        <SettingsContext.Provider value={value}>
            {children}
        </SettingsContext.Provider>
    );
};
