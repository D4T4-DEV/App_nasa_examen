import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import { DatePickerInput, es, registerTranslation } from 'react-native-paper-dates'

registerTranslation('es', es);

interface DateInputProps {
    onChange: (date: Date | undefined) => void;
    initialDate?: Date;
    style?: ViewStyle;
}

const InputDate: React.FC<DateInputProps> = ({ initialDate, style, onChange }) => {

    const [inputDate, setInputDate] = React.useState<Date | undefined>(initialDate)

    const handleChange = (date: Date | undefined) => {
        setInputDate(date);
        onChange(date);
    };

    return (
        <View style={[styles.container, style]}>
            <DatePickerInput
                locale="es"
                label="Fecha de busqueda"
                value={inputDate}
                onChange={handleChange}
                inputMode="start"
                validRange={{
                    endDate: new Date(), // La fecha valida para escribir solo puede ser la de hoy del dispositivo
                }}
            />
        </View>
    )
}

export default InputDate

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    }
})