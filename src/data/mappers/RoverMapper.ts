import { Rover } from "@/domain/entities/Rover";
import { RoverNasaModel } from "../models/RoverNasa";

export const roverMapper = (model: RoverNasaModel): Rover[] =>
    model.photos.map(photo => ({
        id: photo.id.toString(),
        sol: photo.sol,
        cameraName: photo.camera.full_name,
        nameRover: photo.rover.name,
        photoDateEarth: photo.earth_date,
        imageUrl: photo.img_src
    })
);