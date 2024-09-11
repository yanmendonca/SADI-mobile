import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, SafeAreaView, Text, ScrollView, View } from 'react-native';

import Carousel from 'react-native-reanimated-carousel';

import { CardProgress, CardProgressLinear, CardImage, CardProgressHorizontal } from '@/components/Cards'
import { MainHeader } from '@/components/Headers'
import { Dimensions } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const softSkills = [
    {
      key: 0,
      name: 'Relacionamento',
      img: require('@/assets/images/relacionamento.png')
    },
    {
      key: 1,
      name: 'Foco',
      img: require('@/assets/images/focus.jpg')
    },
    {
      key: 2,
      name: 'Autoconfiança',
      img: require('@/assets/images/autoconfiança.jpg')
    },
    {
      key: 3,
      name: 'Adaptabilidade',
      img: require('@/assets/images/adaptabilidade.jpg')
    },
    {
      key: 4,
      name: 'Originalidade',
      img: require('@/assets/images/originalidade.jpg')
    },
    {
      key: 5,
      name: 'Responsabilidade',
      img: require('@/assets/images/responsabilidade.png')
    },
    {
      key: 6,
      name: 'Integridade',
      img: require('@/assets/images/integridade.jpg')
    },
    {
      key: 7,
      name: 'Comunicação Eficiente',
      img: require('@/assets/images/comunicacao.jpg')
    },
    {
      key: 8,
      name: 'Empatia',
      img: require('@/assets/images/empatia.webp')
    },
    {
      key: 9,
      name: 'Amprendizado Contínuo',
      img: require('@/assets/images/aprendizado.webp')
    },
  ]

  const Simulados = [
    {
      key: 0,
      subject: 'Ciências da Natureza e suas Tecnologias',
      value: 0.67,
      img: require('@/assets/images/TutorialsThumb/nature.jpg')
    },
    {
      key: 1,
      subject: 'Matemática e suas Tecnologias',
      value: 0.40,
      img: require('@/assets/images/TutorialsThumb/math.png')
    },
    {
      key: 2,
      subject: 'Ciências Humanas e suas Tecnologias',
      value: 0.25,
      img: require('@/assets/images/TutorialsThumb/humanities.jpg')
    },
    {
      key: 3,
      subject: 'Linguagens e suas Tecnologias',
      value: 0.6,
      img: require('@/assets/images/TutorialsThumb/languages.png')
    }
  ];

  const bestMatters = [
    {
      matter: 'História',
      value: 0.95
    },
    {
      matter: 'Química',
      value: 0.9
    }
  ]

  const worstMatters = [
    {
      matter: 'Matemática',
      value: 0.65
    },
    {
      matter: 'Português',
      value: 0.55
    }
  ]

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F9FAFB' }}>
      <MainHeader route='Home'/>
      <View style={styles.content}>
        <View style={styles.section1}>
          <CardProgress title='Tensão Emocional' value={0.55} color='#E8F61D'></CardProgress>
          <CardProgress title='Ânimo Baixo' value={0.35}></CardProgress>
          <CardProgress title='Engajamento' value={0.75}></CardProgress>
        </View>

        <View style={[styles.section1]}>
          <CardProgressLinear title='Melhores disciplinas' data={bestMatters} style={{marginRight: 2.5}}></CardProgressLinear>
          <CardProgressLinear title='Piores disciplinas' data={worstMatters} style={{marginLeft: 2.5}} color='red'></CardProgressLinear>
        </View>

        <View style={{ marginTop: 16 }}>
          <Text style={{ fontSize: 20, fontWeight: 900 }}>Soft Skills</Text>
          <View style={{ marginLeft: 10, marginTop: 10 }}>
          <Carousel loop={false}
              width={130}
              height={180}
              style={{ width: windowWidth }}
              data={[...softSkills]}
              renderItem={({ index }) => (
                <CardImage
                  key={softSkills[index].key}
                  title={softSkills[index].name}
                  img={softSkills[index].img}
                />
              )}
            />
          </View>
        </View>

        <View style={{ marginTop: 16 }}>
          <Text style={{ fontSize: 20, fontWeight: 900 }}>Simulados Preparatórios</Text>
          <View style={{ marginTop: 10 }}>
          {Simulados.map(data => (
              <CardProgressHorizontal key={data.key}
              title={data.subject}
              value={data.value}
              img={data.img} 
              route='/learn/SubjectList' 
              color='#94ED6B'/>
            ))}
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
