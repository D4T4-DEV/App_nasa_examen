import { Earth } from "@/domain/entities/Earth";
import { EarthRepository } from "@/domain/repositories/EarthRepository";

export class FetchDataEarth {
    constructor(private readonly earthRepository: EarthRepository) { }

    async execute(latitude: number, longitude: number, date: Date): Promise<Earth | null> {
        return this.earthRepository.fetchDataEarth(latitude, longitude, date);
    }
}