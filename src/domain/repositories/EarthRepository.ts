import { Earth } from "../entities/Earth";

export interface EarthRepository {
    fetchDataEarth(latitude: number, longitude: number, date: Date): Promise<Earth>
    fetchDataEarthOffLine(): Promise<Earth>
    saveData(earth: Earth): Promise<void>;
    deleteData(): Promise<void>;
}