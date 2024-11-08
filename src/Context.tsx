import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ContextType {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    language: string;
    setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

const Context = createContext<ContextType | undefined>(undefined);

export const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<string>(window.matchMedia('(prefers-color-scheme: dark)').matches? 'dark' : 'light');
    const [language, setLanguage] = useState<string>('en');

    return (
        <Context.Provider value={{ theme, setTheme, language, setLanguage }}>
            {children}
        </Context.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error('useTheme must be used within a ContextProvider');
    }
    return context;
};

export const useLanguage = () => {

};
