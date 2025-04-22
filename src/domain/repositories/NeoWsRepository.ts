import { NeoWs } from "../entities/NeoWs";

export interface NeoWsRepository {
    fechtDataNeoWs(initialDate: Date, endDate: Date): Promise<NeoWs>;
    fechtDataNeoWsOffLine(): Promise<NeoWs[]>;
    fechtDataForIdNeoWs(id: string): Promise<NeoWs>;
}