import { linking } from '@/navigation/linking';
import RootNavigator from '@/navigation/RootNavigator';
import { useTheme } from '@/presentation/hooks/useTheme';
import { store } from '@/store/store';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
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
      <AppContent />
    </Provider>
  );
}