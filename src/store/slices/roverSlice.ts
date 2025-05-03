import { RequestState } from "@/core/interfaces/request/RequestState";
import { createRequestState } from "@/core/utils/createRequestState";
import { Rover } from "@/domain/entities/Rover";
import { createSlice } from "@reduxjs/toolkit";
import { deleteRover, fetchRover, fetchRoverOffline, saveRover } from "../thunks/roverThunk";

interface RoverState {
    fetchData: RequestState<Rover[]>;
    fetchDataOffline: RequestState<Rover[]>;
    page: number; // Pagina
    noMorePages: boolean; //estado para saber si hay mas paginas o debe parar
}

// Estado incial
const initialState: RoverState = {
    fetchData: createRequestState<Rover[]>(),
    fetchDataOffline: createRequestState<Rover[]>(),
    page: 0,
    noMorePages: false,
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
            state.page = 0;
            state.noMorePages = false;
        },
        // Establecer si ya no hay mas paginas
        setNoMorePages(state, action) {
            state.noMorePages = action.payload;
        },
        // Establecer la pagina actual
        setPage(state, action) {
            state.page = action.payload;
        }
    },
    extraReducers: (builder) => {

        builder
            // Obtener los datos en base a los datos de la paginacion prederterminada de rover
            .addCase(fetchRover.pending, (state) => {
                state.fetchData = { loading: true, error: null, data: state.fetchData.data ?? [] };
            })
            .addCase(fetchRover.fulfilled, (state, action) => {

                const newData = action.payload ?? [];
                const existingData = state.fetchData.data ?? [];

                // Filtrar los duplicados, manteniendo solo elementos que no existan en el estado
                const mergedData = [...existingData, ...newData].filter((value, index, self) =>
                    index === self.findIndex((t) => (
                        t.id === value.id
                    ))
                );

                state.fetchData = { loading: false, error: null, data: mergedData };

                // Si no hay mas datos, marcar que no hay mas paginas
                if (newData.length === 0) {
                    state.noMorePages = true;
                } else {
                    // Incrementamos la pagina si hay mas datos
                    state.page += 1;
                }
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

export const { clearRover, setNoMorePages, setPage } = roverSlice.actions;
export default roverSlice.reducer;