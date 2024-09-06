import Ionicons from '@expo/vector-icons/Ionicons';
import { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity, useColorScheme, View, Text, Image } from 'react-native';
import { Circle, Svg } from "react-native-svg"
import * as Progress from 'react-native-progress';
import { router } from 'expo-router'

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
  console.log(value)
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