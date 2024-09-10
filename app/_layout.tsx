import { Pressable, StyleSheet, View, Text, ScrollView, ScrollViewProps } from "react-native"
import { Slot, useNavigation, router, usePathname } from "expo-router"
import { DrawerActions, NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { Entypo, Ionicons } from "@expo/vector-icons"
import { Drawer } from "expo-router/drawer"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Avatar, NativeBaseProvider, Button } from "native-base"
import Constants from 'expo-constants'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer"
import { JSX, ReactNode, RefAttributes } from "react"

export default function Layout() {
  const navigation = useNavigation()
  const toggleMenu = () => navigation.dispatch(DrawerActions.toggleDrawer())
  
  // DrawerContent customized
  const CustomDrawerContent = (props: JSX.IntrinsicAttributes & ScrollViewProps & { children: ReactNode } & RefAttributes<ScrollView>) => {
    const pathname = usePathname()

    return(
    <DrawerContentScrollView {...props} style={{paddingTop: 12}}>
      <DrawerItem label={"home"}
      onPress={()=>{
        router.push('/')
      }}
      icon={({color,size})=>(
        <Ionicons name={'home-outline'} size={14}/>
      )}
      />
      
      <DrawerItem label={"Perfil"}
      onPress={()=>{
        router.push('/profile')
      }}
      icon={({color,size})=>(
        <Ionicons name={'person-outline'} size={14}/>
      )}
      />

      <DrawerItem label={"Notificações"}
      onPress={()=>{
        router.push('/notifications')
      }}
      icon={({color,size})=>(
        <Ionicons name={'notifications-outline'} size={14}/>
      )}
      />

      <DrawerItem label={"Aprender"}
      onPress={()=>{
        router.push('/learn/')
      }}
      icon={({color,size})=>(
        <Ionicons name={'book-outline'} size={14}/>
      )}
      />

      <DrawerItem label={"Preparar"}
      onPress={()=>{
        router.push('/prepare')
      }}
      icon={({color,size})=>(
        <Ionicons name={'desktop-outline'} size={14}/>
      )}
      />

      <DrawerItem label={"Suporte para pais"}
      onPress={()=>{
        router.push('/parentsSupport')
      }}
      icon={({color,size})=>(
        <Ionicons name={'people-outline'} size={14}/>
      )}
      />

      <DrawerItem label={"Trabalho"}
      onPress={()=>{
        router.push('/work')
      }}
      icon={({color,size})=>(
        <Ionicons name={'folder-outline'} size={14}/>
      )}
      
      />

      <DrawerItem label={"Configurações"}
      onPress={()=>{
        router.push('/settings')
      }}
      icon={({color,size})=>(
        <Ionicons name={'settings-outline'} size={14}/>
      )}
      />

      <DrawerItem label={"Sair"}
      onPress={()=>{
        router.push('/login')
      }}
      icon={({color,size})=>(
        <Ionicons name={'exit-outline'} size={14}/>
      )}
      />  


    </DrawerContentScrollView>
  )}

  return (
    <NativeBaseProvider>
      {/* Drawer router */}
      <GestureHandlerRootView>
        <Drawer
          screenOptions={{
            headerShown: false,
            swipeEnabled: false,
          }}
          drawerContent={(props) => <CustomDrawerContent children={undefined} {...props} />}
        />
      </GestureHandlerRootView>
    </NativeBaseProvider>
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