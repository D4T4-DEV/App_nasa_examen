import { Rover } from "@/domain/entities/Rover";
import { RoverRepository } from "@/domain/repositories/RoverRepository";

export class FetchDataRover {
    constructor(private readonly roverRepository: RoverRepository) { }

    async execute(sunValue: number, page: number): Promise<Rover[] | null> {
        return this.roverRepository.fetchDataRover(sunValue, page);
    }
}