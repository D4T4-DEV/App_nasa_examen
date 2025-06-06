import { Earth } from "../entities/Earth";

export interface EarthRepository {
    fetchDataEarth(latitude: number, longitude: number, date: Date): Promise<Earth | null>
    fetchDataEarthOffLine(): Promise<Earth | null>
}