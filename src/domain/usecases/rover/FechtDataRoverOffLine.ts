import { Rover } from "@/domain/entities/Rover";
import { RoverRepository } from "@/domain/repositories/RoverRepository";

export class FechtDataRoverOffLine {
    constructor(private readonly roverRepository: RoverRepository) { }

    async execute(): Promise<Rover[]> {
        return this.roverRepository.fechtDataRoverOffLine();
    }
}