
export interface EarthNasaModel {
    date: string;
    id: string;
    resource: Resource;
    service_version: string;
    url: string;
}

interface Resource {
    dataset: string;
    planet: string;
}