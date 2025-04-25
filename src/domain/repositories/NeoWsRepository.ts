import { NeoWs } from "../entities/NeoWs";

export interface NeoWsRepository {
    fetchDataNeoWs(page: number): Promise<NeoWs[] | null>;
    fetchDataForIdNeoWs(id: string): Promise<NeoWs | null>;
    fetchDataNeoWsOffLine(): Promise<NeoWs[] | null>;
    saveData(neows: NeoWs): Promise<void>;
    deleteData(): Promise<void>;
}