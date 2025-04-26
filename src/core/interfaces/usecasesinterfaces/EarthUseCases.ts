import { Earth } from "@/domain/entities/Earth";
import { DeletedData } from "@/domain/usecases/common/DeletedData";
import { SaveData } from "@/domain/usecases/common/SavedData";
import { FetchDataEarth } from "@/domain/usecases/earth/FetchDataEarth";
import { FetchDataEarthOffLine } from "@/domain/usecases/earth/FetchDataEarthOffLine";


export interface EarthUseCases {
    saveEarth: SaveData<Earth>;
    deleteEarth: DeletedData;
    fetchEarth: FetchDataEarth
    fetchEarthOffile: FetchDataEarthOffLine;
}