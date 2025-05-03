import { Epic } from "@/domain/entities/Epic";
import { EpicRepository } from "@/domain/repositories/EpicRepository";

export class FetchDataOtherDateEpic {
    constructor(private readonly epicRepository: EpicRepository) { }

    async execute(date: Date): Promise<Epic | null> {
        return this.epicRepository.fetchDataOtherDateEpic(date);
    }
}