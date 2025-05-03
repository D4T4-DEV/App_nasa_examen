import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { useConnectivity } from '@/presentation/hooks/useConnectivity'
import NoWifiSvg from '@/presentation/components/svgs/NoWifiSvg'
import { useRoverViewModel } from '@/presentation/viewmodels/useRoverViewModel'
import RenderItemRover from '@/presentation/components/rover/RenderItemRover'
import { ActivityIndicator } from 'react-native-paper'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/navigation/types'
import { useNavigation } from '@react-navigation/native'


const RoverScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const { fetchDataRover, isLoadingMore, noMorePages, roverData } = useRoverViewModel();
    const { isConnected } = useConnectivity();

    // Cargar datos iniciales al montar el componente, solo se ejecuta una vez
    useEffect(() => {
        // Si no hay conexion no ejecuta la pedida de datos
        if (!isConnected) return;
        fetchDataRover();
    }, [isConnected]);

    // funcion que se ejecuta al llegar al final de la lista
    const handleEndReached = () => {
        // Evita hacer peticiones innecesarias si esta cargando 
        // o ya no se tienen mas paginas
        if (!isLoadingMore && !noMorePages) {
            fetchDataRover();
        }
    };

    return (
        <View style={styles.container}>
            {isConnected ?
                (
                    <FlatList
                        keyExtractor={(item) => `${item.id}}`}
                        data={roverData.data}
                        renderItem={({ item }) => <RenderItemRover {...item}
                            onPress={() => {
                                navigation.navigate('ImageModalScreen', { imageUrl: item.imageUrl });
                            }}
                        />}
                        contentContainerStyle={styles.listContent}
                        ItemSeparatorComponent={() => <View style={styles.separator} />}
                        onEndReachedThreshold={0.5} // Limite esperado para cuando se debe disparar el evento
                        onEndReached={handleEndReached} // Cuando se llega al final la funcion que se disparará
                        ListFooterComponent={isLoadingMore ? <ActivityIndicator animating={true} /> : null}
                    />
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
        flex: 1,
    },
    listContent: {
        paddingBottom: 16,
    },
    separator: {
        height: 1,
        marginVertical: 6,
        backgroundColor: '#ccc',
    }
})