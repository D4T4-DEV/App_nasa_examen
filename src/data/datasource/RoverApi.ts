import axios from "axios";
import { Api_Configuration } from "@/core/api";
import { RoverNasaModel } from "../models/RoverNasa";

const { BASE_URL, API_KEY, TIMEOUT } = Api_Configuration;

export class RoverApi {

    async fetchDataRover(sunValue: number = 1000, page: number = 0): Promise<RoverNasaModel> {
        const res = await axios.get(
            `${BASE_URL}/mars-photos/api/v1/rovers/curiosity/photos?sol=${sunValue}&page=${page}&api_key=${API_KEY}`,
            { timeout: TIMEOUT }
        );

        return res.data;
    }

}