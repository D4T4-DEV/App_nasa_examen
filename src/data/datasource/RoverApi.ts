import axios from "axios";
import { Api_Configuration, Api_Endpoints } from "@/core/api";
import { RoverNasaModel } from "../models/RoverNasa";

const { BASE_URL, API_KEY, TIMEOUT } = Api_Configuration;
const { Rover } = Api_Endpoints;

export class RoverApi {

    async fetchDataRover(sunValue: number = 1000, page: number = 0): Promise<RoverNasaModel> {
        const res = await axios.get(
            `${BASE_URL}${Rover}?sol=${sunValue}&page=${page}&api_key=${API_KEY}`,
            { timeout: TIMEOUT }
        );

        return res.data;
    }

}