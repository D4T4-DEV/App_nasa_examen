import { AnimationProps } from "@/core/interfaces/others/animationProps";
import { RequestState } from "@/core/interfaces/request/RequestState";
import { useState } from "react";
import { useWindowDimensions, View, Image, StyleSheet, ImageSourcePropType } from "react-native";
import { usePlataform } from "../hooks/usePlataform";
import ClockLoader from "./loaders/ClockLoader";
import ErrorSvg from "./svgs/ErrorSvg";
import { Text } from "react-native-paper";
import { fallbackImage } from "@/core/fallBacks";

interface ImageEntity {
    title?: string;
    urlImage?: string;
}

type Props<T extends ImageEntity> = RequestState<T> & AnimationProps;

export const ImageRender = <T extends ImageEntity>({ loading, error, data, isNecesary = false }: Props<T>) => {
    const { isWeb } = usePlataform();
    const { width } = useWindowDimensions();
    const [imageError, setImageError] = useState(false);

    if (loading) return isNecesary ? <ClockLoader explain='Conectando a la NASA' /> : null;
    if (error) return <ErrorSvg description="Ha ocurrido un error al obtener los datos" />;
    if (!data) return null;

    const imageSource = imageError || !data.urlImage
        ? fallbackImage
        : { uri: data.urlImage };

    return (
        <View style={styles.container}>
            <Text variant="displaySmall" style={styles.title}>{data.title}</Text>
            <Image
                source={imageSource}
                style={{
                    width: isWeb ? width * 0.80 : width * 0.9,
                    height: isWeb ? width * 0.35 : width * 1
                }}
                onError={() => setImageError(true)}
                resizeMode="contain"
                accessibilityLabel={data.title || "Imagen"}
            />
        </View>
    );
};

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