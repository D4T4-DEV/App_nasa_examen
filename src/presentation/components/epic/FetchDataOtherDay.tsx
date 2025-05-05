import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useEpicViewModel } from '@/presentation/viewmodels/useEpicViewModel'
import ClockLoader from '../loaders/ClockLoader'
import ErrorSvg from '../svgs/ErrorSvg'
import RenderImageEpic from './RenderImageEpic'
import RenderDataText from './RenderDataText'
import { ScrollView } from 'react-native-gesture-handler'

const FetchDataOtherDay = () => {
    const { epicDataOtherDate, fetchDataOfflineEpic } = useEpicViewModel();

    if (epicDataOtherDate.loading) return <ClockLoader explain='Conectando a la NASA' />;
    if (epicDataOtherDate.error) return <ErrorSvg description="Es posible que la fecha seleccionada no exista una foto" />;
    if (!epicDataOtherDate.data) return null;

    return (
        <ScrollView style={styles.container}>
            <View>
                <RenderImageEpic data={epicDataOtherDate.data} loading={epicDataOtherDate.loading} error={epicDataOtherDate.error} isNecesary={false} />
            </View>
            <RenderDataText data={epicDataOtherDate.data} loading={epicDataOtherDate.loading} error={epicDataOtherDate.error} isNecesary={false} />
        </ScrollView>
    )
}

export default FetchDataOtherDay

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
    }
})