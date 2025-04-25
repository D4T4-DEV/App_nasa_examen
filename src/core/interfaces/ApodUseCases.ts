import { Apod } from "@/domain/entities/Apod";
import { FetchDataApod } from "@/domain/usecases/apod/FetchDataApod";
import { FetchDataApodOffLine } from "@/domain/usecases/apod/FetchDataApodOffLine";
import { FetchDataOtherDateApod } from "@/domain/usecases/apod/FetchDataOtherDateApod";
import { DeletedData } from "@/domain/usecases/common/DeletedData";
import { SaveData } from "@/domain/usecases/common/SavedData";

export interface ApodUseCases {
    saveApod: SaveData<Apod>;
    deleteApod: DeletedData;
    fetchApod: FetchDataApod
    fetchApodByDate: FetchDataOtherDateApod;
    fetchApodOffline: FetchDataApodOffLine;
}