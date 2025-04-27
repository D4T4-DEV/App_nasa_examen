import { useState } from 'react';
import { Button } from 'react-native-paper';
import { DatePickerModal, es, registerTranslation } from 'react-native-paper-dates';

registerTranslation('es', es);
interface DatePickerButtonProps {
    onDateSelected: (date: Date | undefined) => void;
    initialDate?: Date;
}

export function DatePickerButton({ onDateSelected, initialDate }: DatePickerButtonProps) {
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(initialDate);

    return (
        <>
            <Button onPress={() => setOpen(true)}>
                {selectedDate ? 'Fecha seleccionada: ' + selectedDate.toLocaleDateString() : 'Seleccionar fecha'}
            </Button>

            <DatePickerModal
                locale="es"
                mode="single"
                visible={open}
                onDismiss={() => setOpen(false)}
                date={selectedDate}
                onConfirm={(params) => {
                    setOpen(false);
                    setSelectedDate(params.date);
                    onDateSelected(params.date);
                }}
            />
        </>
    );
}
