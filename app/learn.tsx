import { StyleSheet, Text, View } from 'react-native';
import { MainHeader } from '@/components/Headers'
import Question from '@/screens/question'

export default function Modal() {
  return (
    // <View style={styles.body}>
    //   <MainHeader route='Aprender'/>
    //   <View style={styles.container}>
    //     <Text>Aprender</Text>
    //   </View>
    // </View>
    <Question/>
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