import { earthUseCases } from "@/di/container";
import { Earth } from "@/domain/entities/Earth";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk para traer datos de la api de la nasa
export const fetchEarth = createAsyncThunk(
    'earth/fetchEarth',
    async ({ latitude, longitude, date }: { latitude: number; longitude: number; date: Date }) => {
        const response = await earthUseCases.fetchEarth.execute(latitude, longitude, date);
        return response;
    }
);

// Async thunk para traer datos offline
export const fetchEarthOffline = createAsyncThunk(
    'earth/fetchOffline',
    async () => {
        return await earthUseCases.fetchEarthOffile.execute();
    }
);

// Async thunk para guardar datos
export const saveEarth = createAsyncThunk(
    'earth/saveEarth',
    async (data: Earth) => {
        await earthUseCases.saveEarth.execute(data);
        return;
    }
);

// Async thunk para eliminar datos
export const deleteEarth = createAsyncThunk(
    'earth/deleteEarth',
    async () => {
        await earthUseCases.deleteEarth.execute();
        return;
    }
);