import React from 'react';
import ExpImgTheDayScreen from '@/presentation/screens/apod/ExpImgTheDayScreen';
import ImgTheDay from '@/presentation/screens/apod/ImgTheDayScreen';
import SearchImgOtherDays from '@/presentation/screens/apod/SearchImgOtherDays';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function NavigationBottomTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            {/* Imagen del dia del APOD */}
            <Tab.Screen
                name='ImgTheDay'
                options={{
                    title: 'Imagen del día',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="image" color={color} size={size} />
                    ),
                }}
            >
                {() => <ImgTheDay />}
            </Tab.Screen>
            {/* Explicación de la imagen del dia */}
            <Tab.Screen
                name='ExplImgTheDay'
                options={{
                    title: 'Descripción',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="document-text" color={color} size={size} />
                    ),
                }}
            >
                {() => <ExpImgTheDayScreen />}
            </Tab.Screen>
            {/* Buscar otros días */}
            <Tab.Screen
                name='SearchImgOtherDays'
                options={{
                    title: 'Buscar',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="search" color={color} size={size} />
                    ),
                }}
            >
                {() => <SearchImgOtherDays />}
            </Tab.Screen>
        </Tab.Navigator>
    );
}