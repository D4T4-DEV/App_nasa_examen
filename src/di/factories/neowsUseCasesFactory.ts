import { NeowsUseCases } from "@/core/interfaces/usecasesinterfaces/NeoWsUseCases";
import { NeoWsRepositoryImpl } from "@/data/repositories_impl/NeoWsRepositoryImpl";
import { NeoWs } from "@/domain/entities/NeoWs";
import { DeletedData } from "@/domain/usecases/common/DeletedData";
import { SaveData } from "@/domain/usecases/common/SavedData";
import { FetchDataForIdNeoWs } from "@/domain/usecases/neows/FetchDataForIdNeoWs";
import { FetchDataNeoWs } from "@/domain/usecases/neows/FetchDataNeoWs";
import { FetchDataNeoWsOffLine } from "@/domain/usecases/neows/FetchDataNeoWsOffLine";


export const createNeowsUseCases = (repo: NeoWsRepositoryImpl): NeowsUseCases => ({
    saveNeows: new SaveData<NeoWs>(repo),
    deleteNeows: new DeletedData(repo),
    fetchNeows: new FetchDataNeoWs(repo),
    fetchNeowsById: new FetchDataForIdNeoWs(repo),
    fetchNeowsOffile: new FetchDataNeoWsOffLine(repo),
});