import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import Question from '@/screens/question'

export default function Modal() {
  return (
    <Question/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});