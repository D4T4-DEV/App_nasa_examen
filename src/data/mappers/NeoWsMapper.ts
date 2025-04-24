import { NeoWs } from "@/domain/entities/NeoWs";
import { NeoWsNasaModel } from "../models/NeoWsNasa";

export const neoWsMapper = (model: NeoWsNasaModel): NeoWs[] =>
    model.near_earth_objects.map(obj => {
        const approach = obj.close_approach_data[0];

        return {
            id: obj.id,
            name: obj.name,
            orbitingBody: approach?.orbiting_body ?? 'Unknown',
            absoluteMagnitude: obj.absolute_magnitude_h,
            estimatedDiameterKilometers: {
                max: obj.estimated_diameter.kilometers.estimated_diameter_max,
                min: obj.estimated_diameter.kilometers.estimated_diameter_min,
            },
            estimatedDiameterMeters: {
                max: obj.estimated_diameter.meters.estimated_diameter_max,
                min: obj.estimated_diameter.meters.estimated_diameter_min,
            },
            isPotentiallyHazardous: obj.is_potentially_hazardous_asteroid,
            closeApproachData: approach ? {
                date: approach.close_approach_date_full,
                relativeVelocityKps: approach.relative_velocity.kilometers_per_second,
                missDistanceKm: approach.miss_distance.kilometers,
            } : 
            {
                date: 'Unknown',
                relativeVelocityKps: 0,
                missDistanceKm: 0,
            },
        };
    });
