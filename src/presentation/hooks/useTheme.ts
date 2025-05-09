import { darkTheme, lightTheme } from "@/core/themes";
import { useAppDispatch, useAppSelector } from "./useContextHook"
import { DarkTheme as navDark, DefaultTheme as navLight } from "@react-navigation/native";
import { setDarkMode, setThemeBasedTime } from "@/store/slices/themeSlice";
import { KeysStorage_Configuration } from "@/core/keys_storage";
import { useEffect, useState } from "react";
import { LocalStorage } from "@/services/storage";

export const useTheme = () => {
    const dispatch = useAppDispatch();
    const isDarkContext = useAppSelector((state) => state.theme.isDarkMode);

    const THEME_KEY = KeysStorage_Configuration.THEME_PERSISTENCE_KEY;

    // useStates
    const [hour, setHour] = useState<number | undefined>(8);

    // Definicion de temas 
    const paperTheme = isDarkContext ? darkTheme : lightTheme; // tema para react-native-paper
    const navigationTheme = isDarkContext ? navDark : navLight // tema para react-navigation

    // handlers
    const setTheme = async (isDarkMode: boolean) => {
        setHour(_ => isDarkMode ? 22 : 0);
        dispatch(setDarkMode(isDarkMode));
    }

    const setThemeBasedHour = async (cumstomHour?: number) => {
        const hour = cumstomHour ?? new Date().getHours();
        setHour(hour);
        dispatch(setThemeBasedTime(hour));
    }

    const loadTheme = async () => {
        const dataTheme = await LocalStorage.load<boolean>(THEME_KEY);
        if (typeof dataTheme === "boolean") {
            dispatch(setDarkMode(dataTheme));
        }
    };

    const savedTheme = async (isDarkMode: boolean) => {
        await LocalStorage.save<boolean>(THEME_KEY, isDarkMode);
    }

    // // useEffects
    // useEffect(() => {
    //     // Seteamos un nuevo tema cuando cambie 
    //     // el valor de la hora
    //     setThemeBasedHour(hour);
    // }, [hour]);
    // Comentamos esta linea esto era para cuando inicie la aplicación 
    // setee el tema en base el horario del dispositivo

    // Carga los datos guardados del tema
    useEffect(() => {
        loadTheme();
    }, []);

    // Guarda el tema siempre que cambia su estado
    useEffect(() => {
        savedTheme(isDarkContext);
    }, [isDarkContext]);

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