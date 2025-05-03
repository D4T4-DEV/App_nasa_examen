import { StyleSheet, View, Image, ActivityIndicator, Button } from 'react-native';
import React, { useEffect } from 'react';
import { useApodViewModel } from '@/presentation/viewmodels/useApodViewModel';
import { useConnectivity } from '../../hooks/useConnectivity';
import NoWifiSvg from '../../components/svgs/NoWifiSvg';
import { ImageRender } from '@/presentation/components/ImageRender';
import { Apod } from '@/domain/entities/Apod';

const ImgTheDay = () => {
  const { todayApod, loadTodayApod } = useApodViewModel();
  const { isConnected } = useConnectivity();

  useEffect(() => {
    if (!isConnected) return;
    loadTodayApod();
  }, [isConnected]);

  return (
    <View style={styles.container}>
      {isConnected ? (
        // cuando esta conectado
        <ImageRender<Apod>
          loading={todayApod.loading}
          error={todayApod.error}
          data={todayApod.data}
          isNecesary={true}
        />
      ) :
        // cuando esta conectado
        (<NoWifiSvg description='No tienes wifi, para usar esto...' />)
      }
    </View>
  );
};

export default ImgTheDay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
