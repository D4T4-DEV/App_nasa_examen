import { NeoWs } from "@/domain/entities/NeoWs";
import { NearEarthObject, NeoWsNasaModel } from "../models/NeoWsNasa";

export const neoWsMapper = (model: NearEarthObject): NeoWs => ({
    id: model.id,
    name: model.name,
    orbitingBody: model.close_approach_data[0].orbiting_body ?? 'Unkonw',
    absoluteMagnitude: model.absolute_magnitude_h,
    estimatedDiameterKilometers: {
        max: model.estimated_diameter.kilometers.estimated_diameter_max,
        min: model.estimated_diameter.kilometers.estimated_diameter_min,
    },
    estimatedDiameterMeters: {
        max: model.estimated_diameter.meters.estimated_diameter_max,
        min: model.estimated_diameter.meters.estimated_diameter_min,
    },
    isPotentiallyHazardous: model.is_potentially_hazardous_asteroid,
    closeApproachData: {
        date: model.close_approach_data[0].close_approach_date_full,
        relativeVelocityKps: model.close_approach_data[0].relative_velocity.kilometers_per_second,
        missDistanceKm: model.close_approach_data[0].miss_distance.kilometers
    }
});