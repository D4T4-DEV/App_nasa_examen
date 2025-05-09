import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';

export const lightTheme = {
    ...MD3LightTheme,
    colors: {
        ...MD3LightTheme.colors,
        primary: '#6200ee',
        background: '#ffffff',
        surface: '#ffffff',
        text: '#000000',
    },
};

export const darkTheme = {
    ...MD3DarkTheme,
    colors: {
        ...MD3DarkTheme.colors,
        primary: '#bb86fc',
        background: '#121212',
        surface: '#121212',
        text: '#ffffff',
    },
};