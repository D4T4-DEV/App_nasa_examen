import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming } from "react-native-reanimated";
import { Text } from "react-native-paper";

interface ClockLoaderProps {
    width?: number;
    height?: number;
    color?: string;
    explain?: string;
}

const ClockLoader: React.FC<ClockLoaderProps> = ({ width = 100, height = 100, color = "hsl(228, 97%, 42%)", explain = 'Estoy haciendo algo' }) => {
    const rotation1 = useSharedValue(0); // Aguja de horas
    const rotation2 = useSharedValue(0); // Aguja de minutos

    React.useEffect(() => {
        rotation1.value = withRepeat(withTiming(360, { duration: 9000 }), -1);
        rotation2.value = withRepeat(withTiming(360, { duration: 1000 }), -1);
    }, []);

    const animatedStyle1 = useAnimatedStyle(() => ({
        transform: [{ rotate: `${rotation1.value}deg` }],
    }));

    const animatedStyle2 = useAnimatedStyle(() => ({
        transform: [{ rotate: `${rotation2.value}deg` }],
    }));

    return (
        <View style={styles.container}>
            <Svg fill={color} viewBox="0 0 24 24" width={width} height={height}>
                {/* Círculo del reloj */}
                <Path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" />

                {/* Aguja horaria */}
                <Animated.View style={[{ position: "absolute", left: 0, top: 0 }, animatedStyle1]}>
                    <Svg viewBox="0 0 24 24" width={width} height={height}>
                        <Rect x="11" y="6" rx="1" width="2" height="7" fill={color} />
                    </Svg>
                </Animated.View>

                {/* Aguja de los minutos */}
                <Animated.View style={[{ position: "absolute", left: 0, top: 0 }, animatedStyle2]}>
                    <Svg viewBox="0 0 24 24" width={width} height={height}>
                        <Rect x="11" y="11" rx="1" width="2" height="9" fill={color} />
                    </Svg>
                </Animated.View>
            </Svg>

            <View>
                <Text>{explain}</Text>
            </View>
        </View>
    );
};

export default ClockLoader;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    }
});