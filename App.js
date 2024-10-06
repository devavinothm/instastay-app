import { StyleSheet, Text, View } from 'react-native';
import SliderScreen from './src/Auth/Slider';
import AppNavigator from './src/navigation';

export default function App() {
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
