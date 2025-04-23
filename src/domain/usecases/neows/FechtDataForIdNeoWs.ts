import { NeoWs } from "@/domain/entities/NeoWs";
import { NeoWsRepository } from "@/domain/repositories/NeoWsRepository";

export class FechtDataForIdNeoWs {
    constructor(private readonly neowsRepository: NeoWsRepository) { }

    async execute(id: string): Promise<NeoWs> {
        return this.neowsRepository.fechtDataForIdNeoWs(id);
    }
}