import { LocalStorage } from "@/services/storage";
import { InitialState } from "@react-navigation/native";
import { KeysStorage_Configuration } from "@/core/keys_storage";
import { useState } from "react";

export const useNavigationState = () => {
    const [initialStateNavigation, setInitialStateNavigation] = useState<InitialState | undefined>(undefined);
    const [isReady, setIsReady] = useState<boolean>(false);
    const Storage_Key = KeysStorage_Configuration.NAVIGATION_PERSISTENCE_KEY;


    // Guardar el estado de la navegación
    const saveStateNavigation = async (state: InitialState) => {
        await LocalStorage.save(Storage_Key, state);
    }

    const loadStateNavigation = async () => {
        const savedStateNavigation = await LocalStorage.load<InitialState>(Storage_Key);
        if (savedStateNavigation) {
            setInitialStateNavigation(savedStateNavigation);
        }
        setIsReady(true);
    }

    const clearStateNavigation = async () => {
        await LocalStorage.remove(Storage_Key);
    }

    return {
        initialStateNavigation,
        isReady,
        saveStateNavigation,
        loadStateNavigation,
        clearStateNavigation,
    };
}