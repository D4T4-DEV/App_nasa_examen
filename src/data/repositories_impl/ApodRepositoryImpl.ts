import { ApodRepository } from "@/domain/repositories/ApodRepository";
import { ApodApi } from "../datasource/ApodApi";
import { Apod } from "@/domain/entities/Apod";
import { apodMapper } from "../mappers/ApodMapper";
import { DataFormatter } from "@/core/utils/DataFormatter";
import { LocalStorage } from "@/services/storage";
import { KeysStorage_Configuration } from "@/core/keys_storage";
import { DeletableRepository, SavableRepository } from "@/domain/repositories/GenericRepository";

export class ApodRepositoryImpl implements ApodRepository, SavableRepository<Apod>, DeletableRepository {

    constructor(
        private readonly api: ApodApi,
        private readonly dataFormatter: DataFormatter
    ) { }

    async fetchDataApod(): Promise<Apod> {
        const rawDataApod = await this.api.fetchDataApod();
        return apodMapper(rawDataApod);
    }

    async fetchDataOtherDateApod(date: Date): Promise<Apod | null> {
        const dateFormatter = this.dataFormatter.formatteDateToUSA(date);
        const rawDataApod = await this.api.fetchDataOtherDateApod(dateFormatter);
        return apodMapper(rawDataApod) ?? null;
    }

    async fetchDataApodOffLine(): Promise<Apod | null> {
        const storedData = await LocalStorage.load<Apod>(KeysStorage_Configuration.APOD_STORAGE_KEY);
        if (!storedData) console.warn("No hay datos almacenados localmente");
        return storedData ?? null;
    }

    async saveData(data: Apod): Promise<void> {
        await LocalStorage.save(KeysStorage_Configuration.APOD_STORAGE_KEY, data);
    }

    async deleteData(): Promise<void> {
        await LocalStorage.remove(KeysStorage_Configuration.APOD_STORAGE_KEY);
    }
}