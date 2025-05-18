import React, { useEffect } from 'react';
import RootNavigator from '@/navigation/RootNavigator';
import { StyleSheet } from 'react-native';
import { linking } from '@/navigation/linking';
import { useTheme } from '@/presentation/hooks/useTheme';
import { store } from '@/store/store';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { useConnectivity } from '@/presentation/hooks/useConnectivity';
import { useNavigationState } from '@/presentation/hooks/useNavigationState';
import ClockLoader from '@/presentation/components/loaders/ClockLoader';

function AppContent() {
  const {
    paperTheme,
    isDarkContext,
    navigationTheme,
  } = useTheme();

  const {
    isConnected,
    connectionType
  } = useConnectivity();

  const {
    initialStateNavigation,
    isReady,
    saveStateNavigation,
    loadStateNavigation,
    clearStateNavigation,
  } = useNavigationState();

  useEffect(() => {
    loadStateNavigation();
  }, []);

  if (!isReady) return <ClockLoader explain='Cargando...'/>;

  return (
    <PaperProvider theme={paperTheme}>
      <StatusBar style={isDarkContext ? 'light' : 'dark'} />
      <NavigationContainer
        initialState={initialStateNavigation ?? undefined}
        linking={linking}
        theme={navigationTheme}
        onStateChange={(state) => {
          // Guardamos el estado si esta disponible
          if (state) saveStateNavigation(state);
        }}
      >
        <RootNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={styles.container}>
        <AppContent />
      </GestureHandlerRootView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
