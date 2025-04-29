import { RequestState } from "@/core/interfaces/request/RequestState";
import { createRequestState } from "@/core/utils/createRequestState";
import { Epic } from "@/domain/entities/Epic";
import { createSlice } from "@reduxjs/toolkit";

interface EpicState {
    fetchData: RequestState<Epic>;
    fetchDataOtherDay: RequestState<Epic>;
    fetchDataOffline: RequestState<Epic>;
}

// Estado inicial
const initialState: EpicState = {
    fetchData: createRequestState<Epic>(),
    fetchDataOtherDay: createRequestState<Epic>(),
    fetchDataOffline: createRequestState<Epic>()
}

// Slice
export const epicSlice = createSlice({
    name: 'epic',
    initialState,
    reducers: {
        // Borrar los estados del slice
        clearEpic(state) {
            state.fetchData = { ...initialState.fetchData };
            state.fetchDataOtherDay = { ...initialState.fetchDataOtherDay };
            state.fetchDataOffline = { ...initialState.fetchDataOffline };
        },
    },
    extraReducers: (builder) => {
        
    },
});

export const { clearEpic } = epicSlice.actions;
export default epicSlice.reducer;