import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useContextHook";
import { fetchEpic, fetchEpicForDate, fetchEpicOffline, saveEpic } from "@/store/thunks/epicThunk";
import { Epic } from "@/domain/entities/Epic";
import { clearEpic } from "@/store/slices/epicSlice";

export const useEpicViewModel = () => {
    const dispatch = useAppDispatch();

    // Acceder al estado de epic
    const epicData = useAppSelector(state => state.epic.fetchData);
    const epicDataOtherDate = useAppSelector(state => state.epic.fetchDataOtherDay);
    const offlineEpic = useAppSelector(state => state.epic.fetchDataOffline);

    // Acciones encapsuladas
    const fetchDataEpic = useCallback(() => {
        dispatch(fetchEpic());
    }, [dispatch]);

    const fetchDataOtherDayEpic = useCallback((date: Date) => {
        dispatch(fetchEpicForDate(date));
    }, [dispatch]);

    const fetchDataOfflineEpic = useCallback(() => {
        dispatch(fetchEpicOffline());
    }, [dispatch]);

    const saveCurrentEpicData = useCallback((data: Epic | null) => {
        if (!data) {
            console.log('No tuve datos, no ejecute la acción de guardado');
            return;
        }
        dispatch(saveEpic(data));
    }, [dispatch]);

    const deleteCurrentEpic = useCallback(() => {
        dispatch(clearEpic());
    }, [dispatch]);

    return {
        epicData,
        epicDataOtherDate,
        offlineEpic,
        fetchDataEpic,
        fetchDataOtherDayEpic,
        fetchDataOfflineEpic,
        saveCurrentEpicData,
        deleteCurrentEpic
    };
}