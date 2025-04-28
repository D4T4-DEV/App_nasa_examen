import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputDate from '../inputs/InputDate';
import InputText from '../inputs/InputText';
import { Button } from 'react-native-paper';

// Definimos el esquema de validacion
const validationSchema = Yup.object().shape({
    latitud: Yup.number()
        .typeError('La latitud debe ser un número')
        .required('La latitud es requerida')
        .min(-90, 'La latitud no puede ser menor a -90')
        .max(90, 'La latitud no puede ser mayor a 90'),
    longitud: Yup.number()
        .typeError('La longitud debe ser un número')
        .required('La longitud es requerida')
        .min(-180, 'La longitud no puede ser menor a -180')
        .max(180, 'La longitud no puede ser mayor a 180'),
    fecha: Yup.date()
        .required('La fecha es requerida'),
});

export const FormularioEarth = () => {
    return (
        <Formik
            initialValues={{
                latitud: '',
                longitud: '',
                fecha: null,
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(JSON.stringify(values, null, 2));

            }}
        >
            {({ handleSubmit }) => (
                <View style={styles.container}>
                    <InputText
                        name="latitud"
                        label="Latitud"
                        mode="outlined"
                        keyboardType='decimal-pad'
                    />

                    <InputText
                        name="longitud"
                        label="Longitud"
                        mode="outlined"
                        keyboardType='decimal-pad'
                    />

                    <InputDate name='fecha' />

                    <Button
                        onPress={() => handleSubmit()}
                        mode="contained"
                    >
                        Buscar
                    </Button>
                </View>
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
});
