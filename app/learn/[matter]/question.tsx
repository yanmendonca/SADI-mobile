import { StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Question from '@/screens/question'
import { SubjectList as SubjectListScreen } from "@/screens/prepare/SubjectList";

export default function Modal() {
  const { matter } = useLocalSearchParams<{ matter: string;}>();
  return (
    // <Redirect href='/learn/Química_Orgânica/1'/>
    <Question simulate_matter={matter.replace('_',' ')}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});