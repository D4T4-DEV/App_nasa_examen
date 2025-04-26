import { apodUseCases } from "@/di/container";
import { Apod } from "@/domain/entities/Apod";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk para obtener la imagen del dia
export const fetchApod = createAsyncThunk('apod/fetchApod', async () => {
    const response = await apodUseCases.fetchApod.execute();
    return response;
});

// Async thunk para obtener la imagen de otros dias
export const fetchApodByDate = createAsyncThunk('apod/fetchOtherDate', async (date: Date) => {
    return await apodUseCases.fetchApodByDate.execute(date);
});

// Async thunk para traer datos offline
export const fetchApodOffline = createAsyncThunk(
    'apod/fetchOffline',
    async () => {
        return await apodUseCases.fetchApodOffline.execute();
    }
);

// Async thunk para guardar datos
export const saveApod = createAsyncThunk(
    'apod/saveApod',
    async (data: Apod) => {
        await apodUseCases.saveApod.execute(data);
        return;
    }
);

// Async thunk para eliminar datos
export const deleteApod = createAsyncThunk(
    'apod/deleteApod',
    async () => {
        await apodUseCases.deleteApod.execute();
        return;
    }
);