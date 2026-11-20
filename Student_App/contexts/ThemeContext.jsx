import React, { createContext, useContext, useState } from 'react'
import { Colors } from '../constants/Colors'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [scheme, setScheme] = useState('light');

  const toggleTheme = () => setScheme(scheme === 'dark' ? 'light' : 'dark');

  const theme = Colors[scheme];

  return (
    <ThemeContext.Provider value={{ scheme, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)