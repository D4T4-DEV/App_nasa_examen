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

    const [field, _meta, helpers] = useField(name);

    const handleChange = (date: Date | undefined) => {
        helpers.setValue(date);
    };

    return (
        <View style={[styles.container, style]}>
            <DatePickerInput
                locale="es"
                label="Fecha de búsqueda"
                value={field.value}
                onChange={handleChange}
                inputMode="start"
                validRange={{
                    endDate: new Date(),
                }}
            />
        </View>
    )
}

export default InputDate

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        alignSelf: 'center',
        height: 60,
    },
});
