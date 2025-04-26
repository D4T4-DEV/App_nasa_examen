import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
    isDarkMode: boolean
}

const initialState: ThemeState = {
    isDarkMode: false
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        // Cambiar el tema mediante un booleano
        setDarkMode(state, action: PayloadAction<boolean>) {
            // Tema claro → false
            // Tema obscuro → true
            state.isDarkMode = action.payload;
        },

        setThemeBasedTime(state, action: PayloadAction<number>) {
            const hourIn24Hrs = action.payload;
            // hourIn24Hrs >= 6 && hourIn24Hrs < 18 -> Devuelve true si se cumple que es horario de dia
            // Si es asi, lo negamos con !(...) -> si es true sera falso, lo que dictamina que el tema debera ser claro
            // ahora si hourIn24Hrs >= 6 && hourIn24Hrs < 18 -> Devuelve false se cumple que esta en un horario de noche
            // Si es asi, lo negamos con !(...) y devolvera true, lo que dictamina que el tema debera ser obscuro

            // ej.
            // Si hourIn24Hrs = 10 → !(10 >= 6 && 10 < 18) → !(true) → false (es de día).
            // Si hourIn24Hrs = 3 → !(3 >= 6 && 3 < 18) → !(false) → true (es de noche).

            const isAM = !(hourIn24Hrs >= 6 && hourIn24Hrs < 18);
            state.isDarkMode = isAM;
        }
    },
    extraReducers: (_builder) => { },
});

export const { setDarkMode, setThemeBasedTime } = themeSlice.actions;
export default themeSlice.reducer;