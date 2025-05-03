import { StyleSheet, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/navigation/types'
import { cardActionsConfig } from '@/core/card_actions';

// React native paper
import CardAction from '../components/CardAction';
import { FlatList } from 'react-native-gesture-handler';

type PropsRoute = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: PropsRoute) => {
    return (
        <>
            <FlatList
                style={styles.containerFlatList}
                contentContainerStyle={styles.contentContainer}
                data={cardActionsConfig}
                renderItem={({ item, index }) => (
                    <CardAction
                        key={index}
                        title={item.title}
                        subtitle={item.subtitle}
                        textExpl={item.textExpl}
                        textExpl2={item.textExpl2}
                        onPress={() => navigation.navigate(item.routeName)}
                    />
                )}
                keyExtractor={item => item.routeName}
            />
        </>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    containerFlatList: {
        flex: 1,
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        margin: 12,
        paddingBottom: 20
    },
});
