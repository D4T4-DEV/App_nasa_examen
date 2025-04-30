import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import apodReducer from './slices/apodSlice';
import earthReducer from './slices/earthSlice';
import epicReducer from './slices/epicSlice';
import neowsReducer from './slices/neowsSlice';
import roverReducer from './slices/roverSlice';
import connectivityReducer from './slices/connectivitySlice';

export const store = configureStore({
    reducer: {
        connectivity: connectivityReducer,
        theme: themeReducer,
        apod: apodReducer,
        earth: earthReducer,
        epic: epicReducer,
        neows: neowsReducer,
        rover: roverReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;