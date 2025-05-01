import { ImageSourcePropType, StyleSheet, useWindowDimensions, View, Image } from 'react-native'
import React, { useState } from 'react'
import { usePlataform } from '@/presentation/hooks/usePlataform';
import { AnimationProps } from '@/core/interfaces/others/animationProps';
import { RequestState } from '@/core/interfaces/request/RequestState';
import { Epic } from '@/domain/entities/Epic';
import ClockLoader from '../loaders/ClockLoader';
import ErrorSvg from '../svgs/ErrorSvg';
import { dateUtil } from '@/di/container';
const fallbackImage: ImageSourcePropType = require("../../../../assets/no_image.jpg");

type Props = RequestState<Epic> & AnimationProps;

const RenderImageEpic: React.FC<Props> = ({ loading, error, data, isNecesary = false }) => {
  const { isWeb } = usePlataform();
  const { width } = useWindowDimensions();
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  if (loading) return isNecesary ? <ClockLoader explain='Conectando a la NASA' /> : null;
  if (error) return <ErrorSvg description="Ha ocurrido un error al obtener los datos, es posible que no haya datos" />;
  if (!data) return null;

  const { year, month, day } = dateUtil.getComponentsDate(new Date(data.date));

  return (
    <View style={styles.container}>
      <Image
        source={imageError || !data.imageName ? fallbackImage : { uri: `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${data.imageName}.png` }}
        style={{
          width: isWeb ? width * 0.80 : width * 0.9,
          height: isWeb ? width * 0.35 : width * 1
        }}
        onError={() => handleImageError()}
      />
    </View>
  )
}

export default RenderImageEpic

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      flex: 1
  },
  image: {
      width: 400,
      height: 300,
  },
})