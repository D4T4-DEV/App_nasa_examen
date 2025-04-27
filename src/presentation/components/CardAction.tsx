import { useWindowDimensions } from 'react-native'
import React from 'react'
import { Card, Text } from 'react-native-paper'
import { usePlataform } from '../hooks/usePlataform';

interface CardProps {
    title?: string;
    subtitle?: string;
    textExpl?: string;
    textExpl2?: string;
    onPress: () => void;
}


const CardAction: React.FC<CardProps> = ({ title, subtitle, textExpl, textExpl2, onPress }) => {
    const { width } = useWindowDimensions();
    const { isWeb } = usePlataform();
    return (
        <Card style={{ width: isWeb ? width * 0.35 : width * 0.9 }} onPress={onPress}>
            <Card.Title
                title={title}
                titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
                subtitle={subtitle}
            />
            <Card.Content>
                <Text variant="titleLarge" style={{ fontWeight: '100' }}>{textExpl} </Text>
                <Text variant='bodyMedium'>{textExpl2}</Text>
            </Card.Content>
        </Card>
    )
}

export default CardAction