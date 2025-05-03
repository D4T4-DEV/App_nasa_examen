import { Epic } from "@/domain/entities/Epic";
import { EpicNasaModel } from "../models/EpicNasa";

export const epicMapper = (model: EpicNasaModel): Epic => ({
    id: model.identifier,
    date: model.date,
    caption: model.caption,
    imageName: model.image,
    earthCoordinates: {
        latitude: model.centroid_coordinates.lat,
        longitude: model.centroid_coordinates.lon
    },
    lunarCoordinates: {
        x: model.lunar_j2000_position.x,
        y: model.lunar_j2000_position.y,
        z: model.lunar_j2000_position.z
    },
    sunCoordinates: {
        x: model.sun_j2000_position.x,
        y: model.sun_j2000_position.y,
        z: model.sun_j2000_position.z
    }
});