import { NeoWs } from "@/domain/entities/NeoWs";
import { NeoWsRepository } from "@/domain/repositories/NeoWsRepository";

export class FetchDataNeoWs {
    constructor(private readonly neowsRepository: NeoWsRepository) { }

    async execute(page: number): Promise<NeoWs[]> {
        return this.neowsRepository.fetchDataNeoWs(page);
    }
}