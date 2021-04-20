import { useContext } from 'react';
import ThemeProvider from './ThemeProvider';

export default function useTheme(){
    return useContext(ThemeProvider.ThemeContext);
}