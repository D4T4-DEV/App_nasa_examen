import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { useEpicViewModel } from '@/presentation/viewmodels/useEpicViewModel'
import { Text } from 'react-native-paper'
import ClockLoader from '../loaders/ClockLoader'
import ErrorSvg from '../svgs/ErrorSvg'
import RenderImageEpic from './RenderImageEpic'

const FetchDataToday = () => {
    const { epicData, offlineEpic, fetchDataEpic } = useEpicViewModel();

    useEffect(() => {
        fetchDataEpic();
    }, []);

    if (epicData.loading) return <ClockLoader explain='Conectando a la NASA' />;
    if (epicData.error) return <ErrorSvg description="Ha ocurrido un error al obtener los datos" />;
    if (!epicData.data) return null;

    console.log(epicData);

    return (
        <View>
            <RenderImageEpic data={epicData.data} loading={epicData.loading} error={epicData.error} isNecesary={false} />
        </View>
    )
}

export default FetchDataToday

const styles = StyleSheet.create({})