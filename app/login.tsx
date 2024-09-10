import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Button, Icon, Image, Input, Stack } from "native-base";
import { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, View } from "react-native"


export const Login = () => {
    return <SafeAreaView style={{display: "flex", flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image source={require("@/assets/images/sadi_logo_light.png")} style={styles.logo}/>
        <LoginForm style={{marginHorizontal: 30}}/>
    </SafeAreaView>
}

export const LoginForm = ({ style = {} }) => {
    const [show, setShow] = useState(false);
    return <View style={{...styles.formContainer, ...style}}>
        <Stack space={4} w="100%" alignItems="center">
        <Input 
            InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} 
            placeholder="Usuário" 
        />
        <Input 
            type={show ? "text" : "password"}
            InputRightElement={
                <Pressable onPress={() => setShow(!show)}>
                    <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                </Pressable>
            } 
            placeholder="Senha" 
        />
            <Button bgColor={"blue.600"} onPress={() => router.push('/')}>Login</Button>
        </Stack>
    </View>
}

const styles = StyleSheet.create({
    logo: {
        width: 200, 
        height: 55, 
        margin: 20
    },
    formContainer: {
        borderColor: "lightgray", 
        borderWidth: 1, 
        backgroundColor: "white", 
        padding: 20, 
        borderRadius: 20
    }
})

export default Login