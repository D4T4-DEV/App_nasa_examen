import { DataFormatter } from "@/core/utils/DataFormatter";
import { LocalStorage } from "@/services/storage";
import { KeysStorage_Configuration } from "@/core/keys_storage";
import { DeletableRepository, SavableRepository } from "@/domain/repositories/GenericRepository";
import { Epic } from "@/domain/entities/Epic";
import { EpicRepository } from "@/domain/repositories/EpicRepository";
import { EpicApi } from "../datasource/EpicApi";
import { epicMapper } from "../mappers/EpicMapper";

export class EpicRepositoryImpl implements EpicRepository, SavableRepository<Epic>, DeletableRepository {

    constructor(
        private readonly api: EpicApi,
        private readonly dataFormatter: DataFormatter
    ) { }

    async fetchDataEpic(): Promise<Epic | null> {
        const rawDataEpic = await this.api.fetchDataEpic();
        return epicMapper(rawDataEpic[0]) ?? null;
    }

    async fetchDataOtherDateEpic(date: Date): Promise<Epic | null> {
        const dateFormatter = this.dataFormatter.formatteDateToUSA(date);
        const rawDataEpic = await this.api.fetchDataOtherDateEpic(dateFormatter);
        return epicMapper(rawDataEpic[0]) ?? null;
    }

    async fetchDataEpicOffLine(): Promise<Epic | null> {
        const storedData = await LocalStorage.load<Epic>(KeysStorage_Configuration.EPIC_STORAGE_KEY);
        if (!storedData) console.warn("No hay datos almacenados localmente");
        return storedData ?? null;
    }

    async saveData(data: Epic): Promise<void> {
        await LocalStorage.save(KeysStorage_Configuration.EPIC_STORAGE_KEY, data);
    }

    async deleteData(): Promise<void> {
        await LocalStorage.remove(KeysStorage_Configuration.EPIC_STORAGE_KEY);
    }
}