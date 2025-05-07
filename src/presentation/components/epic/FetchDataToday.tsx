import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useEpicViewModel } from '@/presentation/viewmodels/useEpicViewModel'
import ClockLoader from '../loaders/ClockLoader'
import ErrorSvg from '../svgs/ErrorSvg'
import RenderImageEpic from './RenderImageEpic'
import RenderDataText from './RenderDataText'
import { ScrollView } from 'react-native-gesture-handler'
import { useTheme } from '@/presentation/hooks/useTheme'

const FetchDataToday = () => {
    const { epicData, fetchDataEpic } = useEpicViewModel();
    const { setThemeBasedHour } = useTheme();

    // Estado para poder hacer que no se ejecute de nueva cuenta al cambiar el valor de manera externa
    const [hasSetTheme, setHasSetTheme] = useState(false);

    useEffect(() => {
        fetchDataEpic();
    }, []);

    useEffect(() => {
        if (epicData.data && !hasSetTheme) {
            const hour = new Date(epicData.data.date).getHours();
            // Establecemos el tema en base a la hora pasada
            setThemeBasedHour(hour); 
            // Asegura que no se renderice de nuevo
            setHasSetTheme(true); 
        }
    }, [epicData.data, setThemeBasedHour, hasSetTheme]);

    if (epicData.loading) return <ClockLoader explain='Conectando a la NASA' />;
    if (epicData.error) return <ErrorSvg description="Ha ocurrido un error al obtener los datos" />;
    if (!epicData.data) return null;

    return (
        <ScrollView style={styles.container}>
            <View>
                <RenderImageEpic data={epicData.data} loading={epicData.loading} error={epicData.error} isNecesary={false} />
            </View>
            <RenderDataText data={epicData.data} loading={epicData.loading} error={epicData.error} isNecesary={false} />
        </ScrollView>
    )
}

export default FetchDataToday

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
    }
})