import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useConnectivity } from '@/presentation/hooks/useConnectivity';
import NoWifiSvg from '@/presentation/components/svgs/NoWifiSvg';
import FetchDataToday from '@/presentation/components/epic/FetchDataToday';
import { useTheme } from '@/presentation/hooks/useTheme';
import { AnimatedThemeView } from '@/presentation/components/animated/AnimatedView';

const ImgSunNewScreen = () => {
  const { isConnected } = useConnectivity();

  const { isDarkContext } = useTheme();

  return (
    <AnimatedThemeView
      isDarkMode={isDarkContext}
      lightColor={'#f2f2f2'} // Color default del view
      darkColor={'#0000'}
      style={{ flex: 1 }}
    >
      {isConnected ? (
        // Cuando esta conectado
        <FetchDataToday />
      ) : (
        // Cuando no esta conectado
        <NoWifiSvg description='No tienes wifi, para usar esto...' />
      )}
    </AnimatedThemeView>

  )
}

export default ImgSunNewScreen

const styles = StyleSheet.create({

})