import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { SubjectHeader } from '@/components/Headers';
import Constants from 'expo-constants';
import { ResultsCard, ResultsDetailsCard } from '@/components/Cards';
import { ReviewButton } from '@/components/Buttons';

export default function Modal() {
  const params = useLocalSearchParams<{ totalQuestions: string, correctAnswers: string }>();
  

  const totalQuestions = parseInt(params.totalQuestions || '0', 10);
  const correctAnswers = parseInt(params.correctAnswers || '0', 10);

  const correctPercentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

  const skippedAnswers = 0;

  return (
    <SafeAreaView style={styles.body}>
      <SubjectHeader title={'Resultados'} />
      <View>
        <ResultsCard correctPercentage={correctPercentage} />
      </View>
      <View style={styles.ResultDetailCard}>
        <ResultsDetailsCard 
          totalQuestions={totalQuestions}
          correctAnswers={correctAnswers}
          skippedAnswers={skippedAnswers}
        />
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