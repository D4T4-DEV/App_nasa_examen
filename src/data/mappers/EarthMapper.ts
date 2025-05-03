import { Earth } from "@/domain/entities/Earth";
import { EarthNasaModel } from "../models/EarthNasa";

export const earthMapper = (model: EarthNasaModel): Earth => ({
    imageUrl: model.url ?? '',
    date: model.date ?? ''
});