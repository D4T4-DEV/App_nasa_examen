import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/navigation/types'

// React native paper
import { Button } from 'react-native-paper';

type PropsRoute = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: PropsRoute) => {

    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <Button mode='contained-tonal' onPress={() => navigation.navigate('APOD')}>
                Ir a la imagen del día (APOD)
            </Button>
            <Button mode='contained-tonal' onPress={() => navigation.navigate('EPIC')}>
                Explorar (EPIC)
            </Button>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})