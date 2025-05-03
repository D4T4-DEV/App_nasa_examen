import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { NeoWs } from '@/domain/entities/NeoWs';

const RenderItemNeows: React.FC<NeoWs> = memo(({
    id,
    name,
    orbitingBody,
    absoluteMagnitude,
    estimatedDiameterKilometers,
    estimatedDiameterMeters,
    isPotentiallyHazardous,
    closeApproachData
}) => {
    return (
        <View style={styles.container}>
            <Text>ID: {id}</Text>
            <Text>Nombre: {name}</Text>
            <Text>Esta orbitando en: {orbitingBody}</Text>
            <Text>Es potencialmente peligroso: {isPotentiallyHazardous ? 'Si' : 'No'}</Text>
            <View>
                <Text>Diametro estimado en Kilometros:</Text>
                <Text>Min {estimatedDiameterKilometers.min}</Text>
                <Text>Max {estimatedDiameterKilometers.max}</Text>
            </View>
        </View>
    );
});

export default RenderItemNeows;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
