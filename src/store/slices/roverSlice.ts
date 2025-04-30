import { RequestState } from "@/core/interfaces/request/RequestState";
import { createRequestState } from "@/core/utils/createRequestState";
import { Rover } from "@/domain/entities/Rover";
import { createSlice } from "@reduxjs/toolkit";
import { deleteRover, fetchRover, fetchRoverOffline, saveRover } from "../thunks/roverThunk";

interface RoverState {
    fetchData: RequestState<Rover[]>;
    fetchDataOffline: RequestState<Rover[]>;
}

// Estado incial
const initialState: RoverState = {
    fetchData: createRequestState<Rover[]>(),
    fetchDataOffline: createRequestState<Rover[]>(),
}

// Slice
export const roverSlice = createSlice({
    name: 'rover',
    initialState,
    reducers: {
        // Borrar los estados del slice
        clearRover(state) {
            state.fetchData = { ...initialState.fetchData };
            state.fetchDataOffline = { ...initialState.fetchDataOffline };
        },
    },
    extraReducers: (builder) => {

        builder
            // Obtener los datos en base a los datos de la paginacion prederterminada de rover
            .addCase(fetchRover.pending, (state) => {
                state.fetchData = { loading: true, error: null, data: null };
            })
            .addCase(fetchRover.fulfilled, (state, action) => {
                state.fetchData = { loading: false, error: null, data: action.payload };
            })
            .addCase(fetchRover.rejected, (state, action) => {
                state.fetchData = { loading: false, error: action.error.message ?? 'Error fetching info Rover', data: null };
            })

            // Obtener los datos guardados
            .addCase(fetchRoverOffline.pending, (state) => {
                state.fetchDataOffline = { loading: true, error: null, data: null };
            })
            .addCase(fetchRoverOffline.fulfilled, (state, action) => {
                state.fetchDataOffline = { loading: false, error: null, data: action.payload };
            })
            .addCase(fetchRoverOffline.rejected, (state, action) => {
                state.fetchDataOffline = { loading: false, error: action.error.message ?? 'Error fetching Rover offline', data: null };
            })

            // Guardar los datos
            .addCase(saveRover.fulfilled, (_state, _action) => {
            })

            // Eliminar los datos
            .addCase(deleteRover.fulfilled, (state) => {
                state.fetchDataOffline = { loading: false, error: null, data: null };
            });
    },
});

export const { clearRover } = roverSlice.actions;
export default roverSlice.reducer;