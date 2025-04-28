import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FormularioEarth } from '@/presentation/components/earth/formEarth'

const SearchImageScreen = () => {
    return (
        <View style={{flex: 1,}}>
            <FormularioEarth />
        </View>
    )
}

export default SearchImageScreen

const styles = StyleSheet.create({})