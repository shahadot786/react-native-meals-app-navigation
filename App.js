import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <SafeAreaView>
        <CategoryScreen />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({});
