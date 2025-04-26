import { ApodUseCases } from "@/core/interfaces/usecasesinterfaces/ApodUseCases";
import { ApodRepositoryImpl } from "@/data/repositories_impl/ApodRepositoryImpl";
import { Apod } from "@/domain/entities/Apod";
import { FetchDataApod } from "@/domain/usecases/apod/FetchDataApod";
import { FetchDataApodOffLine } from "@/domain/usecases/apod/FetchDataApodOffLine";
import { FetchDataOtherDateApod } from "@/domain/usecases/apod/FetchDataOtherDateApod";
import { DeletedData } from "@/domain/usecases/common/DeletedData";
import { SaveData } from "@/domain/usecases/common/SavedData";


// Usamos un factory para poder instanciar todos los casos de uso y reducir el codigo
export const createApodUseCases = (repo: ApodRepositoryImpl): ApodUseCases => ({
    saveApod: new SaveData<Apod>(repo),
    deleteApod: new DeletedData(repo),
    fetchApod: new FetchDataApod(repo),
    fetchApodByDate: new FetchDataOtherDateApod(repo),
    fetchApodOffline: new FetchDataApodOffLine(repo),
});
