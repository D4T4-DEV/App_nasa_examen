import { useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useContextHook";
import { deleteRover, fetchRover, fetchRoverOffline, saveRover } from "@/store/thunks/roverThunk";
import { Rover } from '@/domain/entities/Rover';
import { clearRover, setPage, setNoMorePages } from "@/store/slices/roverSlice";

export const useRoverViewModel = () => {
    const dispatch = useAppDispatch();

    // Acceder al estado de rovers
    const roverData = useAppSelector(state => state.rover.fetchData);
    const roverDataOffline = useAppSelector(state => state.rover.fetchDataOffline);
    const page = useAppSelector(state => state.rover.page);
    const noMorePages = useAppSelector(state => state.rover.noMorePages);

    // Estado para controlar si estamos cargando más datos
    const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

    // Función para cargar los datos de rovers
    const fetchDataRover = useCallback(() => {
        if (isLoadingMore || noMorePages) return;

        setIsLoadingMore(true);
        dispatch(fetchRover({ sunValue: 1000, page })).then(() => {
            setIsLoadingMore(false);
        });
    }, [dispatch, isLoadingMore, noMorePages, page]);

    // Función para cargar los datos offline
    const fetchRoverOffine = useCallback(() => {
        dispatch(fetchRoverOffline());
    }, [dispatch]);

    // Función para guardar los datos de los rovers
    const saveDataRover = useCallback((data: Rover[] | null) => {
        if (!data) {
            console.log('No tuve datos, no ejecute la accion de guardado');
            return;
        }
        dispatch(saveRover(data));
    }, [dispatch]);

    // Función para eliminar los datos guardados
    const deleteDataSavedRover = useCallback(() => {
        dispatch(deleteRover());
    }, [dispatch]);

    // Función para limpiar el estado de rovers
    const clearRoverState = useCallback(() => {
        dispatch(clearRover());
    }, [dispatch]);

    // Función para manejar la paginación y los datos cargados
    const handlePagination = useCallback(() => {
        if (roverData.data && roverData.data.length === 0) {
            // Si no hay más datos, marcar que no hay más páginas
            dispatch(setNoMorePages(true));
        } else {
            // Si hay más datos, actualizar la página
            dispatch(setPage(page + 1));
        }
    }, [dispatch, roverData.data, page]);

    return {
        roverData,
        roverDataOffline,
        fetchDataRover,
        fetchRoverOffine,
        saveDataRover,
        clearRoverState,
        deleteDataSavedRover,
        handlePagination,
        isLoadingMore,
        noMorePages
    };
};
