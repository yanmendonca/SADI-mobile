import { StyleSheet, Text, View } from 'react-native';
import { Redirect } from 'expo-router';
import Question from '@/screens/question'
import { SubjectList as SubjectListScreen } from "@/screens/prepare/SubjectList";

export default function Modal() {
  return (
    // <Redirect href='/learn/Química_Orgânica/1'/>
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