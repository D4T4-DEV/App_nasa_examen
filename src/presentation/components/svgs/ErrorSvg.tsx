import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { Text } from 'react-native-paper'

interface ErrorSvgProps {
    color?: string;
    width?: number;
    height?: number;
    description?: string;
}


const ErrorSvg: React.FC<ErrorSvgProps> = ({ width = 100, height = 100, color = "hsl(228, 97%, 42%)", description = 'Error inesperado' }) => {
    return (
        <View style={styles.container}>
            <Svg fill={color} viewBox="0 -960 960 960" width={width} height={height}>
                <Path d='m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z' />
            </Svg>
            <View>
                <Text>{description}</Text>
            </View>
        </View>
    )
}

export default ErrorSvg

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    }
});