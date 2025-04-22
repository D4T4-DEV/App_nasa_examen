import { Apod } from "../entities/Apod";

export interface ApodRepository {
    fechtDataApod(): Promise<Apod>;
    fechtDataOtherDateApod(date: Date): Promise<Apod>
}