import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Modal() {
  return (
    <View style={styles.container}>
      <Text>Teste</Text>
      <Link replace href={'/home/'} style={{backgroundColor: 'red', width: 100, height: 50}}>
      Ir para Home
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});