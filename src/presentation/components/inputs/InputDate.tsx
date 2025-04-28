import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import { DatePickerInput, es, registerTranslation } from 'react-native-paper-dates'
import { useField } from 'formik';
import { HelperText } from 'react-native-paper';

registerTranslation('es', es);

interface DateInputProps {
    name: string;
    style?: ViewStyle;
}

const InputDate: React.FC<DateInputProps> = ({ name, style }) => {

    const [field, meta, helpers] = useField(name);

    const handleChange = (date: Date | undefined) => {
        helpers.setValue(date);
    };

    return (
        <>
            <DatePickerInput
                locale="es"
                label="Fecha de búsqueda"
                value={field.value}
                onChange={handleChange}
                inputMode="start"
                validRange={{
                    endDate: new Date(),
                }}
                error={!!meta.error && meta.touched}
            />
            {meta.touched && meta.error && (
                <HelperText type="error" visible={true}>
                    {meta.error}
                </HelperText>
            )}
        </>
    )
}

export default InputDate