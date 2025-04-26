
import { Rover } from "@/domain/entities/Rover";
import { DeletedData } from "@/domain/usecases/common/DeletedData";
import { SaveData } from "@/domain/usecases/common/SavedData";
import { FetchDataRover } from "@/domain/usecases/rover/FetchDataRover";
import { FetchDataRoverOffLine } from "@/domain/usecases/rover/FetchDataRoverOffLine";


export interface RoverUseCases {
    saveRover: SaveData<Rover[]>;
    deleteRover: DeletedData;
    fetchRover: FetchDataRover;
    fetchRoverOffile: FetchDataRoverOffLine;
}