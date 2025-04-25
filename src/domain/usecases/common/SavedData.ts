import { SavableRepository } from "@/domain/repositories/GenericRepository";

export class SaveData<T> {
    constructor(private readonly repository: SavableRepository<T>) { }

    async execute(data: T | T[]): Promise<void> {
        await this.repository.saveData(data);
    }
}