import { createReducer, createSlice } from '@reduxjs/toolkit';
import { Apod } from "@/domain/entities/Apod";
import { deleteApod, fetchApod, fetchApodByDate, fetchApodOffline, saveApod } from '../thunks/apodThunks';
import { RequestState } from '@/core/interfaces/request/RequestState';
import { createRequestState } from '@/core/utils/createRequestState';

// Interfaz del estado
interface ApodState {
    today: RequestState<Apod>;
    otherDate: RequestState<Apod>;
    offlineMode: RequestState<Apod>;
}

// Estado inicial
const initialState: ApodState = {
    today: createRequestState<Apod>(),
    otherDate: createRequestState<Apod>(),
    offlineMode: createRequestState<Apod>(),
};

// Slice
export const apodSlice = createSlice({
    name: 'apod',
    initialState,
    reducers: {
        // Borrar los estados del slice
        clearApod(state) {
            state.today = { ...initialState.today };
            state.otherDate = { ...initialState.otherDate };
            state.offlineMode = { ...initialState.offlineMode };
        },
    },
    extraReducers: (builder) => {
        builder

            // Obtener la imagen del dia
            .addCase(fetchApod.pending, (state) => {
                state.today = { loading: true, error: null, data: null };
            })
            .addCase(fetchApod.fulfilled, (state, action) => {
                state.today = { loading: false, error: null, data: action.payload };
            })
            .addCase(fetchApod.rejected, (state, action) => {
                state.today = { loading: false, error: action.error.message ?? 'Error fetching today\'s APOD', data: null };
            })

            // Obtener la imagen en base a una fecha
            .addCase(fetchApodByDate.pending, (state) => {
                state.otherDate = { loading: true, error: null, data: null };
            })
            .addCase(fetchApodByDate.fulfilled, (state, action) => {
                state.otherDate = { loading: false, error: null, data: action.payload };
            })
            .addCase(fetchApodByDate.rejected, (state, action) => {
                state.otherDate = { loading: false, error: action.error.message ?? 'Error fetching APOD by date', data: null };
            })

            // Obtener los datos guardados
            .addCase(fetchApodOffline.pending, (state) => {
                state.offlineMode = { loading: true, error: null, data: null };
            })
            .addCase(fetchApodOffline.fulfilled, (state, action) => {
                state.offlineMode = { loading: false, error: null, data: action.payload };
            })
            .addCase(fetchApodOffline.rejected, (state, action) => {
                state.offlineMode = { loading: false, error: action.error.message ?? 'Error fetching APOD offline', data: null };
            })

            // Guardar los datos
            .addCase(saveApod.fulfilled, (_state, _action) => {
            })

            // Eliminar los datos
            .addCase(deleteApod.fulfilled, (state) => {
                state.offlineMode = { loading: false, error: null, data: null };
            });
    },
});

// Exporta acciones y reducer
export const { clearApod } = apodSlice.actions;
export default apodSlice.reducer;
