import { StyleSheet, Text, View } from 'react-native';
import { Redirect, useLocalSearchParams, usePathname } from 'expo-router';
import Question from '@/screens/question'

export default function GeneralQuestion() {
    const {
        matter,
        question,
        } = useLocalSearchParams<{ matter: string; question: string;}>();
        console.log(matter)
    
        return (
        <Question firstMatter={matter.replace('_',' ')}/>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});