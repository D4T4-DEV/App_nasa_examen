import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { Text } from 'react-native-paper'

interface NoWifiSvgProps {
    color?: string;
    width?: number;
    height?: number;
    description?: string;
}


const NoWifiSvg: React.FC<NoWifiSvgProps> = ({ width = 100, height = 100, color = "hsl(228, 97%, 42%)", description = 'Error inesperado' }) => {
    return (
        <View style={styles.container}>
            <Svg fill={color} viewBox="0 -960 960 960" width={width} height={height}>
                <Path d='M790-56 414-434q-47 11-87.5 33T254-346l-84-86q32-32 69-56t79-42l-90-90q-41 21-76.5 46.5T84-516L0-602q32-32 66.5-57.5T140-708l-84-84 56-56 736 736-58 56Zm-310-64q-42 0-71-29.5T380-220q0-42 29-71t71-29q42 0 71 29t29 71q0 41-29 70.5T480-120Zm236-238-29-29-29-29-144-144q81 8 151.5 41T790-432l-74 74Zm160-158q-77-77-178.5-120.5T480-680q-21 0-40.5 1.5T400-674L298-776q44-12 89.5-18t92.5-6q142 0 265 53t215 145l-84 86Z' />
            </Svg>
            <View>
                <Text>{description}</Text>
            </View>
        </View>
    )
}

export default NoWifiSvg

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    }
});