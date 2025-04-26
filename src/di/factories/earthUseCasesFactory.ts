import { EarthUseCases } from "@/core/interfaces/usecasesinterfaces/EarthUseCases";
import { EarthRepositoryImpl } from "@/data/repositories_impl/EarthRepositoryImpl";
import { Earth } from "@/domain/entities/Earth";
import { DeletedData } from "@/domain/usecases/common/DeletedData";
import { SaveData } from "@/domain/usecases/common/SavedData";
import { FetchDataEarth } from "@/domain/usecases/earth/FetchDataEarth";
import { FetchDataEarthOffLine } from "@/domain/usecases/earth/FetchDataEarthOffLine";


export const createEarthUseCases = (repo: EarthRepositoryImpl): EarthUseCases => ({
    saveEarth: new SaveData<Earth>(repo),
    deleteEarth: new DeletedData(repo),
    fetchEarth: new FetchDataEarth(repo),
    fetchEarthOffile: new FetchDataEarthOffLine(repo),
});