import { StyleSheet, Text, View } from 'react-native';
import { Redirect } from 'expo-router';
import Question from '@/screens/question'
import { SubjectList as SubjectListScreen } from "@/screens/prepare/SubjectList";

export default function Modal() {
  return (
    // <Redirect href='/learn/Química_Orgânica/1'/>
    // <Question/>
    <SubjectListScreen 
                areaName="CIÊNCIAS DA NATUREZA E SUAS TECNOLOGIAS" 
                subjects={
                    [
                        {name: "Física", done: true, totalMinutes: 120, image: require("@/assets/images/focus.jpg")},
                        {name: "Química", done: false, totalMinutes: 120, image: require("@/assets/images/focus.jpg")},
                        {name: "Biologia", done: false, totalMinutes: 120, image: require("@/assets/images/focus.jpg")}
                    ]
                }>
            </SubjectListScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});