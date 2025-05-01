import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useConnectivity } from '@/presentation/hooks/useConnectivity';
import NoWifiSvg from '@/presentation/components/svgs/NoWifiSvg';
import FetchDataToday from '@/presentation/components/epic/FetchDataToday';

const ImgSunNewScreen = () => {
  const { isConnected } = useConnectivity();

  return (
    <View style={{ flex: 1 }}>
      {isConnected ? (
        // Cuando esta conectado
        // <ExplainImgOfDay data={todayApod.data} loading={todayApod.loading} error={todayApod.error} isNecesary={true} />
        <FetchDataToday />
      ) : (
        // Cuando no esta conectado
        <NoWifiSvg description='No tienes wifi, para usar esto...' />
      )}
    </View>
  )
}

export default ImgSunNewScreen

const styles = StyleSheet.create({

})