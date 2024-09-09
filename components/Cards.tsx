import Ionicons from '@expo/vector-icons/Ionicons';
import { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity, useColorScheme, View, Text, Image, ImageBackground, ImageSourcePropType, ScrollView, Pressable } from 'react-native';
import { Circle, Svg } from "react-native-svg"
import * as Progress from 'react-native-progress';
import { router } from 'expo-router'

interface ClassCardProps {
  title: string;
  duration: string;
  imageSource: ImageSourcePropType;
  status: 'done' | 'available';
}

interface TutorialsCardProps {
  title: string;
  duration: string;
  imageSource: ImageSourcePropType;
}

export function CardProgress({
  height = 150,
  width = 110,
  title = "Title",
  value = 0.5,
  color = 'blue'
}) {
  
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';
  const styles = StyleSheet.create({
    card: {
      height: height,
      width: width,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#E5E7EB',
      backgroundColor: '#FFFFFF'
    },
    title: {
      width: 95,
      height: 34,
      position: 'absolute',
      top: 14,
      left: 15,
      fontWeight: 'bold',
      fontSize: 14
    },
    progress: {
      alignItems: 'center',
      top: 64
    },
    progressText: {
      left: '30%',
      fontSize: 24,
      fontWeight: '900',
      color: 'black'
    }
  });
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Progress.Circle
        progress={value}
        style={styles.progress}
        size={70}
        showsText={true}
        textStyle={styles.progressText}
        thickness={4}
        color={color}
        unfilledColor={'#BBBBBB'}
        borderWidth={0}
        animated={false}
      />
    </View>
  );
}

export function CardImage({
  height = 180,
  width = 120,
  title = 'Title',
  img = require('@/assets/images/focus.jpg')
}) {

  const styles = StyleSheet.create({
    card: {
      height: height,
      width: width,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#E5E7EB',
      backgroundColor: '#FFFFFF'
    },
    title: {
      fontWeight: 'bold',
      fontSize: 14,
      textAlign: 'center',
    },
    titleField: {
      flex: 1,
      borderBottomRightRadius: 11,
      borderBottomLeftRadius: 11,
      justifyContent: 'center',
      padding: 2
    }
  });
  return (
    <View style={styles.card}>
      <Image
        style={{ width: 'auto', height: 120, borderTopLeftRadius: 11, borderTopRightRadius: 11 }}
        source={img}
      />
      <View style={styles.titleField}>
        <Text style={styles.title}>{title}</Text>
      </View>

    </View>
  )
}

export function CardProgressHorizontal({
  height = 85,
  width = 'auto',
  title = "Title",
  value = 0.5,
  color = 'blue',
  img = require('@/assets/images/focus.jpg'),
  style = {},
  route = '/'
}) {

  const styles = StyleSheet.create({
    card: {
      flexDirection: 'row',
      height: height,
      // width: width,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#E5E7EB',
      backgroundColor: '#FFFFFF'
    },
    title: {
      fontWeight: 'bold',
      fontSize: 16,
      padding: 10,
    },
    progress: {
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 10,
    },
    progressText: {
      top: '35%',
      left: '8%',
      fontSize: 16,
      fontWeight: '600',
      color: 'black'
    },
    titleField: {
      flex: 1,
      justifyContent: 'center'
    }
  });
  return (
    <TouchableOpacity style={[style, {marginBottom: 5}]} onPress={()=> router.push(route)}>
      <View style={styles.card}>
        <Progress.Circle
          progress={value}
          style={styles.progress}
          size={50}
          showsText={true}
          textStyle={styles.progressText}
          thickness={4}
          color={color}
          unfilledColor={'#BBBBBB'}
          borderWidth={0}
          animated={false}
        />
        <View style={styles.titleField}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Image
          style={{ width: (height - 2), height: (height - 2), borderBottomRightRadius: 11, borderTopRightRadius: 11 }}
          source={img}
        />
      </View>
    </TouchableOpacity>
  );
}

export const TutorialsCard: React.FC<TutorialsCardProps> = ({ title, duration, imageSource }) => {
  return (
    <View style={styles.tutCardContainer}>
      <ImageBackground source={imageSource} style={styles.thumbnail} imageStyle={{ borderRadius: 20 }}>
      </ImageBackground>
    </View>
  );
};

export const ClassCard: React.FC<ClassCardProps> = ({ title, duration, imageSource, status }) => {
  if (status === 'done') {
    return (
      <View style={styles.classCardContainer}>
        <View style={styles.cardBackground}>
          <View style={styles.imageWrapper}>
            <ImageBackground source={imageSource} style={styles.image} />
          </View>
          <View style={styles.iconWrapper}>
            <View style={styles.iconBackground}>
              <Ionicons name="checkmark-outline" color="#FFFF" size={20} style={styles.iconImageAvailable} />
            </View>
            <View style={styles.iconOverlay} />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.durationText}>{duration}</Text>
          </View>
        </View>
      </View>
    );
  } else if (status === 'available') {
    return (
      <View style={styles.availableCardContainer}>
        <View style={styles.cardBackground}>
          <View style={styles.imageWrapper}>
            <ImageBackground source={imageSource} style={styles.image} />
          </View>
          <View style={styles.iconWrapperAvailable}>
            <View style={styles.iconBackgroundAvailable}>
              <Ionicons name="arrow-forward-outline" size={20} style={styles.iconImageAvailable} />
            </View>
            <View style={styles.iconOverlayAvailable} />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.durationText}>{duration}</Text>
          </View>
        </View>
      </View>
    );
  }
  return null;
};

export const SimulatedExamCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.sectionTitle}>Simulados</Text>
        <Pressable onPress={() => {  }}>
          <Text style={styles.sectionLink}>Ver todos</Text>
        </Pressable>
      </View>

      <View style={styles.classCardsWrapper}>
        <ClassCard
          title="Química Orgânica"
          duration="60 min"
          imageSource={require('@/assets/images/TutorialsThumb/QuimOrg.jpg')}
          status="done"
        />
        <ClassCard
          title="Química Geral"
          duration="100 min"
          imageSource={require('@/assets/images/TutorialsThumb/QuimGer.jpg')}
          status="available"
        />
        <ClassCard
          title="Eletroquímica"
          duration="50 min"
          imageSource={require('@/assets/images/TutorialsThumb/Eletroquim.jpg')}
          status="available"
        />
        <ClassCard
          title="Termoquímica"
          duration="70 min"
          imageSource={require('@/assets/images/TutorialsThumb/Termoquim.jpg')}
          status="available"
        />
        <ClassCard
          title="Estequiometria"
          duration="100 min"
          imageSource={require('@/assets/images/TutorialsThumb/Estequiom.jpg')}
          status="available"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    width: '22.86%',
    height: '80%',
    position: 'absolute',
    top: '10%',
    left: '2.57%',
    borderRadius: 12,
    zIndex: 1,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
  },
  iconWrapper: {
    width: '11.43%',
    height: 40,
    position: 'absolute',
    top: '50%',
    left: '80.86%',
    zIndex: 6,
    transform: [{ translateY: -20 }],
  },
  iconWrapperAvailable: {
    width: '11.43%',
    height: 40,
    position: 'absolute',
    top: '50%',
    left: '80.86%',
    zIndex: 6,
    transform: [{ translateY: -20 }],
  },
  iconBackground: {
    width: 23.177,
    height: 24,
    position: 'relative',
    zIndex: 8,
    marginTop: 8,
    marginLeft: 7.726,
  },
  iconBackgroundAvailable: {
    width: 23.177,
    height: 24,
    position: 'relative',
    zIndex: 8,
    marginTop: 8,
    marginLeft: 7.726,
  },
  iconImage: {
    width: 18,
    height: 18,
    position: 'relative',
    zIndex: 9,
    marginTop: 2,
    marginLeft: 2,
  },
  iconImageAvailable: {
    width: 18,
    height: 18,
    position: 'relative',
    zIndex: 9,
    marginTop: 2,
    marginLeft: 2,
  },
  iconOverlay: {
    width: '100%',
    height: '100%',
    backgroundColor: '#4ca772',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#b3b3b3',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 7,
  },
  iconOverlayAvailable: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#afafaf',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 7,
  },
  textWrapper: {
    width: '42.86%',
    height: '35.62%',
    position: 'absolute',
    top: '32%',
    left: '31.71%',
    zIndex: 3,
  },
  titleText: {
    height: 19,
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19,
    color: '#000000',
    textAlign: 'left',
    zIndex: 5,
  },
  durationText: {
    height: 15,
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.523,
    color: '#000000',
    textAlign: 'left',
    zIndex: 4,
    marginTop: 0.2,
  },

  tutCardContainer: {
    width: 208,
    height: 140,
    borderRadius: 20,
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  textOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  duration: {
    color: '#fff',
    fontSize: 12,
  },
  

  cardContainer: {
    width: '95%',
    marginVertical: 20,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d4d4d4',
    alignSelf: 'center',
  },
  availableCardContainer: {
    width: 338,
    height: 96,
    position: 'relative',
    marginTop: 8,
    marginRight: 'auto',
    marginBottom: 8,
    marginLeft: 'auto',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
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
  classCardsWrapper: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  classCardContainer: {
    width: 338,
    height: 96,
    position: 'relative',
    marginTop: 8,
    marginRight: 'auto',
    marginBottom: 8,
    marginLeft: 'auto',  
  },
  cardBackground: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#afafaf',
    position: 'absolute',
    top: 0,
    left: 0,
  },
});