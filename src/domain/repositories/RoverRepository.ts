import { Rover } from "../entities/Rover";

export interface RoverRepository {
    fetchDataRover(sunValue: number, page: number): Promise<Rover[] | null>;
    fetchDataRoverOffLine(): Promise<Rover[] | null>;
}