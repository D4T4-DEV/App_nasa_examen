import { Epic } from "@/domain/entities/Epic";
import { EpicRepository } from "@/domain/repositories/EpicRepository";

export class FetchDataEpicOffLine {
    constructor(private readonly epicRepository: EpicRepository) { }

    async execute(): Promise<Epic | null> {
        return this.epicRepository.fetchDataEpicOffLine();
    }
}