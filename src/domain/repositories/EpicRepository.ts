import { Epic } from "../entities/Epic";

export interface EpicRepository {
    fetchDataEpic(): Promise<Epic | null>;
    fetchDataOtherDateEpic(date: Date): Promise<Epic | null>
    fetchDataEpicOffLine(): Promise<Epic | null>;
}