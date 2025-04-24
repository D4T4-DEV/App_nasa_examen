import { Api_Configuration } from "@/core/api";
import { Earth } from "@/domain/entities/Earth";
import axios from "axios";
import { EarthNasaModel } from "../models/EarthNasa";

const { BASE_URL, API_KEY, TIMEOUT } = Api_Configuration;

export class EarthApi {
    async fechtDataEarth(latitude: number, longitude: number, formattedDate: string): Promise<EarthNasaModel> {
        const res = await axios.get(
            `${BASE_URL}/planetary/earth/assets?lon=${longitude}&lat=${latitude}&date=${formattedDate}&api_key=${API_KEY}`,
            {
                timeout: TIMEOUT
            }
        );
        return res.data;
    }
}