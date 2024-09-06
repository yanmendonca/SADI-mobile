import { StyleSheet, Text, View, ScrollView, Image, Modal, Pressable} from 'react-native';
import Constants from 'expo-constants'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from "@expo/vector-icons"
import { router } from 'expo-router';
import {useState} from 'react';
import * as Progress from 'react-native-progress';
import Accordion from '@/components/Accordion/Accordion'

export default function Question({
    matter = 'Eletroquímica',
    question_index = 3,
    alternatives = [
        {
            id: 'A',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        },
        {
            id: 'B',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        },
        {
            id: 'C',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        },
        {
            id: 'D',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        },
    ],
    onPress = () => {router.push('/')}
}) {
    const [modalVisible, setModalVisible] = useState(false);
    const contents = ['Questão 1', 'Questão 2', 'Questão 3', 'Questão 4' ,'Questão 5']
    const data = [
        {
          title: 'Química Orgânica',
          content: contents,
          contentNested: [],
          type: 'regular',
          progress: 1
        },
        {
          title: 'Eletroquímica',
          content: contents,
          contentNested: [],
          type: 'regular',
          progress: 0
        },
        {
          title: 'Termoquímica',
          content: contents,
          contentNested: [],
          type: 'regular',
          progress: 0
        },
      ];
    return (
        <ScrollView style={styles.container}>
            <View style={{paddingTop: 25, paddingHorizontal: 25, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity style={styles.btn} onPress={onPress}>
                        <Entypo name='chevron-small-left' size={24} />
                    </TouchableOpacity>
                    <Text style={{marginLeft: 10, fontSize: 20, fontWeight: 900}}>{matter}</Text>
                </View>

                <TouchableOpacity style={styles.btn} onPress={() => setModalVisible(!modalVisible)}>
                    <Entypo name='list' size={24} />
                </TouchableOpacity>
            </View>

            <View style={{paddingHorizontal:8}}>

                <View style={[styles.card, {padding: 10}]}>
                    <Text style={{fontSize: 16, fontWeight: 700, color: '#656B71', marginBottom: 10}}>Questão {question_index}</Text>
                    <View style={{alignItems: 'center'}}>
                        <Image source={require('@/assets/images/focus.jpg')}
                        style={{width: 250, height: 150, borderRadius: 12}}                            
                        />
                    </View>
                </View>

                <View style={[styles.card, {padding: 10}]}>
                    <Text style={{fontSize: 14, color: '#656B71', textAlign: 'justify', marginBottom: 20}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?  Excepteur sint occaecat cupidatat non proident, sunt in culpa.
                    </Text>
                    <View>
                        {alternatives.map(data=>(
                            <TouchableOpacity key={data.id} style={[styles.card, {flexDirection: 'row', alignItems: 'center'}]}>
                            <View style={{paddingHorizontal:10, borderRightWidth: 1, borderColor: '#E5E7EB'}}>
                                <Text style={{fontSize: 32, fontWeight: 600, color: '#B5B5B5'}}>{data.id}</Text>
                            </View>
                            
                            <Text style={{flex: 1, textAlign: 'justify', paddingHorizontal: 10, color: '#656B71'}}>
                                {data.text}
                            </Text>
                            </TouchableOpacity>
                        ))}
                        
                    </View>
                </View>
            </View>
            <Modal
            animationType='fade'
            transparent={true}
            visible={modalVisible}
            // statusBarTranslucent={true}
            >
                <View style={{height: '100%', flexDirection: 'row'}}>
                    <Pressable style={{height: '100%',flex:1, backgroundColor: 'rgba(0,0,0,0.1)'}}
                    onPress={() => setModalVisible(!modalVisible)}
                    ></Pressable>
                    <View style={{backgroundColor: '#FFF', padding: 10}}>
                        <Text style={{fontSize: 14, fontWeight: 900}}>Menu</Text>

                        <ScrollView style={{marginTop: 20}}>
                        {data.map((value, index) => {
                            return <Accordion value={value} key={index} type={value.type} cProgress={value.progress}/>;
                            })}
                        </ScrollView>
                        

                    </View>
                </View>
                
            </Modal>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    btn: {
        width: 40, 
        height: 40, 
        backgroundColor: '#FFFFFF', 
        borderRadius: 12, 
        alignItems: 'center', 
        justifyContent: 'center',
        borderColor: '#E5E7EB',
        borderWidth: 1,
    },
    card: {
        backgroundColor: '#FFFFFF', 
        borderRadius: 12,
        borderColor: '#E5E7EB',
        borderWidth: 1,
        marginBottom: 10
    }
});