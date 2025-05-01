import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { useEpicViewModel } from '@/presentation/viewmodels/useEpicViewModel'
import ClockLoader from '../loaders/ClockLoader'
import ErrorSvg from '../svgs/ErrorSvg'
import RenderImageEpic from './RenderImageEpic'
import RenderDataText from './RenderDataText'
import { ScrollView } from 'react-native-gesture-handler'

const FetchDataToday = () => {
    const { epicData, offlineEpic, fetchDataEpic } = useEpicViewModel();

    useEffect(() => {
        fetchDataEpic();
    }, []);

    if (epicData.loading) return <ClockLoader explain='Conectando a la NASA' />;
    if (epicData.error) return <ErrorSvg description="Ha ocurrido un error al obtener los datos" />;
    if (!epicData.data) return null;

    return (
        <ScrollView style={styles.container}>
            <RenderImageEpic data={epicData.data} loading={epicData.loading} error={epicData.error} isNecesary={false} />
            <RenderDataText  data={epicData.data} loading={epicData.loading} error={epicData.error} isNecesary={false}/>
        </ScrollView>
    )
}

export default FetchDataToday

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignContent: 'center',
    }
})