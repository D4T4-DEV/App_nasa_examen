import { Earth } from "../entities/Eath";

export interface EarthRepository {
    fechtDataEarth(latitude: number, longitude: number, date: Date): Promise<Earth>
    fechtDataEarthOffLine(): Promise<Earth>
}