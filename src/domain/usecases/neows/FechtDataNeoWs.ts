import { NeoWs } from "@/domain/entities/NeoWs";
import { NeoWsRepository } from "@/domain/repositories/NeoWsRepository";

export class FechtDataNeoWs {
    constructor(private readonly neowsRepository: NeoWsRepository) { }

    async execute(initialDate: Date, endDate: Date): Promise<NeoWs> {
        return this.neowsRepository.fechtDataNeoWs(initialDate, endDate);
    }
}