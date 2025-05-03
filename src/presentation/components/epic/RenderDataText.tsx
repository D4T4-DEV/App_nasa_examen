import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import React from 'react'
import { Epic } from '@/domain/entities/Epic';
import { RequestState } from '@/core/interfaces/request/RequestState';
import { AnimationProps } from '@/core/interfaces/others/animationProps';
import ClockLoader from '../loaders/ClockLoader';
import ErrorSvg from '../svgs/ErrorSvg';
import { dateUtil } from '@/di/container';

type Props = RequestState<Epic> & AnimationProps;

const RenderDataText: React.FC<Props> = ({ loading, error, data, isNecesary }) => {


    if (loading) return isNecesary ? <ClockLoader explain='Conectando a la NASA' /> : null;
    if (error) return <ErrorSvg description="Ha ocurrido un error al obtener los datos, es posible que no haya datos" />;
    if (!data) return null;

    const fechaFoto = dateUtil.formatteDateToUSA(new Date(data.date));

    return (
        <View style={styles.container}>
            <View>
                <Text variant="labelLarge" style={styles.titles}>Datos de la imagen:</Text>
                <Text>Fecha: {fechaFoto}</Text>
            </View>
            <View>
                <Text style={styles.titles}>Cordenadas tomadas en relación a la Tierra:</Text>
                <Text>Latitud: {data.earthCoordinates.latitude}</Text>
                <Text>Longitud: {data.earthCoordinates.longitude}</Text>
            </View>
            <View>
                <Text style={styles.titles}>Cordenadas tomadas en relación a la Luna:</Text>
                <Text>X: {data.lunarCoordinates.x}</Text>
                <Text>Y: {data.lunarCoordinates.y}</Text>
                <Text>Z: {data.lunarCoordinates.z}</Text>
            </View>
            <View>
                <Text style={styles.titles}>Cordenadas tomadas en relación al Sol:</Text>
                <Text>X: {data.sunCoordinates.x}</Text>
                <Text>Y: {data.sunCoordinates.y}</Text>
                <Text>Z: {data.sunCoordinates.z}</Text>
            </View>
        </View>
    )
}

export default RenderDataText

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 30,
        gap: 10
    },
    titles: {
        fontWeight: '700',
    }

});