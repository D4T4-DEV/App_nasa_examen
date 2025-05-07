import { darkTheme, lightTheme } from "@/core/themes";
import { useAppDispatch, useAppSelector } from "./useContextHook"
import { DarkTheme as navDark, DefaultTheme as navLight } from "@react-navigation/native";
import { setDarkMode, setThemeBasedTime } from "@/store/slices/themeSlice";
import { useEffect, useState } from "react";

export const useTheme = () => {
    const dispatch = useAppDispatch();
    const isDarkContext = useAppSelector((state) => state.theme.isDarkMode);

    // useStates
    const [hour, setHour] = useState<number | undefined>(8);

    // Definicion de temas 
    const paperTheme = isDarkContext ? darkTheme : lightTheme; // tema para react-native-paper
    const navigationTheme = isDarkContext ? navDark : navLight // tema para react-navigation

    // handlers
    const setTheme = (isDarkMode: boolean) => {
        setHour(_ => isDarkMode ? 22 : 0);
        dispatch(setDarkMode(isDarkMode))
    }

    const setThemeBasedHour = (cumstomHour?: number) => {
        const hour = cumstomHour ?? new Date().getHours();
        setHour(hour);
        dispatch(setThemeBasedTime(hour));
    }

    // // useEffects
    // useEffect(() => {
    //     // Seteamos un nuevo tema cuando cambie 
    //     // el valor de la hora
    //     setThemeBasedHour(hour);
    // }, [hour]);
    // Comentamos esta linea esto era para cuando inicie la aplicación 
    // setee el tema en base el horario del dispositivo

    return {
        isDarkContext,
        paperTheme,
        navigationTheme,
        darkTheme,
        lightTheme,
        setTheme,
        setThemeBasedHour
    }
}