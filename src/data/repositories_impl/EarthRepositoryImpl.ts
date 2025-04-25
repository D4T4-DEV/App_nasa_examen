import { DataFormatter } from "@/core/utils/DataFormatter";
import { LocalStorage } from "@/services/storage";
import { KeysStorage_Configuration } from "@/core/keys_storage";
import { DeletableRepository, SavableRepository } from "@/domain/repositories/GenericRepository";
import { Earth } from "@/domain/entities/Earth";
import { EarthRepository } from "@/domain/repositories/EarthRepository";
import { EarthApi } from "../datasource/EarthApi";
import { earthMapper } from "../mappers/EarthMapper";

export class EarthRepositoryImpl implements EarthRepository, SavableRepository<Earth>, DeletableRepository {

    constructor(
        private readonly api: EarthApi,
        private readonly dataFormatter: DataFormatter
    ) { }

    async fetchDataEarth(latitude: number, longitude: number, date: Date): Promise<Earth | null> {
        const dateFormatter = this.dataFormatter.formatteDateToUSA(date);
        const rawDataApod = await this.api.fetchDataEarth(latitude, longitude, dateFormatter);
        return earthMapper(rawDataApod) ?? null;
    }

    async fetchDataEarthOffLine(): Promise<Earth | null> {
        const storedData = await LocalStorage.load<Earth>(KeysStorage_Configuration.EARTH_STORAGE_KEY);
        if (!storedData) console.warn("No hay datos almacenados localmente");
        return storedData ?? null;
    }

    async saveData(data: Earth): Promise<void> {
        await LocalStorage.save(KeysStorage_Configuration.EARTH_STORAGE_KEY, data);
    }

    async deleteData(): Promise<void> {
        await LocalStorage.remove(KeysStorage_Configuration.EARTH_STORAGE_KEY);
    }
}