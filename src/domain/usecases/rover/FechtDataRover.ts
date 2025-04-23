import { Rover } from "@/domain/entities/Rover";
import { RoverRepository } from "@/domain/repositories/RoverRepository";

export class FechtDataRover {
    constructor(private readonly roverRepository: RoverRepository) { }

    async execute(sunValue: number, page: number): Promise<Rover[]> {
        return this.roverRepository.fechtDataRover(sunValue, page);
    }
}