import { EpicUseCases } from "@/core/interfaces/EpicUseCases";
import { EpicRepositoryImpl } from "@/data/repositories_impl/EpicRepositoryImpl";
import { Epic } from "@/domain/entities/Epic";
import { DeletedData } from "@/domain/usecases/common/DeletedData";
import { SaveData } from "@/domain/usecases/common/SavedData";
import { FetchDataEpic } from "@/domain/usecases/epic/FetchDataEpic";
import { FetchDataEpicOffLine } from "@/domain/usecases/epic/FetchDataEpicOffLine";
import { FetchDataOtherDateEpic } from "@/domain/usecases/epic/FetchDataOtherDateEpic";


export const createEpicUseCases = (repo: EpicRepositoryImpl): EpicUseCases => ({
    saveEpic: new SaveData<Epic>(repo),
    deleteEpic: new DeletedData(repo),
    fetchEpic: new FetchDataEpic(repo),
    fetchEpicByDate: new FetchDataOtherDateEpic(repo),
    fetchEpicOffile: new FetchDataEpicOffLine(repo),
});