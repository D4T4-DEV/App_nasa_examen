import * as Yup from 'yup';

// Definimos el esquema de validacion
export const validationSchemaFormEarth = Yup.object().shape({
    // Validacion para la latitud
    latitud: Yup.number()
        .typeError('La latitud debe ser un número')
        .required('La latitud es requerida')
        .min(-90, 'La latitud no puede ser menor a -90')
        .max(90, 'La latitud no puede ser mayor a 90'),

    // Validacion para la longitud
    longitud: Yup.number()
        .typeError('La longitud debe ser un número')
        .required('La longitud es requerida')
        .min(-180, 'La longitud no puede ser menor a -180')
        .max(180, 'La longitud no puede ser mayor a 180'),

    // Valifacion para la fecha
    fecha: Yup.date()
        .required('La fecha es requerida'),
});


export const validationSchemaFormEpic = Yup.object().shape({
    fecha: Yup.date().required('La fecha es requerida'),
});