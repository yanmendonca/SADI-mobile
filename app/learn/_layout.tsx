import { Pressable, StyleSheet, View, Text } from "react-native"
import { Stack, useNavigation, Tabs } from "expo-router"
import { DrawerActions, NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { Entypo, Ionicons } from "@expo/vector-icons"
import { Drawer } from "expo-router/drawer"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Avatar, NativeBaseProvider, Button } from "native-base"
import Constants from 'expo-constants'

export default function Layout() {
  const navigation = useNavigation()
  const toggleMenu = () => navigation.dispatch(DrawerActions.toggleDrawer())
  // console.log(Constants.statusBarHeight)

  return (

    
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
      />
      <Stack.Screen
        name="SubjectList"
        options={{
          animation: 'slide_from_bottom'
        }}
      />


    </Stack>
  
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#F9FAFB'
  },
  menu: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    height: 40,
    width: 40,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB'
  },
  menuBar: {
    flexDirection: 'row',
    height: 52,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB'
  },
  header: {
    height:58,
    backgroundColor: '#F9FAFB',
    marginTop: Constants.statusBarHeight,
    alignItems: 'flex-end',
    paddingRight: 16
  }
})