import { Rover } from "../entities/Rover";

export interface RoverRepository {
    fechtDataRover(sunValue: number, page: number): Promise<Rover[]>;
    fechtDataRoverOffLine(): Promise<Rover[]>;
}