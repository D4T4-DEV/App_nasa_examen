import { Rover } from "@/domain/entities/Rover";
import { RoverRepository } from "@/domain/repositories/RoverRepository";

export class FetchDataRoverOffLine {
    constructor(private readonly roverRepository: RoverRepository) { }

    async execute(): Promise<Rover[] | null> {
        return this.roverRepository.fetchDataRoverOffLine();
    }
}