import axios from "axios";
import { Api_Configuration } from "@/core/api";
import { NearEarthObject, NeoWsNasaModel } from "../models/NeoWsNasa";


const { BASE_URL, API_KEY, TIMEOUT } = Api_Configuration;

export class NeoWsApi {
    async fetchDataNeoWs(page: number, size: number = 20): Promise<NeoWsNasaModel> {
        const res = await axios.get(
            `${BASE_URL}/neo/rest/v1/neo/browse?page=${page}&size=${size}&api_key=${API_KEY}`,
            {
                timeout: TIMEOUT
            }
        );

        return res.data;
    }

    async fetchDataForIdNeoWs(id: string): Promise<NearEarthObject> {
        const res = await axios.get(
            `${BASE_URL}/neo/rest/v1/neo/${id}?api_key=${API_KEY}`,
            {
                timeout: TIMEOUT
            }
        );

        return res.data;
    }
}