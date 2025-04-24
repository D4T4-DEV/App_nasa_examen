import { Earth } from "@/domain/entities/Earth";
import { EarthRepository } from "@/domain/repositories/EarthRepository";

export class FechtDataEarth {
    constructor(private readonly earthRepository: EarthRepository) { }

    async execute(latitude: number, longitude: number, date: Date): Promise<Earth> {
        return this.earthRepository.fechtDataEarth(latitude, longitude, date);
    }
}