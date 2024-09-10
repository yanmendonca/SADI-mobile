import { StyleSheet, Text, View, ScrollView, Image, Modal, Pressable} from 'react-native';
import Constants from 'expo-constants'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo, Ionicons } from "@expo/vector-icons"
import { router, useLocalSearchParams, useGlobalSearchParams } from 'expo-router';
import {useState} from 'react';
import * as Progress from 'react-native-progress';
import Accordion from '@/components/Accordion/Accordion'
import dataq from '@/app/learn/data';

export default function Question({
    simulate_matter = 'all',
    onBack = () => router.back()
}) {
    function setQuestion(i_q,i_m){
        if (i_q >= answers[i_m].answers.length){
            i_m += 1
            i_q = 0
        }

        if (i_q <= -1){
            i_m -= 1
            i_q = answers[i_m].answers.length-1
        }
        setQuestionIndex(i_q);
        setMatter(dataq[i_m].matter);
        setCurrentAnswer(answers[getMatterIndex(dataq[i_m].matter)].answers[i_q])
    }

    function getMatterIndex(matter_name){
        switch (matter_name) {
            case dataq[0].matter:
                return 0
            case dataq[1].matter:
                return 1
            case dataq[2].matter:
                return 2
            default:
                break;
        }
    }
    
    function updateAnswers(matter_name,answer){
        let answersState = answers
        const matter_id = getMatterIndex(matter_name)
        setCurrentAnswer(answer)
        answersState[matter_id].answers[question_index] = answer
        setAnswers(answersState)
        let mp = matterProgress

        var count = 0;
        for(var i = 0; i < answersState[matter_id].answers.length; ++i){
            if(answersState[matter_id].answers[i] != '')
                count++;
        }
        mp[matter_id] = count/data[matter_id].content.length
        setMatterProgress(mp)

        var sum = 0;
        for( var i = 0; i < mp.length; i++ ){
            sum += mp[i];
        }
        const avg = sum/mp.length
        if (avg == 1){
            setCompleted(true)
        } else{
            if(completed == true){setCompleted(false)}
        }
    }

    let data = Array.apply(null, dataq).filter((y)=>{ 
        if (simulate_matter == 'all'){
            return true
        }
        if (y.matter == simulate_matter){
            return true
        }else{
            return false
        }
    })

    data = Array.apply(null, data).map((y,i)=>{ 
        return (
            {
                title: y.matter,
                content: Array.apply(null, y.questions).map((y,i)=>{ return 'Questão '+(i+1) }),
                type: 'regular',
                contentNested: []
            }
        ) 
    })

    
    
    const answerTemplate = ['A','B','C','D','E']
    const [modalVisible, setModalVisible] = useState(false);
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [question_index, setQuestionIndex] = useState(0);
    const [matter, setMatter] = useState(data[0].title);

    const initialAnswersState = Array.apply(null, data).map((y,i)=>{
        return(
            {
                matter: y.title,
                answers: Array.apply(null, y.content).map((y,i)=>(''))
            }
        )
    })
    const [answers, setAnswers] = useState(initialAnswersState);
    const initialMatterProgress = Array.apply(null, initialAnswersState).map((y,i)=>(0))
    const [matterProgress, setMatterProgress] = useState(initialMatterProgress);
    const [completed, setCompleted] = useState(false);

    return (
        <ScrollView style={styles.container}>
            <View style={{paddingTop: 25, paddingHorizontal: 25, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity style={styles.btn} onPress={onBack}>
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
                    <Text style={{fontSize: 16, fontWeight: 700, color: '#656B71', marginBottom: 10}}>Questão {question_index+1}</Text>
                    <View style={{alignItems: 'center'}}>
                        {dataq[getMatterIndex(matter)].questions[question_index].img !== '' && <Image 
                        resizeMode='contain'
                        source={dataq[getMatterIndex(matter)].questions[question_index].img}
                        style={{width: '100%',height:200,resizeMode:'contain', borderRadius: 12}}                            
                        />}
                    </View>
                </View>

                <View style={[styles.card, {padding: 10}]}>
                    <Text style={{fontSize: 14, color: '#656B71', textAlign: 'justify', marginBottom: 20}}>
                    {dataq[getMatterIndex(matter)].questions[question_index].description}
                    </Text>
                    <View>
                        {dataq[getMatterIndex(matter)].questions[question_index].options.map((data,id)=>{
                            id = answerTemplate[id]
                            return(
                            <TouchableOpacity key={id} style={[styles.card, {flexDirection: 'row', alignItems: 'center'}, currentAnswer === id && {borderColor: '#1C5BFF', backgroundColor: '#EFF5FF'}]}
                            onPress={()=> {id !== currentAnswer ? updateAnswers(matter,id) : updateAnswers(matter,'') }}
                            >
                                <View style={[{paddingHorizontal:10, borderRightWidth: 1, borderColor: '#E5E7EB'}, currentAnswer === id && {borderColor: '#1C5BFF'}]}>
                                    <Text style={[{fontSize: 32, fontWeight: 600, color: '#B5B5B5'}, currentAnswer === id && {color: '#1C5BFF'}]}>{id}</Text>
                                </View>
                                
                                <Text style={{flex: 1, textAlign: 'justify', paddingHorizontal: 10, color: '#656B71'}}>
                                    {data}
                                </Text>
                            </TouchableOpacity>
                        )})}
                        
                    </View>
                </View>
                <View style={[{flexDirection: 'row'}, (getMatterIndex(matter) === 0 && question_index === 0) ? {justifyContent: 'flex-end'} : {justifyContent: 'space-between'}]}>
                {getMatterIndex(matter) === 0 && question_index === 0 ? null : <TouchableOpacity style={[styles.card, {paddingVertical:10, paddingHorizontal: 10}]}
                onPress={()=> setQuestion(question_index-1,getMatterIndex(matter))}>
                    <Entypo name="chevron-small-left" size={24} color='#656B71' />
                </TouchableOpacity>}

                {getMatterIndex(matter) === data.length-1 && question_index === data[getMatterIndex(matter)].content.length-1 
                ?
                <TouchableOpacity disabled={!completed} style={[styles.card, {paddingVertical:10, paddingHorizontal: 10}]}
                onPress={()=> router.push('/learn/')}>
                    <Ionicons name="send" size={24} color={completed ? '#656B71' : '#BBBBBB'} />
                </TouchableOpacity>
                :
                <TouchableOpacity style={[styles.card, {paddingVertical:10, paddingHorizontal: 10}]}
                onPress={()=> setQuestion(question_index+1,getMatterIndex(matter))}>
                    <Entypo name="chevron-small-right" size={24} color='#656B71' />
                </TouchableOpacity>}
                </View>
                

                
            </View>
            <Modal
            animationType='fade'
            transparent={true}
            visible={modalVisible}
            // statusBarTranslucent={true}
            onRequestClose={()=> setModalVisible(!modalVisible)}
            >
                <View style={{height: '100%', flexDirection: 'row'}}>
                    <Pressable style={{height: '100%',flex:1, backgroundColor: 'rgba(0,0,0,0.1)'}}
                    onPress={() => setModalVisible(!modalVisible)}
                    ></Pressable>
                    <View style={{backgroundColor: '#FFF', padding: 10}}>
                        <Text style={{fontSize: 14, fontWeight: 900}}>Menu</Text>

                        <ScrollView style={{marginTop: 20}}>
                        {data.map((value, index) => {
                            return <Accordion cProgress={matterProgress[index]} value={value} key={index} type={value.type} callBack={(v,i,matter)=>{setQuestion(i,index)}} check={answers[index].answers}/>;
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