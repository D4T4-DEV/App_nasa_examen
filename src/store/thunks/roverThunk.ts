import { Rover } from '@/domain/entities/Rover';
import { roverUseCases } from "@/di/container";
import { createAsyncThunk } from "@reduxjs/toolkit";


// Async thunk para obtener los datos de la api de la nasa 
export const fetchRover = createAsyncThunk(
    'rover/fetchRoverData',
    async ({ sunValue = 1000, page }: { sunValue: number, page: number }) => {
        const response = await roverUseCases.fetchRover.execute(sunValue, page);
        return response;
    }
);

// Async thunk para obtener los datos guardados
export const fetchRoverOffline = createAsyncThunk(
    'rover/fetchOffline',
    async () => {
        return await roverUseCases.fetchRoverOffile.execute();
    }
);


// Async thunk para guardar datos
export const saveRover = createAsyncThunk(
    'rover/saveRover',
    async (data: Rover[]) => {
        await roverUseCases.saveRover.execute(data);
        return;
    }
);

// Async thunk para borrar los datos guardados 
export const deleteRover = createAsyncThunk(
    'rover/deleteRover',
    async () => {
        await roverUseCases.deleteRover.execute();
        return;
    }
);