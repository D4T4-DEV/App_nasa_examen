// Archivo que define acciones genericas que se ejecutan en si un sin fin de veces 

// Repositorio para guardar datos
export interface SavableRepository<T> {
    saveData(data: T): Promise<void>;
}

// Repositorio para borrar datos
export interface DeletableRepository {
    deleteData(): Promise<void>;
}