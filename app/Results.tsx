import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Results from '@/screens/question'
import { SubjectHeader } from '@/components/Headers';
import Constants from 'expo-constants';
import { ResultsCard, ResultsDetailsCard } from '@/components/Cards';
import { ReviewButton } from '@/components/Buttons';

export default function Modal() {
  return (
    <SafeAreaView style={styles.body}>
      <SubjectHeader title={'Resultados'} />
      <View>
        <ResultsCard />
      </View>
      <View style={styles.ResultDetailCard}>
        <ResultsDetailsCard />
      </View>
      <View style={styles.ResultDetailButton}>
        <ReviewButton />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingTop: Constants.statusBarHeight
  },
  ResultDetailCard: {
    marginTop: 20
  },
  ResultDetailButton: {
    marginTop: 20
  },
});
