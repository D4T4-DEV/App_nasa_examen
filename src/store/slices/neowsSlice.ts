import { RequestState } from "@/core/interfaces/request/RequestState";
import { createRequestState } from "@/core/utils/createRequestState";
import { NeoWs } from "@/domain/entities/NeoWs";
import { createSlice } from "@reduxjs/toolkit";
import { deleteNeows, fetchNeows, fetchNeowsForId, fetchNeowsOffline, saveNeows } from "../thunks/neowsThunk";

interface NeowsState {
    fetchData: RequestState<NeoWs[]>;  // Datos de NeoWs
    fetchDataForId: RequestState<NeoWs>;
    fetchDataOffline: RequestState<NeoWs[]>;
    page: number;  // Página actual
    noMorePages: boolean;  // Indica si no hay más páginas
}

// Estado inicial
const initialState: NeowsState = {
    fetchData: createRequestState<NeoWs[]>(),
    fetchDataForId: createRequestState<NeoWs>(),
    fetchDataOffline: createRequestState<NeoWs[]>(),
    page: 0,
    noMorePages: false,
}

// Slice
export const neowsSlice = createSlice({
    name: 'neows',
    initialState,
    reducers: {
        // Limpiar los estados del slice
        clearNeows(state) {
            state.fetchData = { ...initialState.fetchData };
            state.fetchDataForId = { ...initialState.fetchDataForId };
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
            // Obtener los datos con paginacion
            .addCase(fetchNeows.pending, (state) => {
                state.fetchData = { loading: true, error: null, data: state.fetchData.data ?? [] };
            })
            .addCase(fetchNeows.fulfilled, (state, action) => {
                const newData = action.payload ?? [];
                const existingData = state.fetchData.data ?? [];


                // Filtrar los duplicados, manteniendo solo elementos que no existan en el estado
                const mergedData = [...existingData, ...newData].filter((value, index, self) =>
                    index === self.findIndex((t) => (
                        t.id === value.id
                    ))
                );

                // Agregar los nuevos datos al final de los existentes
                state.fetchData = {
                    loading: false,
                    error: null,
                    data: mergedData,
                };

                // Si no hay mas datos, marcar que no hay mas paginas
                if (newData.length === 0 || newData.length < 20) {
                    state.noMorePages = true;
                } else {
                    // Incrementamos la pagina si hay mas datos
                    state.page += 1;
                }
            })
            .addCase(fetchNeows.rejected, (state, action) => {
                state.fetchData = { loading: false, error: action.error.message ?? 'Error fetching info NeoWs', data: [] };
            })

            // Obtener datos de un unico NeoWs
            .addCase(fetchNeowsForId.pending, (state) => {
                state.fetchDataForId = { loading: true, error: null, data: null };
            })
            .addCase(fetchNeowsForId.fulfilled, (state, action) => {
                state.fetchDataForId = { loading: false, error: null, data: action.payload };
            })
            .addCase(fetchNeowsForId.rejected, (state, action) => {
                state.fetchDataForId = { loading: false, error: action.error.message ?? 'Error fetching id selected info NeoWs', data: null };
            })

            // Obtener datos offline
            .addCase(fetchNeowsOffline.pending, (state) => {
                state.fetchDataOffline = { loading: true, error: null, data: null };
            })
            .addCase(fetchNeowsOffline.fulfilled, (state, action) => {
                state.fetchDataOffline = { loading: false, error: null, data: action.payload };
            })
            .addCase(fetchNeowsOffline.rejected, (state, action) => {
                state.fetchDataOffline = { loading: false, error: action.error.message ?? 'Error fetching NeoWs offline', data: null };
            })

            // Guardar datos
            .addCase(saveNeows.fulfilled, (_state, _action) => {
            })

            // Eliminar datos
            .addCase(deleteNeows.fulfilled, (state) => {
                state.fetchDataOffline = { loading: false, error: null, data: null };
            });
    },
});

export const { clearNeows, setNoMorePages, setPage } = neowsSlice.actions;
export default neowsSlice.reducer;
