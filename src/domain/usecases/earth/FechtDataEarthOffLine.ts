import { Earth } from "@/domain/entities/Earth";
import { EarthRepository } from "@/domain/repositories/EarthRepository";

export class FechtDataEarthOffLine {
    constructor(private readonly earthRepository: EarthRepository) { }

    async execute(): Promise<Earth> {
        return this.earthRepository.fechtDataEarthOffLine();
    }
}