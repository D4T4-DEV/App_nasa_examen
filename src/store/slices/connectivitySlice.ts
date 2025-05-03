import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ConnectivityState {
    isConnected: boolean;
    connectionType: string;
}

const initialState: ConnectivityState = {
    isConnected: false,
    connectionType: '',
};

const connectivitySlice = createSlice({
    name: 'connectivity',
    initialState,
    reducers: {
        setConnectivityState(state, action: PayloadAction<ConnectivityState>) {
            state.isConnected = action.payload.isConnected;
            state.connectionType = action.payload.connectionType;
        },
    },
});

export const { setConnectivityState } = connectivitySlice.actions;
export default connectivitySlice.reducer;
