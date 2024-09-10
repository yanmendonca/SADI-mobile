import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, SafeAreaView, Text, ScrollView, View } from 'react-native';

import Carousel from 'react-native-reanimated-carousel';

import { CardProgress, CardImage, CardProgressHorizontal } from '@/components/Cards'
import { MainHeader } from '@/components/Headers'
import { Dimensions } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const softSkills = [
    {
      key: 0,
      name: 'Relacionamento'
    },
    {
      key: 0,
      name: 'Foco'
    },
    {
      key: 0,
      name: 'Autoconfiança'
    },
    {
      key: 0,
      name: 'Adaptabilidade'
    }
  ]

  const Simulados = [
    {
      key: 0,
      subject: 'Ciências da Natureza e suas Tecnologias',
      value: 0.67
    },
    {
      key: 1,
      subject: 'Matemática e suas Tecnologias',
      value: 0.40
    },
    {
      key: 2,
      subject: 'Ciências Humanas e suas Tecnologias',
      value: 0.25
    },
    {
      key: 3,
      subject: 'Linguagens e suas Tecnologias',
      value: 0.6
    },
  ]

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F9FAFB' }}>
      <MainHeader route='Aprender'/>
      <View style={styles.content}>
        

        <View style={{ marginTop: 16 }}>
          <Text style={{ fontSize: 20, fontWeight: 900 }}>Simulados Preparatórios</Text>
          <View style={{ marginTop: 10 }}>
            {Simulados.map(data => (
              <CardProgressHorizontal key={data.key} title={data.subject} value={data.value} route='/learn/SubjectList' color='#94ED6B'/>
            ))}
          </View>
        </View>
        <View style={{ marginTop: 16 }}>
          <Text style={{ fontSize: 20, fontWeight: 900 }}>Técnicas de Estudo</Text>
          <View style={{ marginLeft: 10, marginTop: 10 }}>
            <Carousel loop={false}
              width={130}
              height={180}
              style={{ width: windowWidth }}
              data={[...softSkills]}
              renderItem={({ index }) => (
                <CardImage key={softSkills[index].key} title={softSkills[index].name} />
              )}
            />
          </View>
        </View>
      </View>
    </ScrollView>
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
