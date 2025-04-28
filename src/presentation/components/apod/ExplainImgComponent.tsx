import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import React from 'react'
import { RequestState } from '@/core/interfaces/request/RequestState'
import { Apod } from '@/domain/entities/Apod'
import ClockLoader from '../loaders/ClockLoader'
import ErrorSvg from '../svgs/ErrorSvg'
import { AnimationProps } from '@/core/interfaces/others/animationProps'

type Props = RequestState<Apod> & AnimationProps;

const ExplainImgComponent: React.FC<Props> = ({ loading, error, data, isNecesary = false }) => {

    if (loading) return isNecesary ? <ClockLoader explain='Conectando a la NASA' /> : null;
    if (error) return <ErrorSvg description="Ha ocurrido un error al obtener los datos" />;
    if (!data) return null;

    return (
        <>
            <Text variant="titleLarge" style={styles.title}>Explicación de la imagen</Text>
            <Text style={styles.text}>{data?.explanation}</Text>
        </>
    )
}

export default ExplainImgComponent

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontWeight: '800',
        marginBottom: 10,
        marginTop: 10
    },
    text: {
        fontSize: 15,
        padding: 15
    },
})