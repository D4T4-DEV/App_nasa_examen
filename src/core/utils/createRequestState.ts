import { RequestState } from "../interfaces/request/RequestState";

// Funcion lamda para poder generar estados 
// en base a Request state, propiciando mantenibilidad en el codigo
export const createRequestState = <T>(): RequestState<T> => ({
    data: null,
    loading: false,
    error: null,
});
