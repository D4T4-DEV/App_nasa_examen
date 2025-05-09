// Bibloteca para importar constantes 
// puesta en el archivo app.config.ts
import Constants from "expo-constants";

// Sustraccion de los valores de la configuracion en el archivo app.config.ts -> EXPO
const {
    NAVIGATION_PERSISTENCE_KEY,
    THEME_PERSISTENCE_KEY,
    APOD_STORAGE_KEY,
    EARTH_STORAGE_KEY,
    EPIC_STORAGE_KEY,
    NEOWS_STORAGE_KEY,
    ROVER_STORAGE_KEY
} = Constants.expoConfig?.extra?.keyStorages;

// Archivo de importancion de configuracion de los parametros 
// para usar en el storage de AsyncStorage

if (!NAVIGATION_PERSISTENCE_KEY || !THEME_PERSISTENCE_KEY || !APOD_STORAGE_KEY || !EARTH_STORAGE_KEY || !EPIC_STORAGE_KEY || !NEOWS_STORAGE_KEY || !ROVER_STORAGE_KEY) {
    throw new Error(
        `No se ha configurado los parametros de las keys de almacenamiento, 
        confirma su implementacion en las variables de entorno`
    );
}

export const KeysStorage_Configuration = {
    NAVIGATION_PERSISTENCE_KEY: NAVIGATION_PERSISTENCE_KEY,
    THEME_PERSISTENCE_KEY: THEME_PERSISTENCE_KEY,
    APOD_STORAGE_KEY: APOD_STORAGE_KEY,
    EARTH_STORAGE_KEY: EARTH_STORAGE_KEY,
    EPIC_STORAGE_KEY: EPIC_STORAGE_KEY,
    NEOWS_STORAGE_KEY: NEOWS_STORAGE_KEY,
    ROVER_STORAGE_KEY: ROVER_STORAGE_KEY
}