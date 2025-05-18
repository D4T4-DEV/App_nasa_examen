// Bibloteca para importar constantes 
// puesta en el archivo app.config.ts
import Constants from "expo-constants";

// Sustraccion de los valores de la configuracion en el archivo app.config.js -> EXPO
const { BASE_API_URL_NASA, API_KEY_NASA, TIMEOUT_API } = Constants.expoConfig?.extra?.apiConfig;

// Archivo de importancion de configuracion de los parametros 
// para usar en la construccion y consumo de la API

if (!BASE_API_URL_NASA || !API_KEY_NASA || !TIMEOUT_API) {
    throw new Error(
        `No se ha configurado los parametros de la API, 
        confirma su implementacion en las variables de entorno`
    );
}

// Endpoints de la api
export const Api_Endpoints = {
    Apod: '/planetary/apod',
    Earth: '/planetary/earth/assets',
    Epic: '/EPIC/api/natural',
    Neows: '/neo/rest/v1/neo',
    Rover: '/mars-photos/api/v1/rovers/curiosity/photos',
}


export const Api_Configuration = {
    BASE_URL: BASE_API_URL_NASA,
    API_KEY: API_KEY_NASA,
    TIMEOUT: parseInt(TIMEOUT_API, 10),
}