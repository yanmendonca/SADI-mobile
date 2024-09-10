import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { MainHeader } from '@/components/Headers'
import { Badge, Image, ScrollView } from 'native-base';

const alertBell = "https://img.freepik.com/vector-premium/icono-sirena-emergencia-luz-advertencia-peligro-alarma-ruta-ambulancia_68708-2806.jpg?w=1380"

export default function Modal() {
  return (
    <SafeAreaView style={styles.body}>
      <MainHeader route='Notificações'/>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={{fontSize: 40, fontWeight: "bold", marginBottom: 20}}>Notificações</Text>
        { 
          [...Array(10).keys()].map(() => 
            <View style={styles.card}>
                <Image style={styles.image} source={{uri: alertBell}}/>
                <View>
                    <Text style={styles.cardSubjectHeaderText}>Monitoramento do Aluno</Text>
                    <Text style={styles.cardSubjectSubText}>Alerta! Hoje o engajamento da ...</Text>
                </View>
                <Badge
                  colorScheme="danger" rounded="full" variant="solid" marginLeft={"auto"} _text={{
                    fontSize: 12
                  }}>1
                </Badge>
            </View>
          )
        }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderColor: "lightgray", 
    borderWidth: 1, 
    height: 70,
    marginBottom: 15, 
    borderRadius: 15, 
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    padding: 10,
    flexDirection: "row"
  },
  screenTitle: {
    fontSize: 40, 
    fontWeight: "bold", 
    marginBottom: 20
  },
  image: {
    width: 50,
    height: 50, 
    borderRadius: 50
  },
  cardSubjectHeaderText: {
      fontWeight: "bold",
      fontSize: 15,
  },
  cardSubjectSubText: {
      fontWeight: "medium"
  },
  body: { 
    flex: 1, 
    backgroundColor: '#F9FAFB' 
  },
  container: {
    flexGrow: 1,
    padding: 25
  },
});