import { Apod } from "@/domain/entities/Apod";
import { ApodRepository } from "@/domain/repositories/ApodRepository";

export class FetchDataOtherDateApod {
    constructor(private readonly apodRepository: ApodRepository) { }

    async execute(date: Date): Promise<Apod | null> {
        return this.apodRepository.fetchDataOtherDateApod(date);
    }
}