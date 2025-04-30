import { RequestState } from "@/core/interfaces/request/RequestState";
import { createRequestState } from "@/core/utils/createRequestState";
import { NeoWs } from "@/domain/entities/NeoWs";
import { createSlice } from "@reduxjs/toolkit";
import { fetchNeows, fetchNeowsForId, fetchNeowsOffline, saveNeows } from "../thunks/neowsThunk";

interface NeowsState {
    fetchData: RequestState<NeoWs[]>;
    fetchDataForId: RequestState<NeoWs>;
    fetchDataOffline: RequestState<NeoWs[]>;
}

// Estado incial
const initialState: NeowsState = {
    fetchData: createRequestState<NeoWs[]>(),
    fetchDataForId: createRequestState<NeoWs>(),
    fetchDataOffline: createRequestState<NeoWs[]>(),
}

// Slice
export const neowsSlice = createSlice({
    name: 'neows',
    initialState,
    reducers: {
        // Borrar los estados del slice
        clearNeows(state) {
            state.fetchData = { ...initialState.fetchData };
            state.fetchDataForId = { ...initialState.fetchDataForId };
            state.fetchDataOffline = { ...initialState.fetchDataOffline };
        },
    },
    extraReducers: (builder) => {
        builder

            // Obtener los datos en base a los datos mas recientes que tenga
            .addCase(fetchNeows.pending, (state) => {
                state.fetchData = { loading: true, error: null, data: null };
            })
            .addCase(fetchNeows.fulfilled, (state, action) => {
                state.fetchData = { loading: false, error: null, data: action.payload };
            })
            .addCase(fetchNeows.rejected, (state, action) => {
                state.fetchData = { loading: false, error: action.error.message ?? 'Error fetching info NeoWs', data: null };
            })

            // Obtener datos en base a una fecha pasada
            .addCase(fetchNeowsForId.pending, (state) => {
                state.fetchDataForId = { loading: true, error: null, data: null };
            })
            .addCase(fetchNeowsForId.fulfilled, (state, action) => {
                state.fetchDataForId = { loading: false, error: null, data: action.payload };
            })
            .addCase(fetchNeowsForId.rejected, (state, action) => {
                state.fetchDataForId = { loading: false, error: action.error.message ?? 'Error fetching id selected info NeoWs', data: null };
            })

            // Obtener los datos guardados
            .addCase(fetchNeowsOffline.pending, (state) => {
                state.fetchDataOffline = { loading: true, error: null, data: null };
            })
            .addCase(fetchNeowsOffline.fulfilled, (state, action) => {
                state.fetchDataOffline = { loading: false, error: null, data: action.payload };
            })
            .addCase(fetchNeowsOffline.rejected, (state, action) => {
                state.fetchDataOffline = { loading: false, error: action.error.message ?? 'Error fetching NeoWs offline', data: null };
            })

            // Guardar los datos
            .addCase(saveNeows.fulfilled, (_state, _action) => {
            })

            // Eliminar los datos
            .addCase(saveNeows.fulfilled, (state) => {
                state.fetchDataOffline = { loading: false, error: null, data: null };
            });
    },
});


export const { clearNeows } = neowsSlice.actions;
export default neowsSlice.reducer;