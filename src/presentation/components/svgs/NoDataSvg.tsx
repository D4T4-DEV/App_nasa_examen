import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { Text } from 'react-native-paper'

interface NoDataSvgProps {
    color?: string;
    width?: number;
    height?: number;
    description?: string;
}


const NoDataSvg: React.FC<NoDataSvgProps> = ({ width = 100, height = 100, color = "hsl(228, 97%, 42%)", description = 'Error inesperado' }) => {
    return (
        <View style={styles.container}>
            <Svg fill={color} viewBox="0 -960 960 960" width={width} height={height}>
                <Path d='M320-440h320v-80H320v80Zm0 120h320v-80H320v80Zm0 120h200v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z' />
            </Svg>
            <View>
                <Text>{description}</Text>
            </View>
        </View>
    )
}

export default NoDataSvg

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    }
});