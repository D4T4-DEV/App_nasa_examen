import React, { useState } from "react";
import { View, Image, StyleSheet, ImageSourcePropType } from "react-native";
import { AnimationProps } from "@/core/interfaces/others/animationProps";
import { Rover } from "@/domain/entities/Rover";
const fallbackImage: ImageSourcePropType = require("../../../../assets/no_image.jpg");

type Props = Partial<Rover> & AnimationProps;

export const ImageRenderRover: React.FC<Props> = React.memo(({ imageUrl, isNecesary = false }) => {

    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <View style={styles.container}>
            <Image
                source={imageError || !imageUrl ? fallbackImage : { uri: imageUrl }}
                style={{
                    width: '100%',
                    height: '100%'
                }}
                onError={() => handleImageError()}
            />

        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1
    },
})