import { Apod } from "@/domain/entities/Apod";
import { ApodRepository } from "@/domain/repositories/ApodRepository";

export class FechtDataApodOffLine {
    constructor(private readonly apodRepository: ApodRepository) { }

    async execute(): Promise<Apod> {
        return this.apodRepository.fechtDataApodOffLine();
    }
}