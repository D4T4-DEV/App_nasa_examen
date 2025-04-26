import { NeoWs } from "@/domain/entities/NeoWs";
import { DeletedData } from "@/domain/usecases/common/DeletedData";
import { SaveData } from "@/domain/usecases/common/SavedData";
import { FetchDataForIdNeoWs } from "@/domain/usecases/neows/FetchDataForIdNeoWs";
import { FetchDataNeoWs } from "@/domain/usecases/neows/FetchDataNeoWs";
import { FetchDataNeoWsOffLine } from "@/domain/usecases/neows/FetchDataNeoWsOffLine";


export interface NeowsUseCases {
    saveNeows: SaveData<NeoWs>;
    deleteNeows: DeletedData;
    fetchNeows: FetchDataNeoWs;
    fetchNeowsById: FetchDataForIdNeoWs;
    fetchNeowsOffile: FetchDataNeoWsOffLine;
}