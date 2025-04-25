import { Apod } from "../entities/Apod";

export interface ApodRepository {
    fetchDataApod(): Promise<Apod>;
    fetchDataApodOffLine(): Promise<Apod>;
    fetchDataOtherDateApod(date: Date): Promise<Apod>
}