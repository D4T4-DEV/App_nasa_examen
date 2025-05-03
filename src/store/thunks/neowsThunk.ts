import { neowsUseCases } from "@/di/container";
import { NeoWs } from "@/domain/entities/NeoWs";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk para traer datos de la api de la nasa 
export const fetchNeows = createAsyncThunk(
    'neows/fetchNeowsData',
    async (page: number) => {
        const response = await neowsUseCases.fetchNeows.execute(page);
        return response;
    }
);

// Async thunk para obtener los datos en base a un id de un neows
export const fetchNeowsForId = createAsyncThunk(
    'neows/fetchNeowsId',
    async (id: string) => {
        const response = await neowsUseCases.fetchNeowsById.execute(id);
        return response;
    }
);

// Async thunk para traer los datos guardados
export const fetchNeowsOffline = createAsyncThunk(
    'neows/fetchOffline',
    async () => {
        return await neowsUseCases.fetchNeowsOffile.execute();
    }
);

// Async thunk para guardar datos
export const saveNeows = createAsyncThunk(
    'neows/saveNeows',
    async (data: NeoWs) => {
        await neowsUseCases.saveNeows.execute(data);
        return;
    }
);

// Async thunk para borrar los datos guardados 
export const deleteNeows = createAsyncThunk(
    'neows/deleteNeows',
    async () => {
        await neowsUseCases.deleteNeows.execute();
        return;
    }
);