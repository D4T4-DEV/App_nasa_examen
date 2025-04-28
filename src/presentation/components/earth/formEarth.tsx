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
            {({ handleSubmit, isValid, dirty }) => (
                <View style={styles.container}>
                    {/* Input para la latitud */}
                    <InputText
                        name="latitud"
                        label="Latitud"
                        mode="flat"
                        keyboardType='decimal-pad'
                        style={styles.inputs}
                    />

                    {/* Input para la longitud */}
                    <InputText
                        name="longitud"
                        label="Longitud"
                        mode="flat"
                        keyboardType='decimal-pad'
                        style={styles.inputs}
                    />

                    {/* Input para la fecha */}
                    <InputDate name='fecha' style={styles.inptDate} />

                    {/* Boton para enviar el formulario */}
                    <Button
                        style={[styles.btn, styles.inputs]}
                        onPress={() => handleSubmit()}
                        mode="contained"
                        disabled={!(isValid && dirty)}
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
    },
    btn: {
        borderRadius: 10
    },
    inputs: {
        margin: 10,
        marginBottom: 12
    },
    inptDate: {
        margin: 10,
    }
});
