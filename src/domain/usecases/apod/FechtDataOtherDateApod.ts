import { Apod } from "@/domain/entities/Apod";
import { ApodRepository } from "@/domain/repositories/ApodRepository";

export class FechtDataOtherDateApod {
    constructor(private readonly apodRepository: ApodRepository) { }

    async execute(date: Date): Promise<Apod> {
        return this.apodRepository.fechtDataOtherDateApod(date);
    }
}