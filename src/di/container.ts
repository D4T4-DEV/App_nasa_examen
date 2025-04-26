import { DataFormatter } from "@/core/utils/DataFormatter";
import { ApodApi } from "@/data/datasource/ApodApi";
import { EarthApi } from "@/data/datasource/EarthApi";
import { EpicApi } from "@/data/datasource/EpicApi";
import { NeoWsApi } from "@/data/datasource/NeoWsApi";
import { RoverApi } from "@/data/datasource/RoverApi";
import { ApodRepositoryImpl } from "@/data/repositories_impl/ApodRepositoryImpl";
import { createApodUseCases } from "./factories/apodUseCasesFactory";
import { ApodUseCases } from "@/core/interfaces/usecasesinterfaces/ApodUseCases";
import { EarthRepositoryImpl } from "@/data/repositories_impl/EarthRepositoryImpl";
import { EarthUseCases } from "@/core/interfaces/usecasesinterfaces/EarthUseCases";
import { createEarthUseCases } from "./factories/earthUseCasesFactory";
import { EpicRepositoryImpl } from "@/data/repositories_impl/EpicRepositoryImpl";
import { EpicUseCases } from "@/core/interfaces/usecasesinterfaces/EpicUseCases";
import { createEpicUseCases } from "./factories/epicUseCasesFactory";
import { NeoWsRepositoryImpl } from "@/data/repositories_impl/NeoWsRepositoryImpl";
import { NeowsUseCases } from "@/core/interfaces/usecasesinterfaces/NeoWsUseCases";
import { createNeowsUseCases } from "./factories/neowsUseCasesFactory";
import { RoverRepositoryImpl } from "@/data/repositories_impl/RoverRepositoryImpl";
import { createRoverUseCases } from "./factories/roverUseCasesFactory";
import { RoverUseCases } from "@/core/interfaces/usecasesinterfaces/RoverUseCase";

const dateUtil = new DataFormatter();


// APIS 
const apodApi = new ApodApi();
const earthApi = new EarthApi();
const epicApi = new EpicApi();
const neowsApi = new NeoWsApi();
const roverApi = new RoverApi();

// Repositorios
const apodRepository = new ApodRepositoryImpl(apodApi, dateUtil);
const earthRepository = new EarthRepositoryImpl(earthApi, dateUtil);
const epicRepository = new EpicRepositoryImpl(epicApi, dateUtil);
const neowsRepository = new NeoWsRepositoryImpl(neowsApi);
const roverRepository = new RoverRepositoryImpl(roverApi);

// Casos de uso (en donde se usa factory para poner generarlo sin generar tanto codigo repetitivo)
export const apodUseCases: ApodUseCases = createApodUseCases(apodRepository);
export const earthUseCases: EarthUseCases = createEarthUseCases(earthRepository);
export const epicUseCases: EpicUseCases = createEpicUseCases(epicRepository);
export const neowsUseCases: NeowsUseCases = createNeowsUseCases(neowsRepository);
export const roverUseCases: RoverUseCases = createRoverUseCases(roverRepository);