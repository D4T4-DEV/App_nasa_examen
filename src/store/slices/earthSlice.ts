import { RequestState } from "@/core/interfaces/request/RequestState";
import { createRequestState } from "@/core/utils/createRequestState";
import { Earth } from "@/domain/entities/Earth";
import { createSlice } from "@reduxjs/toolkit";
import { deleteEarth, fetchEarth, fetchEarthOffline, saveEarth } from "../thunks/earthThunk";


interface EarthState {
    fetchData: RequestState<Earth>;
    offlineMode: RequestState<Earth>;
}

// Estado inicial
const initialState: EarthState = {
    fetchData: createRequestState<Earth>(),
    offlineMode: createRequestState<Earth>(),
}

// Slice
export const earthSlice = createSlice({
    name: 'earth',
    initialState,
    reducers: {
        // Borrar los estados del slice
        clearEarth(state) {
            state.fetchData = { ...initialState.fetchData };
            state.offlineMode = { ...initialState.offlineMode };
        },
    },
    extraReducers: (builder) => {
        builder
            // Obtener los datos en base a latitud, longitud y dia
            .addCase(fetchEarth.pending, (state) => {
                state.fetchData = { loading: true, error: null, data: null };
            })
            .addCase(fetchEarth.fulfilled, (state, action) => {
                state.fetchData = { loading: false, error: null, data: action.payload };
            })
            .addCase(fetchEarth.rejected, (state, action) => {
                state.fetchData = { loading: false, error: action.error.message ?? 'Error getting Earth\'s latitude, longitude and day', data: null };
            })

            // Obtener los datos guardados
            .addCase(fetchEarthOffline.pending, (state) => {
                state.offlineMode = { loading: true, error: null, data: null };
            })
            .addCase(fetchEarthOffline.fulfilled, (state, action) => {
                state.offlineMode = { loading: false, error: null, data: action.payload };
            })
            .addCase(fetchEarthOffline.rejected, (state, action) => {
                state.offlineMode = { loading: false, error: action.error.message ?? 'Error fetching Earth offline', data: null };
            })

            // Guardar los datos
            .addCase(saveEarth.fulfilled, (_state, _action) => {
            })

            // Eliminar los datos
            .addCase(deleteEarth.fulfilled, (state) => {
                state.offlineMode = { loading: false, error: null, data: null };
            });
    },
});

export const { clearEarth } = earthSlice.actions;
export default earthSlice.reducer;