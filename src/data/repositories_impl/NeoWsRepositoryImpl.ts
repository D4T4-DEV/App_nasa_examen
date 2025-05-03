import { KeysStorage_Configuration } from "@/core/keys_storage";
import { NeoWs } from "@/domain/entities/NeoWs";
import { SavableRepository, DeletableRepository } from "@/domain/repositories/GenericRepository";
import { NeoWsRepository } from "@/domain/repositories/NeoWsRepository";
import { LocalStorage } from "@/services/storage";
import { NeoWsApi } from "../datasource/NeoWsApi";
import { neoWsMapper, neoWsSingleMapper } from "../mappers/NeoWsMapper";

export class NeoWsRepositoryImpl implements NeoWsRepository, SavableRepository<NeoWs>, DeletableRepository {

    constructor(
        private readonly api: NeoWsApi
    ) { }

    async fetchDataNeoWs(page: number): Promise<NeoWs[] | null> {
        const rawDataNeoWs = await this.api.fetchDataNeoWs(page);
        return neoWsMapper(rawDataNeoWs) ?? null;
    }

    async fetchDataForIdNeoWs(id: string): Promise<NeoWs | null> {
        const rawDataNeoWs = await this.api.fetchDataForIdNeoWs(id);
        return neoWsSingleMapper(rawDataNeoWs) ?? null;
    }

    async fetchDataNeoWsOffLine(): Promise<NeoWs[] | null> {
        const storedData = await LocalStorage.load<NeoWs[]>(KeysStorage_Configuration.NEOWS_STORAGE_KEY);
        if (!storedData) console.warn("No hay datos almacenados localmente");
        return storedData ?? null;
    }

    async saveData(data: NeoWs[]): Promise<void> {
        await LocalStorage.save(KeysStorage_Configuration.NEOWS_STORAGE_KEY, data);
    }

    async deleteData(): Promise<void> {
        await LocalStorage.remove(KeysStorage_Configuration.NEOWS_STORAGE_KEY);
    }
}