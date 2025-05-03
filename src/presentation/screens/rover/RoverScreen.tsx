import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useConnectivity } from '@/presentation/hooks/useConnectivity'
import NoWifiSvg from '@/presentation/components/svgs/NoWifiSvg'

const RoverScreen = () => {

    const { isConnected } = useConnectivity()

    return (
        <View style={styles.container}>
            {
                isConnected ?
                    (
                        <Text>RoverScreen</Text>
                    )
                    :
                    (
                        // Cuando no esta conectado
                        <NoWifiSvg description='No tienes wifi, para usar esto...' />
                    )
            }
        </View>
    )
}

export default RoverScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})