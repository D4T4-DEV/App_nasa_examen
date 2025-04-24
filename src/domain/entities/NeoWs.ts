export interface NeoWs {
    id: string;
    name: string;
    orbitingBody: string;
    absoluteMagnitude: number;
    estimatedDiameterKilometers: Diameter;
    estimatedDiameterMeters: Diameter;
    isPotentiallyHazardous: boolean;
    closeApproachData: CloseApproachData;
}

interface Diameter {
    min: number;
    max: number;
}

interface CloseApproachData {
    date: string;
    relativeVelocityKps: number;
    missDistanceKm: number;
}
