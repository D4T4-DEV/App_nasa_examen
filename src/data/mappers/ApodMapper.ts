import { Apod } from "@/domain/entities/Apod";
import { ApodNasaModel } from "../models/ApodNasa";

export const apodNasaToApodEntitie = (model: ApodNasaModel): Apod => ({
    title: model.title,
    explanation: model.explanation,
    urlImage: model.hdurl ?? '',
    date: model.date
});