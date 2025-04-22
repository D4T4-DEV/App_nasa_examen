import { Epic } from "../entities/Epic";

export interface EpicRepository {
    fechtDataEpic(): Promise<Epic>;
    fechtDataOtherDateEpic(date: Date): Promise<Epic>
}