import React from 'react';
import { TextInput, HelperText, TextInputProps } from 'react-native-paper';
import { useField } from 'formik';

// Extendemos las props de TextInput
interface TextInputPropsComp extends TextInputProps {
    name: string;
}

const InputText: React.FC<TextInputPropsComp> = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);

    return (
        <>
            <TextInput
                value={field.value}
                onChangeText={(value) => helpers.setValue(value)}
                onBlur={() => helpers.setTouched(true)}
                error={meta.touched && !!meta.error}
                {...props}
            />
            {meta.touched && meta.error && (
                <HelperText type="error" visible={true}>
                    {meta.error}
                </HelperText>
            )}
        </>
    );
};

export default InputText;
