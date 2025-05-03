import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useConnectivity } from '@/presentation/hooks/useConnectivity';
import NoWifiSvg from '@/presentation/components/svgs/NoWifiSvg';
import FetchDataOtherDay from '@/presentation/components/epic/FetchDataOtherDay';
import FormEpic from '@/presentation/components/epic/FormEpic';

const SearchImgSunEarthScreen = () => {
  const { isConnected } = useConnectivity();
  return (
    <View style={{ flex: 1 }}>
      {isConnected ? (
        // Cuando esta conectado
        // <ExplainImgOfDay data={todayApod.data} loading={todayApod.loading} error={todayApod.error} isNecesary={true} />

        <View style={{ flex: 1 }}>
          <FormEpic />
          <FetchDataOtherDay />
        </View>
      ) : (
        // Cuando no esta conectado
        <NoWifiSvg description='No tienes wifi, para usar esto...' />
      )}
    </View>
  )
}

export default SearchImgSunEarthScreen

const styles = StyleSheet.create({})