import { Apod } from "../../entities/Apod";
import { ApodRepository } from "../../repositories/ApodRepository";

export class FetchDataApod {
    constructor(private readonly apodRepository: ApodRepository) { }

    async execute(): Promise<Apod> {
        return this.apodRepository.fetchDataApod();
    }
}