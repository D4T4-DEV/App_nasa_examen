import { Epic } from "../entities/Epic";

export interface EpicRepository {
    fetchDataEpic(): Promise<Epic>;
    fetchDataEpicOffLine(): Promise<Epic>;
    fetchDataOtherDateEpic(date: Date): Promise<Epic>
    saveData(epic: Epic): Promise<void>;
    deleteData(): Promise<void>;
}