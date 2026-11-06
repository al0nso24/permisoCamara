import { StyleSheet, View } from 'react-native';
import CameraScreen from './src/components/CameraScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <CameraScreen></CameraScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
