import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useContextHook";
import { deleteEarth, fetchEarth, fetchEarthOffline, saveEarth } from "@/store/thunks/earthThunk";
import { Earth } from "@/domain/entities/Earth";
import { clearEarth } from "@/store/slices/earthSlice";


export const useEarthViewModel = () => {

    const dispatch = useAppDispatch();

    // Acceder al estado de earth
    const earthData = useAppSelector(state => state.earth.fetchData);
    const offlineEarth = useAppSelector(state => state.earth.fetchData);

    // Acciones encapsuladas
    const fetchDataEarth = useCallback(({ latitude, longitude, date }: { latitude: number; longitude: number; date: Date }) => {
        dispatch(fetchEarth({ latitude, longitude, date }));
    }, [dispatch]);

    const fetchDataOfflineEarth = useCallback(() => {
        dispatch(fetchEarthOffline());
    }, [dispatch]);

    const saveCurrentEarth = useCallback((earth: Earth | null) => {
        if (!earth) {
            console.log('No tuve datos, no ejecute la accion de guardado');
            return;
        }
        dispatch(saveEarth(earth));
    }, [dispatch]);

    const deleteCurrentEarth = useCallback(() => {
        dispatch(deleteEarth());
    }, [dispatch]);

    const clearEarthState = useCallback(() => {
        dispatch(clearEarth());
    }, [dispatch]);

    return {
        earthData,
        offlineEarth,
        fetchDataEarth,
        fetchDataOfflineEarth,
        saveCurrentEarth,
        deleteCurrentEarth,
        clearEarthState
    }
};