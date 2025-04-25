import { Rover } from "../entities/Rover";

export interface RoverRepository {
    fetchDataRover(sunValue: number, page: number): Promise<Rover[]>;
    fetchDataRoverOffLine(): Promise<Rover[] | null>;
    saveData(rover: Rover): Promise<void>;
    deleteData(): Promise<void>;
}