import Ionicons from '@expo/vector-icons/Ionicons';
import React, { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity, useColorScheme, View, Text, Image, ImageBackground, ImageSourcePropType, ScrollView, Pressable, ViewStyle, DimensionValue, SafeAreaView } from 'react-native';
import { Circle, Svg } from "react-native-svg"
import * as Progress from 'react-native-progress';
import { Href, router } from 'expo-router'
import { Float } from 'react-native/Libraries/Types/CodegenTypes';

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

interface CardProgressProps {
  title?: string;
  value?: number;
  color?: string;
  height?: DimensionValue;
  width?: DimensionValue;
  style?: ViewStyle;
}
interface CardProgressLinearDataProps {
  matter: string;
  value: Float;
}

interface CardProgressLinearProps {
  title?: string;
  color?: string;
  data?: CardProgressLinearDataProps[];
  height?: DimensionValue;
  width?: DimensionValue;
  style?: ViewStyle;
  fill?: boolean;
  gap?: number;
}

interface CardProgressHorizontalProps {
  title?: string;
  value?: number;
  color?: string;
  height?: number;
  style?: ViewStyle;
  img?: NodeRequire;
  route?: Href<string>;
}

interface CardImageProps {
  title?: string;
  height?: DimensionValue;
  width?: DimensionValue;
  img?: NodeRequire;
}

export const CardProgress: React.FC<CardProgressProps> = ({
  title = "Title",
  value = 0.5,
  color = 'blue',
  height = 150,
  width = 110,
  style = {}
}) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';
  const styles = StyleSheet.create({
    card: {
      height: height,
      width: width,
      borderRadius: 12,
      borderWidth: 1,
      padding:15,
      borderColor: '#E5E7EB',
      backgroundColor: '#FFFFFF'
    },
    title: {
      width: '120%',
      height: 34,
      fontWeight: 'bold',
      fontSize: 14,
    },
    progress: {
      alignItems: 'center',
      marginTop: 15
    },
    progressText: {
      left: '10%',
      fontSize: 24,
      fontWeight: '900',
      color: 'black'
    }
  });
  return (
    <View style={[styles.card, style]}>
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

export const CardProgressLinear: React.FC<CardProgressLinearProps> = ({
  title = "Title",
  color = 'blue',
  data = [
    {
      matter: 'Matemática',
      value: 0.5
    },
    {
      matter: 'Física',
      value: 0.5
    }
  ],
  width = 'auto',
  height = 'auto',
  fill = true,
  gap = 5,
  style = {}
}) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';
  const styles = StyleSheet.create({
    card: {
      height: height,
      width: width,
      borderRadius: 12,
      borderWidth: 1,
      padding: 15,
      borderColor: '#E5E7EB',
      backgroundColor: '#FFFFFF',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 14
    },
    progress: {
      marginTop:5
    },
    progressText: {
      left: '30%',
      fontSize: 24,
      fontWeight: '900',
      color: 'black'
    }
  });
  return (
    <View style={[styles.card, style, (fill == true && width == 'auto') ? {flex: 1} : null]}>
      <Text style={styles.title}>{title}</Text>
      <View style={{marginTop: 15, marginHorizontal: 10}}>
        {data.map( (el,i) => (
          <View key={i} style={(i>0)?{marginTop: gap}:null}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>{el.matter}</Text>
              <Text>{(el.value*100).toFixed(0)}</Text>
            </View> 
            <Progress.Bar
              progress={el.value}
              width={null}
              style={styles.progress}
              color={color}
              unfilledColor={'#BBBBBB'}
              borderWidth={0}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

export const CardImage: React.FC<CardImageProps> = ({
  height = 180,
  width = 120,
  title = 'Title',
  img = require('@/assets/images/focus.jpg')
}) => {

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

export const CardProgressHorizontal: React.FC <CardProgressHorizontalProps> = ({
  height = 85,
  title = "Title",
  value = 0.5,
  color = 'blue',
  img = require('@/assets/images/focus.jpg'),
  style = {},
  route = '/'
}) => {

  const styles = StyleSheet.create({
    card: {
      flexDirection: 'row',
      height: height,
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

export const ProfileCard = () => {
  return (
    <View style={styles.profileContainer}>
      <ImageBackground
        style={styles.profileImage}
        source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' }}
        resizeMode="cover"
        imageStyle={styles.circleImage}
      />
      <View style={styles.profileCard}>
        <Text style={styles.profileName} numberOfLines={1}>
          Fulana da Silva Santos
        </Text>
        <Text style={styles.profileClass} numberOfLines={1}>
          1º Ano A - Ensino Médio
        </Text>
        <Text style={styles.profileAge} numberOfLines={1}>
          15 anos
        </Text>
      </View>
    </View>
  );
};

export const ProfileAttendanceCard = () => {
  return (
    <View style={styles.profileAttendanceContainer}>
      <Text style={styles.profileAttendanceTitle} numberOfLines={1}>
        Presença
      </Text>
      <View style={styles.profileAttendanceToday}>
        <Ionicons name="chevron-down-outline" size={10} color="#000" style={styles.profileAttendanceIcon} />
        <Text style={styles.profileAttendanceTodayText} numberOfLines={1}>
          Hoje
        </Text>
      </View>
      <View style={styles.profileAttendanceClasses}>
        {attendanceData.map((data, index) => (
          <View key={index} style={styles.profileAttendanceClass}>
            <Text style={styles.profileAttendanceClassText}>{data.class}</Text>
            <View
              style={[
                styles.profileAttendanceStatus,
                { backgroundColor: data.color },
              ]}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const attendanceData = [
  { class: '1° Aula', color: '#ffe609' },
  { class: '2° Aula', color: '#0eff09' },
  { class: '3° Aula', color: '#0eff09' },
  { class: '4° Aula', color: '#0eff09' },
  { class: '5° Aula', color: '#0eff09' },
  { class: '6° Aula', color: '#ff0909' },
];

export const ProfileReportCard = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior='automatic'>
        <View style={styles.profileReportContainer}>
          <Text style={styles.profileReportTitle} numberOfLines={1}>
            Boletim
          </Text>
          <Text style={styles.profileReportSemester} numberOfLines={1}>
            1° Semestre 2024
          </Text>
          <Ionicons name="chevron-down-outline" size={10} color="#000" style={styles.profileReportArrowIcon} />
          <View style={styles.profileReportCard}>
            <View style={styles.profileReportRowContainer}>
              <Text style={styles.profileReportColumnHeader}>Disciplina</Text>
              <View style={styles.profileReportDivider} />
              <Text style={styles.profileReportColumnHeader}>Faltas</Text>
              <View style={styles.profileReportDivider} />
              <Text style={styles.profileReportColumnHeader}>Nota</Text>
            </View>

            {reportData.map((item, index) => (
              <View key={index} style={styles.profileReportRowContainer}>
                <Text style={styles.profileReportRowText}>{item.subject}</Text>
                <View style={styles.profileReportDivider} />
                <Text style={styles.profileReportRowText}>{item.misses}</Text>
                <View style={styles.profileReportDivider} />
                <Text style={styles.profileReportRowText}>{item.grade}</Text>
              </View>
            ))}
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const reportData = [
  { subject: 'Matemática', misses: '02', grade: '8,8' },
  { subject: 'Português', misses: '01', grade: '7,6' },
  { subject: 'Ciências', misses: '05', grade: '9,5' },
  { subject: 'Geografia', misses: '00', grade: '7,2' },
  { subject: 'História', misses: '03', grade: '10,0' },
  { subject: 'Inglês', misses: '08', grade: '5,5' },
];

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
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19,
    color: '#000000',
    textAlign: 'left',
    zIndex: 5,
  },
  durationText: {
    height: 15,
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
  
  profileContainer: {
    width: 350,
    height: 86,
    position: 'relative',
    marginTop: 0,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
  },
  profileImage: {
    width: 80,
    height: 80,
    position: 'relative',
    zIndex: 4,
    marginTop: -96.439,
    marginLeft: 135,
  },
  circleImage: {
    borderRadius: 50,
  },
  profileCard: {
    width: 350,
    height: 150,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    position: 'absolute',
    top: -61,
    left: '50%',
    transform: [{ translateY: 0 }, { translateX: -175 }],
  },
  profileName: {
    height: 19,
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19,
    color: '#000000',
    marginTop: 56,
    marginLeft: 94,
  },
  profileClass: {
    height: 15,
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14.523,
    color: '#656b71',
    marginTop: 8.679,
    marginLeft: 110.5,
  },
  profileAge: {
    height: 15,
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14.523,
    color: '#656b71',
    marginTop: 8.679,
    marginLeft: 157.5,
  },

  profileAttendanceContainer: {
    width: 335,
    height: 177,
    marginTop: 0,
    marginHorizontal: 'auto',
  },
  profileAttendanceTitle: {
    height: 24,
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
    marginTop: 12,
  },
  profileAttendanceToday: {
    width: 334,
    height: 18,
    position: 'relative',
    marginTop: 14,
  },
  profileAttendanceIcon: {
    width: 12,
    height: 7,
    position: 'absolute',
    marginTop: 6,
    marginLeft: 35,
  },
  profileAttendanceTodayText: {
    height: 20,
    fontFamily: 'Inter',
    fontSize: 15,
    fontWeight: '400',
    color: '#5f5f5f',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 3,
  },
  profileAttendanceClasses: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  profileAttendanceClass: {
    width: 46,
    height: 90,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileAttendanceClassText: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
    marginTop: 24,
  },
  profileAttendanceStatus: {
    width: 46,
    height: 18,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: 26,
  },

  profileReportContainer: {
    width: 335,
    height: 'auto',
    position: 'relative',
    marginTop: 0,
    marginHorizontal: 'auto',
  },
  profileReportTitle: {
    height: 24,
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
    color: '#000000',
    zIndex: 1,
    marginBottom: 16, 
    marginTop: 5
  },
  profileReportCard: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginTop: 30
  },
  profileReportRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    paddingVertical: 8,
  },
  profileReportColumnHeader: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
    flex: 1,
  },
  profileReportRowText: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
    textAlign: 'center',
    flex: 1, 
  },
  profileReportDivider: {
    width: 1,
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  profileReportSemester: {
    height: 18,
    fontFamily: 'Inter',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 18,
    color: '#5f5f5f',
    textAlign: 'left',
    zIndex: 8,
    position: 'absolute',
    top: 38,
    left: 0,
  },
  profileReportArrowIcon: {
    width: 12,
    height: 7,
    position: 'absolute',
    top: 43,
    left: 138,
    zIndex: 10,
    marginLeft: -10
  },
});