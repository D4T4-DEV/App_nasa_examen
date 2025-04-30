import { useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useContextHook";
import { deleteNeows, fetchNeows, fetchNeowsForId, saveNeows } from "@/store/thunks/neowsThunk";
import { NeoWs } from "@/domain/entities/NeoWs";
import { clearNeows } from "@/store/slices/neowsSlice";

export const useNeowsViewModel = () => {
    const dispatch = useAppDispatch();

    // State para controlar la pagina
    const [page, setPage] = useState<number>(0);

    // Acceder al estado de neows
    const neowsData = useAppSelector(state => state.neows.fetchData);
    const neowsDataForId = useAppSelector(state => state.neows.fetchDataForId);
    const offilineNeows = useAppSelector(state => state.neows.fetchDataOffline);

    // Acciones encapsuldas
    const fetchDataNeows = useCallback(() => {
        dispatch(fetchNeows(page));
        setPage(antPage => antPage + 1);
    }, [dispatch]);

    const fetchDataForId = useCallback((id: string) => {
        dispatch(fetchNeowsForId(id));
    }, [dispatch]);

    const saveCurrentNeows = useCallback((data: NeoWs | null) => {
        if (!data) {
            console.log('No tuve datos, no ejecute la accion de guardado');
            return;
        }
        dispatch(saveNeows(data));
    }, [dispatch]);

    const deleteSavedDataNeows = useCallback(() => {
        dispatch(deleteNeows());
    }, [dispatch]);

    const clearNeowsState = useCallback(() => {
        dispatch(clearNeows());
    }, [dispatch]);

    return {
        neowsData,
        neowsDataForId,
        offilineNeows,
        fetchDataNeows,
        fetchDataForId,
        saveCurrentNeows,
        clearNeowsState,
        deleteSavedDataNeows
    };

};