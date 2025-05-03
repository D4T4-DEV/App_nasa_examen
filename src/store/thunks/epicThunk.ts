import { epicUseCases } from "@/di/container";
import { Epic } from "@/domain/entities/Epic";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk para traer datos de la api de la nasa
export const fetchEpic = createAsyncThunk(
    'epic/fetchEpicData',
    async () => {
        const response = await epicUseCases.fetchEpic.execute();
        return response;
    }
);

// Async thunk para obtener datos en base a una fecha proporcionada por el usuario
export const fetchEpicForDate = createAsyncThunk(
    'epic/fetchEpicOtherDay',
    async (date: Date) => {
        const response = await epicUseCases.fetchEpicByDate.execute(date);
        return response;
    }
);

// Async thunk para traer los datos guardados
export const fetchEpicOffline = createAsyncThunk(
    'epic/fetchOffline',
    async () => {
        return await epicUseCases.fetchEpicOffile.execute();
    }
);

// Async thunk para guardar datos
export const saveEpic = createAsyncThunk(
    'epic/saveEpic',
    async (data: Epic) => {
        await epicUseCases.saveEpic.execute(data);
        return;
    }
);

// Async thunk para borrar los datos guardados 
export const deleteEpic = createAsyncThunk(
    'epic/deleteEpic',
    async () => {
        await epicUseCases.deleteEpic.execute();
        return;
    }
);