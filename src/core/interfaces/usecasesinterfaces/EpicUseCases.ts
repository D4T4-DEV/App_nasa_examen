import { Epic } from "@/domain/entities/Epic";
import { DeletedData } from "@/domain/usecases/common/DeletedData";
import { SaveData } from "@/domain/usecases/common/SavedData";
import { FetchDataEpic } from "@/domain/usecases/epic/FetchDataEpic";
import { FetchDataEpicOffLine } from "@/domain/usecases/epic/FetchDataEpicOffLine";
import { FetchDataOtherDateEpic } from "@/domain/usecases/epic/FetchDataOtherDateEpic";


export interface EpicUseCases {
    saveEpic: SaveData<Epic>;
    deleteEpic: DeletedData;
    fetchEpic: FetchDataEpic;
    fetchEpicByDate: FetchDataOtherDateEpic;
    fetchEpicOffile: FetchDataEpicOffLine;
}