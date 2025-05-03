import { NeoWs } from "@/domain/entities/NeoWs";
import { NeoWsRepository } from "@/domain/repositories/NeoWsRepository";

export class FetchDataForIdNeoWs {
    constructor(private readonly neowsRepository: NeoWsRepository) { }

    async execute(id: string): Promise<NeoWs | null> {
        return this.neowsRepository.fetchDataForIdNeoWs(id);
    }
}