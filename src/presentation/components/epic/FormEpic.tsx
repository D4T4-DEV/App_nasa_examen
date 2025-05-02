import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import { validationSchemaFormEpic } from '@/core/validators'
import { useEpicViewModel } from '@/presentation/viewmodels/useEpicViewModel'
import { Button } from 'react-native-paper'
import InputDate from '../inputs/InputDate'

const FormEpic = () => {
    const { fetchDataOtherDayEpic } = useEpicViewModel();

    return (
        <Formik
            initialValues={{
                fecha: null
            }}
            validationSchema={validationSchemaFormEpic}
            onSubmit={async (values) => {
                if (values.fecha) {
                    fetchDataOtherDayEpic(values.fecha);
                }
            }}
        >
            {({ handleSubmit, isValid, dirty }) => (
                <View style={styles.container}>
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
    )
}

export default FormEpic

const styles = StyleSheet.create({
    container: {
        
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
