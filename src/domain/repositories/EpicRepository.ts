import { Epic } from "../entities/Epic";

export interface EpicRepository {
    fetchDataEpic(): Promise<Epic>;
    fetchDataOtherDateEpic(date: Date): Promise<Epic | null>
    fetchDataEpicOffLine(): Promise<Epic>;
    saveData(epic: Epic): Promise<void>;
    deleteData(): Promise<void>;
}