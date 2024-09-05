import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, SafeAreaView, Text, ScrollView, View} from 'react-native';

import Carousel from 'react-native-reanimated-carousel';

import { CardProgress, CardImage, CardProgressHorizontal } from '@/components/Cards'
import {Dimensions} from 'react-native';


export default function Subject() {
  const windowWidth = Dimensions.get('window').width;
  console.log(windowWidth-20)
  const windowHeight = Dimensions.get('window').height;


  return (
    <SafeAreaView style={{flex:1, justifyContent: 'center', backgroundColor: '#F9FAFB'}}>
      <ScrollView style={styles.content}>
        <View style={styles.section1}>
          <CardProgress title='Tensão Emocional' value={0.55} color='#E8F61D'></CardProgress>
          <CardProgress title='Ânimo Baixo' value={0.35}></CardProgress>
          <CardProgress title='Engajamento' value={0.75}></CardProgress>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  content: {
    marginLeft: 10, 
    marginRight: 10
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  section1: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 16
  }
});
