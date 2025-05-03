import { Epic } from "@/domain/entities/Epic";
import { EpicRepository } from "@/domain/repositories/EpicRepository";

export class FetchDataEpic {
    constructor(private readonly epicRepository: EpicRepository) { }

    async execute(): Promise<Epic> {
        return this.epicRepository.fetchDataEpic();
    }
}