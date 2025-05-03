import { Platform } from "react-native"

export const usePlataform = () => {
    const isWeb = Platform.OS === 'web'
    return {
        isWeb
    }
}