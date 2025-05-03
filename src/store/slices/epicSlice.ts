import { RequestState } from "@/core/interfaces/request/RequestState";
import { createRequestState } from "@/core/utils/createRequestState";
import { Epic } from "@/domain/entities/Epic";
import { createSlice } from "@reduxjs/toolkit";
import { deleteEpic, fetchEpic, fetchEpicForDate, fetchEpicOffline, saveEpic } from "../thunks/epicThunk";

interface EpicState {
    fetchData: RequestState<Epic>;
    fetchDataOtherDay: RequestState<Epic>;
    fetchDataOffline: RequestState<Epic>;
}

// Estado inicial
const initialState: EpicState = {
    fetchData: createRequestState<Epic>(),
    fetchDataOtherDay: createRequestState<Epic>(),
    fetchDataOffline: createRequestState<Epic>()
}

// Slice
export const epicSlice = createSlice({
    name: 'epic',
    initialState,
    reducers: {
        // Borrar los estados del slice
        clearEpic(state) {
            state.fetchData = { ...initialState.fetchData };
            state.fetchDataOtherDay = { ...initialState.fetchDataOtherDay };
            state.fetchDataOffline = { ...initialState.fetchDataOffline };
        },
    },
    extraReducers: (builder) => {
        builder
            // Obtener los datos en base a los datos mas recientes que tenga
            .addCase(fetchEpic.pending, (state) => {
                state.fetchData = { loading: true, error: null, data: null };
            })
            .addCase(fetchEpic.fulfilled, (state, action) => {
                state.fetchData = { loading: false, error: null, data: action.payload };
            })
            .addCase(fetchEpic.rejected, (state, action) => {
                state.fetchData = { loading: false, error: action.error.message ?? 'EError fetching today\'s info EPIC', data: null };
            })

            // Obtener datos en base a una fecha pasada
            .addCase(fetchEpicForDate.pending, (state) => {
                state.fetchDataOtherDay = { loading: true, error: null, data: null };
            })
            .addCase(fetchEpicForDate.fulfilled, (state, action) => {
                state.fetchDataOtherDay = { loading: false, error: null, data: action.payload };
            })
            .addCase(fetchEpicForDate.rejected, (state, action) => {
                state.fetchDataOtherDay = { loading: false, error: action.error.message ?? 'EError fetching date selected info EPIC', data: null };
            })

            // Obtener los datos guardados
            .addCase(fetchEpicOffline.pending, (state) => {
                state.fetchDataOffline = { loading: true, error: null, data: null };
            })
            .addCase(fetchEpicOffline.fulfilled, (state, action) => {
                state.fetchDataOffline = { loading: false, error: null, data: action.payload };
            })
            .addCase(fetchEpicOffline.rejected, (state, action) => {
                state.fetchDataOffline = { loading: false, error: action.error.message ?? 'Error fetching EPIC offline', data: null };
            })

            // Guardar los datos
            .addCase(saveEpic.fulfilled, (_state, _action) => {
            })

            // Eliminar los datos
            .addCase(deleteEpic.fulfilled, (state) => {
                state.fetchDataOffline = { loading: false, error: null, data: null };
            });
    },
});

export const { clearEpic } = epicSlice.actions;
export default epicSlice.reducer;