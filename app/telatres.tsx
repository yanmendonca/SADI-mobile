import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Pressable, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { ClassCard, TutorialsCard, SimulatedExamCard } from '@/components/Cards';
import { SubjectHeader } from '@/components/Headers';
import { router } from 'expo-router';
import Constants from 'expo-constants';

export default function App(): React.JSX.Element {
  const openYouTube = (url: string) => {
    Linking.openURL(url).catch((err) => console.error('Erro ao abrir URL', err));
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: Constants.statusBarHeight }}>
      <SubjectHeader />

      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
        
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Aulas tutoriais</Text>
          <Pressable onPress={() => router.push('./aulas-modal')}>
            <Text style={styles.sectionLink}>Ver todos</Text>
          </Pressable>
        </View>

        <View style={{ paddingLeft: 16 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={() => openYouTube('https://www.youtube.com/watch?v=Dm03CZ5mpNs')}>
              <TutorialsCard
                title="Eletroquímica"
                duration="60 min"
                imageSource={require('@/assets/images/TutorialsThumb/Eletroquimica.jpg')}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openYouTube('https://www.youtube.com/watch?v=zRd8e8uQCgM')}>
              <TutorialsCard
                title="Soluções"
                duration="50 min"
                imageSource={require('@/assets/images/TutorialsThumb/Solquim.jpg')}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openYouTube('https://www.youtube.com/watch?v=5aPH2E9UxhM')}>
              <TutorialsCard
                title="Termoquímica"
                duration="50 min"
                imageSource={require('@/assets/images/TutorialsThumb/TermoquimThumb.jpg')}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openYouTube('https://www.youtube.com/watch?v=VV6_UuhbSxU')}>
              <TutorialsCard
                title="Estequiometria"
                duration="50 min"
                imageSource={require('@/assets/images/TutorialsThumb/Estequiometria.jpg')}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openYouTube('https://www.youtube.com/watch?v=A8J07TaDiDA')}>
              <TutorialsCard
                title="Química Ambiental"
                duration="45 min"
                imageSource={require('@/assets/images/TutorialsThumb/QuimAmb.png')}
              />
            </TouchableOpacity>

          </ScrollView>
        </View>

        <SimulatedExamCard />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#F9FAFB',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2d2d2d',
  },
  sectionLink: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1d4ed8',
  },
});
