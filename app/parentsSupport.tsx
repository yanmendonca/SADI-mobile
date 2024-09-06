import { StyleSheet, Text, View } from 'react-native';
import { MainHeader } from '@/components/Headers'

export default function Modal() {
  return (
    <View style={styles.body}>
      <MainHeader route='Suporte para Pais'/>
      <View style={styles.container}>
        <Text>Suporte para Pais</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: { 
    flex: 1, 
    backgroundColor: '#F9FAFB' 

  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});