import { Epic } from "@/domain/entities/Epic";
import { EpicRepository } from "@/domain/repositories/EpicRepository";

export class FechtDataOtherDateEpic {
    constructor(private readonly epicRepository: EpicRepository) { }

    async execute(date: Date): Promise<Epic> {
        return this.epicRepository.fechtDataOtherDateEpic(date);
    }
}