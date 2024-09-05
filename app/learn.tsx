import { StyleSheet, Text, View } from 'react-native';

export default function Modal() {
  return (
    <View style={styles.container}>
      <Text>Aprender</Text>
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