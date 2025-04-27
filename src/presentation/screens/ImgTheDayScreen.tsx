import { StyleSheet, View, Image, ActivityIndicator, Button } from 'react-native';
import { Text } from 'react-native-paper';
import React, { useEffect } from 'react';
import { useApodViewModel } from '@/presentation/viewmodels/useApodViewModel';
import { ImageOfDay } from '../components/apod/ImgOfTheDay';

const ImgTheDay = () => {
  const { todayApod, loadTodayApod } = useApodViewModel();

  useEffect(() => {
    loadTodayApod();
  }, []);

  return (
    <View style={styles.container}>
      <ImageOfDay
        loading={todayApod.loading}
        error={todayApod.error}
        data={todayApod.data}
      />
    </View>
  );
};

export default ImgTheDay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
