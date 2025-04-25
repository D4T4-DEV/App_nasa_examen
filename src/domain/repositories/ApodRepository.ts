import { Apod } from "../entities/Apod";

export interface ApodRepository {
    fetchDataApod(): Promise<Apod | null>;
    fetchDataOtherDateApod(date: Date): Promise<Apod | null>
    fetchDataApodOffLine(): Promise<Apod | null>;
    saveData(apod: Apod): Promise<void>;
    deleteData(): Promise<void>;
}