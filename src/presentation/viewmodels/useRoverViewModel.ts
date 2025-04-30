import { useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useContextHook";
import { deleteRover, fetchRover, fetchRoverOffline, saveRover } from "@/store/thunks/roverThunk";
import { Rover } from '@/domain/entities/Rover';

export const useRoverViewModel = () => {
    const dispatch = useAppDispatch();

    // State para controlar la pagina 
    const [page, setPage] = useState<number>(0);

    // Acceder a las acciones encapsuladas
    const roverData = useAppSelector(state => state.rover.fetchData);
    const roverDataOffline = useAppSelector(state => state.rover.fetchDataOffline);


    // Acciones encapsuladas
    const fetchDataRover = useCallback(() => {
        dispatch(fetchRover({ sunValue: 1000, page }));
    }, [useCallback]);

    const fetchRoverOffine = useCallback(() => {
        dispatch(fetchRoverOffline());
    }, [dispatch]);

    const saveDataRover = useCallback((data: Rover[] | null) => {
        if (!data) {
            console.log('No tuve datos, no ejecute la accion de guardado');
            return;
        }
        dispatch(saveRover(data));
    }, [dispatch]);

    const deleteDataSavedRover = useCallback(() => {
        dispatch(deleteRover());
    }, [dispatch]);

    return {
        roverData,
        roverDataOffline,
        fetchDataRover,
        fetchRoverOffine,
        saveDataRover,
        deleteDataSavedRover
    };
};