import axios from "axios";
import { Api_Configuration } from "@/core/api";
import { ApodNasaModel } from "../models/ApodNasa";

const { BASE_URL, API_KEY, TIMEOUT } = Api_Configuration;

export class ApodApi {
    /**
     * Funcion para hacer una peticion a la api de la nasa de APOD
     * @returns ApodNasaModel
     */
    async fechtDataApod(): Promise<ApodNasaModel> {
        const res = await axios.get(
            `${BASE_URL}/planetary/apod?api_key=${API_KEY}`,
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
    async fechtDataOtherDateApod(formattedDate: string): Promise<ApodNasaModel> {
        const res = await axios.get(
            `${BASE_URL}/planetary/apod?date=${formattedDate}&api_key=${API_KEY}`,
            {
                timeout: TIMEOUT
            }
        );

        return res.data;
    }
}