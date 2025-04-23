import { NeoWs } from "@/domain/entities/NeoWs";
import { NeoWsRepository } from "@/domain/repositories/NeoWsRepository";

export class FechtDataNeoWsOffLine {
    constructor(private readonly neowsRepository: NeoWsRepository) { }

    async execute(): Promise<NeoWs[]> {
        return this.neowsRepository.fechtDataNeoWsOffLine();
    }
}