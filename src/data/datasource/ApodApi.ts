import { Api_Configuration } from "@/core/api";
import axios from "axios";
import { ApodNasaModel } from "../models/ApodNasa";

const { BASE_URL, API_KEY, TIMEOUT } = Api_Configuration;

export class ApodApi {
    async fechtDataApod(): Promise<ApodNasaModel> {
        const res = await axios.get(
            `${BASE_URL}/planetary/apod?api_key=${API_KEY}`,
            {
                timeout: TIMEOUT
            }
        );

        return res.data;
    }

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