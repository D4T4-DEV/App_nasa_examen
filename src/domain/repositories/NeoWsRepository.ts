import { NeoWs } from "../entities/NeoWs";

export interface NeoWsRepository {
    fetchDataNeoWs(page: number): Promise<NeoWs[]>;
    fetchDataForIdNeoWs(id: string): Promise<NeoWs>;
    fetchDataNeoWsOffLine(): Promise<NeoWs[] | null>;
    saveData(neows: NeoWs): Promise<void>;
    deleteData(): Promise<void>;
}