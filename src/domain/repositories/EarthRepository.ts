import { Earth } from "../entities/Earth";

export interface EarthRepository {
    fechtDataEarth(latitude: number, longitude: number, date: Date): Promise<Earth>
    fechtDataEarthOffLine(): Promise<Earth>
}