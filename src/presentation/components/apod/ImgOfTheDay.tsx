import React from "react";
import { Apod } from "@/domain/entities/Apod";
import { View, Image, StyleSheet, useWindowDimensions } from "react-native";
import { Text } from 'react-native-paper';
import ClockLoader from "../loaders/ClockLoader";
import ErrorSvg from "../svgs/ErrorSvg";
import { usePlataform } from "../../hooks/usePlataform";
import { RequestState } from "@/core/interfaces/request/RequestState";

export const ImageOfDay: React.FC<RequestState<Apod>> = ({ loading, error, data }) => {

    const { isWeb } = usePlataform();
    const { width } = useWindowDimensions();

    if (loading) return <ClockLoader explain='Conectando a la NASA' />;
    if (error) return <ErrorSvg description="Ha ocurrido un error al obtener los datos" />;
    if (!data) return null;

    return (
        <View style={styles.container}>
            <Text variant="displaySmall" style={styles.title}>{data.title}</Text>
            <Image source={{ uri: data.urlImage }}
                style={{
                    width: isWeb ? width * 0.80 : width * 0.9,
                    height: isWeb ? width * 0.35 : width * 1
                }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1
    },
    title: {
        textAlign: 'center',
        fontWeight: '800',
        marginBottom: 10,
        marginTop: 10
    },
    image: {
        width: 400,
        height: 300,
    },
})