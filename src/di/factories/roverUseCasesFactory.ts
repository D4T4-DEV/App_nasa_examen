import { RoverUseCases } from "@/core/interfaces/usecasesinterfaces/RoverUseCase";
import { RoverRepositoryImpl } from "@/data/repositories_impl/RoverRepositoryImpl";
import { Rover } from "@/domain/entities/Rover";
import { DeletedData } from "@/domain/usecases/common/DeletedData";
import { SaveData } from "@/domain/usecases/common/SavedData";
import { FetchDataRover } from "@/domain/usecases/rover/FetchDataRover";
import { FetchDataRoverOffLine } from "@/domain/usecases/rover/FetchDataRoverOffLine";


export const createRoverUseCases = (repo: RoverRepositoryImpl): RoverUseCases => ({
    saveRover: new SaveData<Rover[]>(repo),
    deleteRover: new DeletedData(repo),
    fetchRover: new FetchDataRover(repo),
    fetchRoverOffile: new FetchDataRoverOffLine(repo),
});