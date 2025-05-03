import React from 'react'
import { StyleSheet, View } from 'react-native'
import ExplainImgOfDay from '../../components/apod/ExplainImgComponent'
import { useApodViewModel } from '../../viewmodels/useApodViewModel';
import { useConnectivity } from '../../hooks/useConnectivity';
import NoWifiSvg from '../../components/svgs/NoWifiSvg';

const ExpImgTheDayScreen = () => {
  const { todayApod } = useApodViewModel();
  const { isConnected } = useConnectivity();

  return (
    <View style={{ flex: 1 }}>
      {isConnected ? (
        // Cuando esta conectado
        <ExplainImgOfDay data={todayApod.data} loading={todayApod.loading} error={todayApod.error} isNecesary={true} />
      ) : (
        // Cuando no esta conectado
        <NoWifiSvg description='No tienes wifi, para usar esto...' />
      )}
    </View>
  )
}

export default ExpImgTheDayScreen

const styles = StyleSheet.create({})