import React from 'react';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/presentation/hooks/useTheme';

export const ThemeToggleButton = () => {
    const { isDarkContext, setTheme } = useTheme();

    return (
        <Pressable
            onPress={() => setTheme(!isDarkContext)}
            style={{ 
                margin: 20
            }}
        >
            <Ionicons
                name={isDarkContext ? 'sunny' : 'moon'}
                size={24}
                color={isDarkContext ? 'white' : 'black'}
            />
        </Pressable>
    );
};
