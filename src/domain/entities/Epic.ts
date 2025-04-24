export interface Epic {
    id: string;
    date: string;
    caption: string;
    imageName: string;
    earthCoordinates: LatLon;
    lunarCoordinates: Coordinates;
    sunCoordinates: Coordinates
}

interface LatLon {
    latitude: number;
    longitude: number;
}

interface Coordinates {
    x: number;
    y: number;
    z: number;
}