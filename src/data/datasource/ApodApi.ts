import axios from "axios";
import { Api_Configuration, Api_Endpoints } from "@/core/api";
import { ApodNasaModel } from "../models/ApodNasa";

const { BASE_URL, API_KEY, TIMEOUT } = Api_Configuration;
const { Apod } = Api_Endpoints;

export class ApodApi {
    /**
     * Funcion para hacer una peticion a la api de la nasa de APOD
     * @returns ApodNasaModel
     */
    async fetchDataApod(): Promise<ApodNasaModel> {
        const res = await axios.get(
            `${BASE_URL}${Apod}?api_key=${API_KEY}`,
            {
                timeout: TIMEOUT
            }
        );

        return res.data;
    }

    /**
     * Funcion para hacer una peticion a la api de la nasa de APOD en base a una fecha
     * @param formattedDate - Fecha en formato YYYY-MM-DD
     * @returns ApodNasaModel
     */
    async fetchDataOtherDateApod(formattedDate: string): Promise<ApodNasaModel> {
        const res = await axios.get(
            `${BASE_URL}${Apod}?date=${formattedDate}&api_key=${API_KEY}`,
            {
                timeout: TIMEOUT
            }
        );

        return res.data;
    }
}