import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { fallbackImage } from "@/core/fallBacks";

const ImageModalScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { imageUrl } = route.params as { imageUrl: string };
    const [imageError, setImageError] = useState(false);

    const imageSource = imageError || !imageUrl
        ? fallbackImage
        : { uri: imageUrl };

    return (
        <View style={styles.modalContainer}>
            <TouchableOpacity
                style={styles.closeButton}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="close" size={28} color='#FFF' />
            </TouchableOpacity>

            <Image
                source={imageSource}
                style={styles.fullImage}
                onError={() => setImageError(true)}
                resizeMode="contain"
            />
        </View>
    );
};

export default ImageModalScreen;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.9)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullImage: {
        width: '90%',
        height: '80%',
    },
    closeButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        zIndex: 1,
        padding: 10,
    },
});
