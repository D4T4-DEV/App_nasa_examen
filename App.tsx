import RootNavigator from '@/navigation/RootNavigator';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


function AppContent() {
  return (
    <>
      <StatusBar style='auto' />
      <RootNavigator />
    </>
  );
}

export default function App() {
  return (
    <AppContent />
  );
}