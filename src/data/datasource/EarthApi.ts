import axios from "axios";
import { Api_Configuration, Api_Endpoints } from "@/core/api";
import { EarthNasaModel } from "../models/EarthNasa";

const { BASE_URL, API_KEY, TIMEOUT } = Api_Configuration;
const { Earth } = Api_Endpoints;

export class EarthApi {

    /**
     * Funcion para hacer una peticion a la api de la nasa de Earth (imagenes de satelite)
     * @param latitude number
     * @param longitude number
     * @param formattedDate - Fecha en formato YYYY-MM-DD
     * @returns EarthNasaModel
     */
    async fetchDataEarth(latitude: number, longitude: number, formattedDate: string): Promise<EarthNasaModel> {
        const res = await axios.get(
            `${BASE_URL}${Earth}?lon=${longitude}&lat=${latitude}&date=${formattedDate}&api_key=${API_KEY}`,
            {
                timeout: TIMEOUT
            }
        );
        return res.data;
    }
}