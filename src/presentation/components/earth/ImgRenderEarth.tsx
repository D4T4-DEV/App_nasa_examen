import React, { useState } from "react";
import { View, Image, StyleSheet, useWindowDimensions, ImageSourcePropType } from "react-native";
import { Text } from 'react-native-paper';
import ClockLoader from "../loaders/ClockLoader";
import ErrorSvg from "../svgs/ErrorSvg";
import { usePlataform } from "../../hooks/usePlataform";
import { RequestState } from "@/core/interfaces/request/RequestState";
import { AnimationProps } from "@/core/interfaces/others/animationProps";
import { Earth } from "@/domain/entities/Earth";
const fallbackImage: ImageSourcePropType = require("../../../../assets/no_image.jpg");

type Props = RequestState<Earth> & AnimationProps;

export const ImageRenderEarth: React.FC<Props> = ({ loading, error, data, isNecesary = false }) => {

    const { isWeb } = usePlataform();
    const { width } = useWindowDimensions();
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    if (loading) return isNecesary ? <ClockLoader explain='Conectando a la NASA' /> : null;
    if (error) return <ErrorSvg description="Ha ocurrido un error al obtener los datos, es posible que no haya datos" />;
    if (!data) return null;

    const fecha = new Date(data.date);

    return (
        <View style={styles.container}>
            <Text variant='displaySmall' style={styles.title}>{fecha.toDateString()}</Text>
            <Image
                source={imageError || !data.imageUrl ? fallbackImage : { uri: data.imageUrl }}
                style={{
                    width: isWeb ? width * 0.80 : width * 0.9,
                    height: isWeb ? width * 0.35 : width * 1
                }}
                onError={() => handleImageError()}
            />

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