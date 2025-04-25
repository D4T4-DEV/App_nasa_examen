import AsyncStorage from "@react-native-async-storage/async-storage";

export const LocalStorage = {

    async save<T>(key: string, value: T): Promise<void> {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    },

    async load<T>(key: string): Promise<T | null> {
        const result = await AsyncStorage.getItem(key);
        return result ? (JSON.parse(result) as T) : null;
    },

    async remove(key: string): Promise<void> {
        await AsyncStorage.removeItem(key);
    },
};