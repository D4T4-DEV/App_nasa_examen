import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { RequestState } from '@/core/interfaces/request/RequestState';
import { Apod } from '@/domain/entities/Apod';
import ClockLoader from '../loaders/ClockLoader';
import ErrorSvg from '../svgs/ErrorSvg';
import { ImageOfDay } from './ImgOfTheDay';
import ExplainImgOfDay from './ExplainImgOfDay';
import { Text } from 'react-native-paper';


interface FallBack {
    textDescrip?: string;
}

type Props = RequestState<Apod> & FallBack;

const OtherDay: React.FC<Props> = ({ loading, error, data, textDescrip }) => {

    if (loading) return <ClockLoader explain='Conectando a la NASA' />;
    if (error) return <ErrorSvg description="Ha ocurrido un error al obtener los datos" />;
    if (!data) return null;

    return (
        <ScrollView style={styles.container}>
            {textDescrip &&
                <View style={styles.explContainer}>
                    <Text variant="titleLarge">{textDescrip}</Text>
                </View>
            }
            <View>
                <ImageOfDay data={data} loading={loading} error={error} isNecesary={false} />
            </View>
            <View>
                <ExplainImgOfDay data={data} loading={loading} error={error} isNecesary={false} />
            </View>
        </ScrollView >
    )
}

export default OtherDay

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    explContainer: {
        alignContent: 'center',
        textAlign: 'center',
        alignItems: 'center'
    }
})