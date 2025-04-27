import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Portal, Dialog, Text, Button } from 'react-native-paper'

interface DialogSaveProps {
    visible: boolean;
    textDescrip: string;
    hideDialog: () => void;
    showDialog: () => void;
    onSave: () => void;
}

const SaveDialog: React.FC<DialogSaveProps> = ({ visible, textDescrip, hideDialog, showDialog, onSave }) => {
    return (
        <View>
            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title>Preguntando</Dialog.Title>
                    <Dialog.Content>
                        <Text variant="bodyMedium">{textDescrip}</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => { hideDialog(); }}>No</Button>
                        <Button onPress={() => { onSave(); hideDialog(); }}>Si</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    )
}

export default SaveDialog

const styles = StyleSheet.create({})