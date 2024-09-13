import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { SubjectHeader } from '@/components/Headers';
import Constants from 'expo-constants';
import { ResultsCard, ResultsDetailsCard } from '@/components/Cards';
import { ReviewButton } from '@/components/Buttons';
import { Ionicons, Entypo } from '@expo/vector-icons';

export default function Modal() {
  const params = useLocalSearchParams<{ totalQuestions: string, correctAnswers: string, totalAnswers: string, matters: string }>();
  const totalAnswers = params.totalAnswers.includes(',') ? params.totalAnswers.split(',') : [params.totalAnswers]
  const matters = params.matters.includes(',') ? params.matters.split(',') : [params.matters]
  const uniqueMatters = [... new Set(matters)]

  const answers = uniqueMatters.map((um, id) => {
    let teste = totalAnswers.filter((value, id) => {
      if (um == matters[id]) {
        return value
      }
    })
    return (
      {
        matter: um,
        answers: teste
      }
    )
  })


  const totalQuestions = parseInt(params.totalQuestions || '0', 10);
  const correctAnswers = parseInt(params.correctAnswers || '0', 10);

  const correctPercentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

  const skippedAnswers = 0;

  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>
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
        <View style={{
          marginHorizontal: 15,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: '#E5E7EB',
          marginVertical: 15,
          backgroundColor: '#FFFFFF',
          paddingHorizontal: 15,
          paddingVertical: 15
        }}>
          {answers.map((data, index) => {
            return (
              <View style={{ marginBottom: 15 }}>
                <Text style={{ marginBottom: 15, fontWeight: '600' }}>{data.matter}</Text>
                {data.answers.map((ans, i) => {
                  return (
                    <View style={{ paddingLeft: 15 }}>
                      <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingVertical: 5,
                        borderTopWidth: 1,
                        borderColor: '#E5E7EB',
                      }}>
                        <Text>Questão {i + 1}</Text>
                        {ans == '1' ?
                          <Ionicons name="checkmark-circle" size={16} color="#94ED6B" />
                          :
                          <Ionicons name="close-circle" size={16} color="red" />
                        }
                        {/* <Ionicons name="close-circle" size={16} color="red" /> */}
                        {/* <Entypo name="circle" size={16} color="gray" /> */}
                      </View>
                    </View>
                  )
                })}
              </View>
            )
          })}
        </View>
        <View style={styles.ResultDetailButton}>
          <ReviewButton />
        </View>
      </ScrollView>
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
    marginBottom: 20
  },
});