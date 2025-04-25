import { Rover } from "@/domain/entities/Rover";
import { DeletableRepository, SavableRepository } from "@/domain/repositories/GenericRepository";
import { RoverRepository } from "@/domain/repositories/RoverRepository";
import { RoverApi } from "../datasource/RoverApi";
import { roverMapper } from "../mappers/RoverMapper";
import { KeysStorage_Configuration } from "@/core/keys_storage";
import { LocalStorage } from "@/services/storage";

export class RoverRepositoryImpl implements RoverRepository, SavableRepository<Rover>, DeletableRepository {
    constructor(
        private readonly api: RoverApi
    ) { }

    async fetchDataRover(sunValue: number, page: number): Promise<Rover[] | null> {
        const rawDataRover = await this.api.fetchDataRover(sunValue, page);
        return roverMapper(rawDataRover) ?? null;
    }

    async fetchDataRoverOffLine(): Promise<Rover[] | null> {
        const storedData = await LocalStorage.load<Rover[]>(KeysStorage_Configuration.ROVER_STORAGE_KEY);
        if (!storedData) console.warn("No hay datos almacenados localmente");
        return storedData ?? null;
    }

    async saveData(data: Rover[]): Promise<void> {
        await LocalStorage.save(KeysStorage_Configuration.ROVER_STORAGE_KEY, data);
    }

    async deleteData(): Promise<void> {
        await LocalStorage.remove(KeysStorage_Configuration.ROVER_STORAGE_KEY);
    }
}