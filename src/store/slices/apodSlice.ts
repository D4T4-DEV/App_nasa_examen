import { createReducer, createSlice } from '@reduxjs/toolkit';
import { Apod } from "@/domain/entities/Apod";
import { deleteApod, fetchApod, fetchApodByDate, fetchApodOffline, saveApod } from '../thunks/apodThunks';
import { RequestState } from '@/core/interfaces/request/RequestState';
import { createRequestState } from '@/core/utils/createRequestState';

// Interfaz del estado
interface ApodState {
    today: RequestState<Apod>;
    otherDate: RequestState<Apod>;
}

// Estado inicial
const initialState: ApodState = {
    today: createRequestState<Apod>(),
    otherDate: createRequestState<Apod>(),
};

// Slice
export const apodSlice = createSlice({
    name: 'apod',
    initialState,
    reducers: {
        // Borrar los estados del slice
        clearApod(state) {
            state.today.data = null;
            state.today.error = null;
            state.otherDate.error = null;
            state.otherDate.data = null;
        },
    },
    extraReducers: (builder) => {
        builder

            // Obtener la imagen del dia 
            .addCase(fetchApod.pending, (state) => {
                state.today.loading = true;
                state.today.error = null;
            })
            .addCase(fetchApod.fulfilled, (state, action) => {
                state.today.loading = false;
                state.today.data = action.payload;
            })
            .addCase(fetchApod.rejected, (state, action) => {
                state.today.loading = false;
                state.today.error = action.error.message ?? 'Error fetching today\'s APOD';
            })

            // Obtener la imagen en base a una fecha
            .addCase(fetchApodByDate.pending, (state) => {
                state.otherDate.loading = true;
                state.otherDate.error = null;
            })
            .addCase(fetchApodByDate.fulfilled, (state, action) => {
                state.otherDate.loading = false;
                state.otherDate.data = action.payload;
            })
            .addCase(fetchApodByDate.rejected, (state, action) => {
                state.otherDate.loading = false;
                state.otherDate.error = action.error.message ?? 'Error fetching APOD by date';
            })

            // Obtener los datos guardados
            .addCase(fetchApodOffline.pending, (state) => {
                state.today.loading = true;
                state.today.error = null;
            })
            .addCase(fetchApodOffline.fulfilled, (state, action) => {
                state.today.loading = false;
                state.today.data = action.payload;
            })
            .addCase(fetchApodOffline.rejected, (state, action) => {
                state.today.loading = false;
                state.today.error = action.error.message ?? 'Error fetching APOD offline';
            })

            // Guardar los datos
            .addCase(saveApod.fulfilled, (_state, _action) => {
            })

            // Eliminar los datos
            .addCase(deleteApod.fulfilled, (state) => {
                state.today.data = null;
            });
    },
});

// Exporta acciones y reducer
export const { clearApod } = apodSlice.actions;
export default apodSlice.reducer;
