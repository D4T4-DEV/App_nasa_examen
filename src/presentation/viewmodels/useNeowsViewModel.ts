import { useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useContextHook";
import { deleteNeows, fetchNeows, fetchNeowsForId, saveNeows } from "@/store/thunks/neowsThunk";
import { NeoWs } from "@/domain/entities/NeoWs";
import { clearNeows, setPage, setNoMorePages } from "@/store/slices/neowsSlice";

export const useNeowsViewModel = () => {
    const dispatch = useAppDispatch();

    // Acceder al estado de neows
    const neowsData = useAppSelector(state => state.neows.fetchData);
    const neowsDataForId = useAppSelector(state => state.neows.fetchDataForId);
    const offilineNeows = useAppSelector(state => state.neows.fetchDataOffline);
    const page = useAppSelector(state => state.neows.page);
    const noMorePages = useAppSelector(state => state.neows.noMorePages);

    // Estado para controlar si estamos cargando mas datos
    const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

    // Funcion para cargar los datos
    const fetchDataNeows = useCallback(() => {
        if (isLoadingMore || noMorePages) return;
    
        setIsLoadingMore(true);
        dispatch(fetchNeows(page)).then(() => {
            setIsLoadingMore(false);
        });
    }, [dispatch, isLoadingMore, noMorePages, page]);

    // Función para cargar datos de un unico NeoWs
    const fetchDataForId = useCallback((id: string) => {
        dispatch(fetchNeowsForId(id));
    }, [dispatch]);

    // Funcion para guardar un NeoWs
    const saveCurrentNeows = useCallback((data: NeoWs | null) => {
        if (!data) {
            console.log('No tuve datos, no ejecute la accion de guardado');
            return;
        }
        dispatch(saveNeows(data));
    }, [dispatch]);

    // Funcion para eliminar los datos guardados
    const deleteSavedDataNeows = useCallback(() => {
        dispatch(deleteNeows());
    }, [dispatch]);

    // Funcion para limpiar el estado de Neows
    const clearNeowsState = useCallback(() => {
        dispatch(clearNeows());
    }, [dispatch]);

    // Funcion para manejar la página y los datos cargados
    const handlePagination = useCallback(() => {
        if (neowsData.data && neowsData.data.length === 0) {
            // Si no hay mas datos, marcar que no hay mas páginas
            dispatch(setNoMorePages(true));
        } else {
            // Si hay mas datos, actualizar la pagina
            dispatch(setPage(page + 1));
        }
    }, [dispatch, neowsData.data, page]);

    return {
        neowsData,
        neowsDataForId,
        offilineNeows,
        fetchDataNeows,
        fetchDataForId,
        saveCurrentNeows,
        clearNeowsState,
        deleteSavedDataNeows,
        handlePagination,
        isLoadingMore,
        noMorePages
    };
};
