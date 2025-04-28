import { StyleSheet, View, } from 'react-native'
import React from 'react'
import { FormularioEarth } from '@/presentation/components/earth/formEarth'
import { ScrollView } from 'react-native-gesture-handler'
import { useEarthViewModel } from '@/presentation/viewmodels/useEarthViewModel'
import { ImageRenderEarth } from '@/presentation/components/earth/ImgRenderEarth'

const SearchImageScreen = () => {
    const { earthData } = useEarthViewModel();

    return (
        <ScrollView style={styles.container}>
            <FormularioEarth />
            <View style={styles.containerImg}>
                <ImageRenderEarth
                    loading={earthData.loading}
                    error={earthData.error}
                    data={earthData.data}
                    isNecesary={true}
                />
            </View>
        </ScrollView>
    )
}

export default SearchImageScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20
    },
    containerImg: {
        marginTop: 10
    }
})