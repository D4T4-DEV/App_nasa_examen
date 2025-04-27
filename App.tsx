import React from 'react';
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

function AppContent() {
  const {
    paperTheme,
    isDarkContext,
    navigationTheme,
  } = useTheme();

  return (
    <PaperProvider theme={paperTheme}>
      <StatusBar style={isDarkContext ? 'dark' : 'light'} />
      <NavigationContainer linking={linking} theme={navigationTheme}>
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
