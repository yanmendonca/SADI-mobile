import React, { useState, useRef } from 'react';
import { SafeAreaView, ScrollView, View, Text, Pressable, StyleSheet, TouchableOpacity, Linking, Button, Modal, Animated } from 'react-native';
import { ClassCard, TutorialsCard } from '@/components/Cards';
import { SubjectHeader } from '@/components/Headers';
import { Video, ResizeMode } from 'expo-av';
import { Href, router } from 'expo-router';
import Constants from 'expo-constants';
import { videos } from '@/assets/index'

export default function App(): React.JSX.Element {
  const videoRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVideo, setModalVideo] = useState(undefined);

  const openYouTube = (url: string) => {
    Linking.openURL(url).catch((err) => console.error('Erro ao abrir URL', err));
  };

  const openLocalVideo = (video_path: any) => {
    setModalVisible(true);
    setModalVideo(video_path)
  };

  const closeModal = () => {
    setModalVisible(false);
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
            
            <TouchableOpacity onPress={()=> openLocalVideo(videos.learn.video1)}>
              <TutorialsCard
                title="Eletroquímica"
                duration="60 min"
                imageSource={require('@/assets/images/TutorialsThumb/Eletroquimica.jpg')}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openLocalVideo(videos.learn.video2)}>
              <TutorialsCard
                title="Soluções"
                duration="50 min"
                imageSource={require('@/assets/images/TutorialsThumb/Solquim.jpg')}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openLocalVideo(videos.learn.video3)}>
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

        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <Video
              ref={videoRef}
              style={styles.video}
              source={modalVideo}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
              isLooping
            />
            <Button title="Fechar" onPress={closeModal} />
          </View>
        </Modal>

      </ScrollView>
    </SafeAreaView>
  );
}
type cardDataProp = {
  title: string;
  duration: string;
  image: any;
  status: string;
  route: any
}
const cardData:cardDataProp[] = [
  { title: "Química Geral", duration: "25 min", image: require('@/assets/images/TutorialsThumb/QuimGer.jpg'), status: "available", route: "/learn/all/question" },
  { title: "Química Orgânica", duration: "6 min", image: require('@/assets/images/TutorialsThumb/QuimOrg.jpg'), status: "done", route: "/learn/Química_Orgânica/question" },
  { title: "Eletroquímica", duration: "5 min", image: require('@/assets/images/TutorialsThumb/Eletroquim.jpg'), status: "available", route: "/learn/Eletroquímica/question" },
  { title: "Termoquímica", duration: "7 min", image: require('@/assets/images/TutorialsThumb/Termoquim.jpg'), status: "available", route: "/learn/Termoquímica/question" },
  { title: "Estequiometria", duration: "7 min", image: require('@/assets/images/TutorialsThumb/Estequiom.jpg'), status: "available", route: "/learn/Estequiometria/question" },
];

export const SimulatedExamCard = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const animatedValues = useRef(cardData.map(() => new Animated.Value(1))).current;
  const opacityValues = useRef(cardData.map(() => new Animated.Value(1))).current;

  const handlePressIn = (index: number) => {
    setActiveCardIndex(index);
    Animated.parallel([
      Animated.spring(animatedValues[index], {
        toValue: 0.95,
        useNativeDriver: true,
      }),
      Animated.timing(opacityValues[index], {
        toValue: 0.6,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handlePressOut = (index: number) => {
    Animated.parallel([
      Animated.spring(animatedValues[index], {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(opacityValues[index], {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setActiveCardIndex(null);
    });
  };

  const handlePress = (route: Href<string>) => {
    if (route) {
      router.push(route);
    }
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.sectionTitle}>Simulados</Text>
        <Pressable onPress={() => {}}>
          <Text style={styles.sectionLink}>Ver todos</Text>
        </Pressable>
      </View>

      <View style={styles.classCardsWrapper}>
        {cardData.map((card, index) => (
          <Animated.View 
            key={index} 
            style={[
              { transform: [{ scale: animatedValues[index] }], opacity: opacityValues[index] }
            ]}
          >
            <Pressable
              onPressIn={() => handlePressIn(index)}
              onPressOut={() => handlePressOut(index)}
              onPress={() => handlePress(card.route)}
            >
              <ClassCard
                title={card.title}
                duration={card.duration}
                imageSource={card.image}
                status={card.status as "available" | "done"}
              />
            </Pressable>
          </Animated.View>
        ))}
      </View>
    </View>
  );
};

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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  video: {
    width: '90%',
    height: 200,
  },
  cardContainer: {
    marginVertical: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  classCardsWrapper: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
