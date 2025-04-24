// Esto viene de la API de APOD de la nasa, consultado el 23-04-2025
// de https://api.nasa.gov/
export interface ApodNasaModel {
    copyright?: string;
    date: string;
    explanation: string;
    hdurl?: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
}