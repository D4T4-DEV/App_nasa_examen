import { Api_Configuration } from "@/core/api";
import { dateUtil } from "@/di/container";
import { Apod } from "@/domain/entities/Apod";
import axios from "axios";

const { BASE_URL, API_KEY, TIMEOUT } = Api_Configuration;

export class ApodApi {
    async fechtDataApod(): Promise<Apod> {
        const res = await axios.get(
            `${BASE_URL}/planetary/apod?api_key=${API_KEY}`,
            {
                timeout: TIMEOUT
            }
        );

        // const rawData = res.data;

        return res.data;
    }

    async fechtDataOtherDateApod(date: Date): Promise<Apod> {
        const dateFormat = dateUtil.formatteDateToUSA(date);
        const res = await axios.get(
            `${BASE_URL}/planetary/apod?date=${dateFormat}&api_key=${API_KEY}`,
            {
                timeout: TIMEOUT
            }
        );

        return res.data;
    }
}