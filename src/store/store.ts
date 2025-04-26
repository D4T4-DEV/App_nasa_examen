import { configureStore } from '@reduxjs/toolkit';
import apodReducer from './slices/apodSlice';

export const store = configureStore({
    reducer: {
        // theme: themeReducer,
        apod: apodReducer,
        // earth: earthReducer,
        // epic: epicReducer,
        // neows: neowsReducer,
        // rover: roverReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;