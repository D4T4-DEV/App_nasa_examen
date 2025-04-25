import { Apod } from "@/domain/entities/Apod";
import { ApodRepository } from "@/domain/repositories/ApodRepository";

export class FetchDataOtherDateApod {
    constructor(private readonly apodRepository: ApodRepository) { }

    async execute(date: Date): Promise<Apod> {
        return this.apodRepository.fetchDataOtherDateApod(date);
    }
}