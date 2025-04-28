import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import InputDate from '../inputs/InputDate';
import InputText from '../inputs/InputText';
import { Button } from 'react-native-paper';
import { validationSchemaFormEarth } from '@/core/validators';

export const FormularioEarth = () => {
    return (
        <Formik
            initialValues={{
                latitud: '',
                longitud: '',
                fecha: null,
            }}
            validationSchema={validationSchemaFormEarth}
            onSubmit={(values) => {
                console.log(JSON.stringify(values, null, 2));

            }}
        >
            {({ handleSubmit }) => (
                <View style={styles.container}>
                    {/* Input para la latitud */}
                    <InputText
                        name="latitud"
                        label="Latitud"
                        mode="outlined"
                        keyboardType='decimal-pad'
                    />
                    {/* Input para la longitud */}
                    <InputText
                        name="longitud"
                        label="Longitud"
                        mode="outlined"
                        keyboardType='decimal-pad'
                    />

                    {/* Input para la fecha */}
                    <InputDate name='fecha' />

                    {/* Boton para enviar el formulario */}
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
