import { useEffect } from "react";
import NetInfo from '@react-native-community/netinfo';
import { setConnectivityState } from "@/store/slices/connectivitySlice";
import { useAppDispatch, useAppSelector } from "./useContextHook";

export const useConnectivity = () => {
    const dispatch = useAppDispatch();
    const { isConnected, connectionType } = useAppSelector((state) => state.connectivity);

    useEffect(() => {
        // Configura NetInfo para escuchar cambios de conectividad
        const unsubscribe = NetInfo.addEventListener(state => {
            dispatch(
                setConnectivityState({
                    isConnected: state.isConnected ?? false,
                    connectionType: state.type,
                })
            );
        });

        // Limpiar la suscripción cuando el componente se desmonta
        return () => unsubscribe();
    }, [dispatch]);


    return {
        isConnected,
        connectionType
    };
};
