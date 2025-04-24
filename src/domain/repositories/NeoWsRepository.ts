import { NeoWs } from "../entities/NeoWs";

export interface NeoWsRepository {
    fechtDataNeoWs(page: number): Promise<NeoWs[]>;
    fechtDataNeoWsOffLine(): Promise<NeoWs[]>;
    fechtDataForIdNeoWs(id: string): Promise<NeoWs>;
}