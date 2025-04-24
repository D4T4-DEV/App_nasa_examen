import axios from "axios";
import { Api_Configuration } from "@/core/api";
import { EpicNasaModel } from "../models/EpicNasa";

const { BASE_URL, API_KEY, TIMEOUT } = Api_Configuration;

export class EarthApi {

    /**
     * Funcion para hacer una peticion a la api EPIC
     * @returns EpicNasaModel[]
     */
    async fechtDataEpic(): Promise<EpicNasaModel[]> {
        const res = await axios.get(
            `${BASE_URL}/EPIC/api/natural?api_key=${API_KEY}`,
            {
                timeout: TIMEOUT
            }
        );
        return res.data;
    }

    /**
     * Funcion para hacer una peticion a la api EPIC en base a una fecha
     * @param formattedDate - Fecha en formato YYYY-MM-DD
     * @returns EpicNasaModel[]
     */
    async fechtDataOtherDateEpic(formattedDate: string): Promise<EpicNasaModel[]> {
        const res = await axios.get(
            `${BASE_URL}/EPIC/api/natural/date/${formattedDate}?api_key=${API_KEY}`,
            {
                timeout: TIMEOUT
            }
        );
        return res.data;
    }
}