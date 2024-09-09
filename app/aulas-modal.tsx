import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet, Linking, Dimensions } from 'react-native';
import { TutorialsCard } from '@/components/Cards';
import Constants from 'expo-constants';
import { SubjectHeader } from '@/components/Headers';

const aulas = [
  { title: 'Eletroquímica', duration: '60 min', youtubeUrl: 'https://www.youtube.com/watch?v=Dm03CZ5mpNs', image: require('@/assets/images/TutorialsThumb/Eletroquimica.jpg') },
  { title: 'Soluções', duration: '50 min', youtubeUrl: 'https://www.youtube.com/watch?v=zRd8e8uQCgM', image: require('@/assets/images/TutorialsThumb/Solquim.jpg') },
  { title: 'Termoquímica', duration: '50 min', youtubeUrl: 'https://www.youtube.com/watch?v=5aPH2E9UxhM', image: require('@/assets/images/TutorialsThumb/TermoquimThumb.jpg') },
  { title: 'Estequiometria', duration: '50 min', youtubeUrl: 'https://www.youtube.com/watch?v=VV6_UuhbSxU', image: require('@/assets/images/TutorialsThumb/Estequiometria.jpg') },
  { title: 'Química Ambiental', duration: '70 min', youtubeUrl: 'https://www.youtube.com/watch?v=A8J07TaDiDA', image: require('@/assets/images/TutorialsThumb/QuimAmb.png') },
  ];

export default function App(): React.JSX.Element {
  const openYouTube = (url: string) => {
    Linking.openURL(url);
  };

  const screenWidth = Dimensions.get('window').width;
  const cardWidth = screenWidth / 2 - 13;

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: Constants.statusBarHeight }}>
      <SubjectHeader redirectTo="telatres" />

      <Text style={styles.sectionTitle}>Todas as aulas:</Text>

      <ScrollView style={styles.scrollview} contentContainerStyle={[styles.gridContainer]}>
        {aulas.map((aula, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => openYouTube(aula.youtubeUrl)} 
            style={[styles.card, { width: cardWidth }]}
          >
            <TutorialsCard title={aula.title} duration={aula.duration} imageSource={aula.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    backgroundColor: '#F9FAFB',
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: '700',
    color: '#2d2d2d',
    marginBottom: 10,
  },
  scrollview: {
    backgroundColor: '#F9FAFB',
    flex: 1, 
    paddingLeft: 1,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Mantém o espaçamento adequado entre as colunas
    padding: 3,
  },
  card: {
    marginBottom: 10, // Espaçamento entre as linhas
    height: 130,
  },
});
