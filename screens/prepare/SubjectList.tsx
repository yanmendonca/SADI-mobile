import { AntDesign } from "@expo/vector-icons"
import { useNavigation } from "expo-router"
import { Avatar, Box, IconButton, Image, Text, View } from "native-base"
import { ImageBackground, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export type SubjectItem = {
    name: string,
    totalMinutes: number,
    done: boolean,
    image: ImageBitmap,
}

export type Props = {
    areaName: string,
    subjects: Array<SubjectItem>
}

const backgroundImage = "https://www.customerparadigm.com/wp-content/uploads/2019/11/code-featured-splash-background-blur-1080x621.jpg"
const avatarImage = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"

export const SubjectList: React.FC<Props> = ({ areaName, subjects }) => {
    const navigation = useNavigation();
    return <SafeAreaView style={styles.flexContainer}>
        <ImageBackground
            source={{uri: backgroundImage}}
            imageStyle={styles.backgroundImage}
            style={styles.backgroundImageContainer}
        >   
            <View style={styles.backgroundImageHeaderContainer}>
                <IconButton 
                    style={styles.returnButton} 
                    variant={"solid"} 
                    _icon={{as: AntDesign, name: "left", color: "lightgray"}}
                    onPress={() => navigation.goBack()}
                />
                <Avatar
                    source={{ uri: avatarImage }}
                />
            </View>
            <Text style={styles.headerText}>{areaName}</Text>
        </ImageBackground>
        {   
            subjects.map((item) =>
                <Box style={styles.cardSubject}>
                    <Image style={styles.cardSubjectImage} source={item.image}/>
                    <View style={styles.cardSubjectTextContainer}>
                        <Text style={styles.cardSubjectHeaderText}>{item.name}</Text>
                        <Text style={styles.cardSubjectSubText}>{item.totalMinutes} min</Text>
                    </View>
                    <IconButton
                        onPress={() => navigation.navigate("telatres")}
                        style={ item.done ? styles.cardSubjectButtonChecked : styles.cardSubjectButton}
                        _icon={{as: AntDesign, name: item.done ? "check" : "arrowright", color:"black"}}
                    />
                </Box>
            )
    }
    </SafeAreaView>
}

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1
    },
    backgroundImage: {
        height: "100%", 
        resizeMode: "cover"
    },
    backgroundImageHeaderContainer: { 
        width: "100%", 
        display: "flex", 
        padding: 15, 
        flexDirection: "row", 
        alignItems:"center", 
        justifyContent: "space-between"
    },
    backgroundImageContainer: {
        height: "30%", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-between",
        borderRadius: 10,
    },
    returnButton: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderWidth: 1,
        borderColor: "lightgray",
        borderRadius: 10,
    },
    headerText: {
        flex: 1,
        fontSize: 25,
        margin: 10,
        lineHeight: 30,
        textAlignVertical: "center",
        textAlign: "center",
        color: "white",
        fontWeight: "bold"
    },
    cardSubject: {
        borderColor: "lightgray",
        backgroundColor: "#FCFAFA",
        borderWidth: 1,
        borderRadius: 15,
        marginHorizontal: 15,
        marginTop: 15,
        flexDirection: "row",
        alignItems: "center"
    },
    cardSubjectImage: {
        height: 90,
        width: 90,
        borderRadius: 14,
    },
    cardSubjectTextContainer: {
        margin: 20
    },
    cardSubjectHeaderText: {
        fontWeight: "bold",
        fontSize: 15,
    },
    cardSubjectSubText: {
        fontWeight: "medium"
    },
    cardSubjectButton: {
        width: 40,
        height: 40,
        borderColor: "#ECECEC",
        borderWidth: 1,
        backgroundColor: "#F9F8F8",
        borderRadius: 10,
        margin: 20,
        marginLeft: "auto"
    },
    cardSubjectButtonChecked: {
        width: 40,
        height: 40,
        borderColor: "#68DA3A",
        borderWidth: 1,
        backgroundColor: "#4CB722",
        borderRadius: 10,
        margin: 20,
        marginLeft: "auto"
    }
})

export default SubjectList;