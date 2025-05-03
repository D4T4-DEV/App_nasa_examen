import { Apod } from "@/domain/entities/Apod";
import { ApodRepository } from "@/domain/repositories/ApodRepository";

export class FetchDataApodOffLine {
    constructor(private readonly apodRepository: ApodRepository) { }

    async execute(): Promise<Apod | null> {
        return this.apodRepository.fetchDataApodOffLine();
    }
}