import { DeletableRepository } from "@/domain/repositories/GenericRepository";

export class DeletedData {
    constructor(private readonly repository: DeletableRepository) { }

    async execute(): Promise<void> {
        await this.repository.deleteData();
    }
}