import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import apodReducer from './slices/apodSlice';
import earthReducer from './slices/earthSlice';
import connectivityReducer from './slices/connectivitySlice';

export const store = configureStore({
    reducer: {
        connectivity: connectivityReducer,
        theme: themeReducer,
        apod: apodReducer,
        earth: earthReducer,
        // epic: epicReducer,
        // neows: neowsReducer,
        // rover: roverReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;