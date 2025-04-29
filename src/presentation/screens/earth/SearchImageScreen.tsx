import { StyleSheet, View, } from 'react-native'
import React from 'react'
import { FormularioEarth } from '@/presentation/components/earth/formEarth'
import { ScrollView } from 'react-native-gesture-handler'
import { useEarthViewModel } from '@/presentation/viewmodels/useEarthViewModel'
import { ImageRenderEarth } from '@/presentation/components/earth/ImgRenderEarth'
import { useConnectivity } from '@/presentation/hooks/useConnectivity'
import NoWifiSvg from '@/presentation/components/svgs/NoWifiSvg'

const SearchImageScreen = () => {
    const { earthData } = useEarthViewModel();
    const { isConnected } = useConnectivity();

    return (
        <View style={isConnected ? { flex: 1 } : styles.container}>
            {isConnected ? (
                <ScrollView style={styles.containerScroll}>
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
            ) : (
                <View style={styles.containerImg}>
                    <NoWifiSvg description="No tienes internet para usar este recurso" />
                </View>
            )}
        </View>
    )

}

export default SearchImageScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    containerScroll: {
        flex: 1,
        gap: 20
    },
    containerImg: {
        marginTop: 10
    }
})