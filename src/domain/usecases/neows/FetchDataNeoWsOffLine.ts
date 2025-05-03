import { NeoWs } from "@/domain/entities/NeoWs";
import { NeoWsRepository } from "@/domain/repositories/NeoWsRepository";

export class FetchDataNeoWsOffLine {
    constructor(private readonly neowsRepository: NeoWsRepository) { }

    async execute(): Promise<NeoWs[] | null> {
        return this.neowsRepository.fetchDataNeoWsOffLine();
    }
}