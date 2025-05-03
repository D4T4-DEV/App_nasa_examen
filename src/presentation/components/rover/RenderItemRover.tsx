import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { Rover } from '@/domain/entities/Rover'
import { Card } from 'react-native-paper';
import { Pressable } from 'react-native';
import { ImageRenderRover } from './ImageRenderRover';

interface RenderItemProps {
  onPress?: () => void;
}

type Props = Partial<Rover> & RenderItemProps;

const RenderItemRover: React.FC<Props> = React.memo(({
  id,
  sol,
  cameraName,
  nameRover,
  photoDateEarth,
  imageUrl,
  onPress
}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.cardCover}>
        <ImageRenderRover imageUrl={imageUrl} isNecesary={false} />
      </View>
      <Card.Title title={nameRover} subtitle={photoDateEarth} />
    </Pressable>
  )
});

export default RenderItemRover

const styles = StyleSheet.create({
  cardCover: {
    width: '100%',
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  }
});