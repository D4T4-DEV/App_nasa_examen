import { StyleSheet, View, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { useNeowsViewModel } from '@/presentation/viewmodels/useNeowsViewModel';
import RenderItemNeows from '@/presentation/components/neows/RenderItemNeows';
import { ActivityIndicator } from 'react-native-paper';
import { useConnectivity } from '@/presentation/hooks/useConnectivity';
import NoWifiSvg from '@/presentation/components/svgs/NoWifiSvg';

const NeowsScreen = () => {
    const { fetchDataNeows, neowsData, isLoadingMore, noMorePages } = useNeowsViewModel();
    const { isConnected } = useConnectivity()


    // Cargar datos iniciales al montar el componente, solo se ejecuta una vez
    useEffect(() => {
        // Si no hay conexion no ejecuta la pedida de datos
        if (!isConnected) return;
        fetchDataNeows();
    }, [isConnected]);

    // funcion que se ejecuta al llegar al final de la lista
    const handleEndReached = () => {
        // Evita hacer peticiones innecesarias si esta cargando 
        // o ya no se tienen mas paginas
        if (!isLoadingMore && !noMorePages) {
            fetchDataNeows();
        }
    };

    return (
        <View style={styles.container}>
            {isConnected ? (
                <FlatList
                    keyExtractor={(item) => `${item.id}}`}
                    data={neowsData.data}
                    renderItem={({ item }) => <RenderItemNeows {...item} />}
                    contentContainerStyle={styles.listContent}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    onEndReachedThreshold={0.5} // Limite esperado para cuando se debe disparar el evento
                    onEndReached={handleEndReached} // Cuando se llega al final la funcion que se disparará
                    ListFooterComponent={isLoadingMore ? <ActivityIndicator animating={true} /> : null}
                />)
                :
                (
                    // Cuando no esta conectado
                    <NoWifiSvg description='No tienes wifi, para usar esto...' />
                )
            }
        </View>
    );
};

export default NeowsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    listContent: {
        paddingBottom: 16,
    },
    separator: {
        height: 1,
        marginVertical: 6,
        backgroundColor: '#ccc',
    }
});
