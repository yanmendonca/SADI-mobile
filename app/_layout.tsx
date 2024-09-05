import { Pressable, StyleSheet, View, Text } from "react-native"
import { Slot, useNavigation, router, usePathname } from "expo-router"
import { DrawerActions, NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { Entypo, Ionicons } from "@expo/vector-icons"
import { Drawer } from "expo-router/drawer"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Avatar, NativeBaseProvider, Button } from "native-base"
import Constants from 'expo-constants'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer"

export default function Layout() {
  const navigation = useNavigation()
  const toggleMenu = () => navigation.dispatch(DrawerActions.toggleDrawer())
  
  // DrawerContent customized
  const CustomDrawerContent = (props) => {
    const pathname = usePathname()

    return(
    <DrawerContentScrollView {...props}>
      <DrawerItem label={"home"}
      onPress={()=>{
        router.push('/home/')
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
        router.push('/learn')
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


    </DrawerContentScrollView>
  )}

  return (
    <NativeBaseProvider>
      {/* Status Bar (if doesn't work, comment, save, discomment and save again, then it will work ) */}
      <StatusBar style="light" backgroundColor="black" translucent={true}/>

      {/* Header Menu (probably will be removed from here) */}
      <View>
        <View style={styles.header}>
            <Avatar 
            style={{top: 5}}
            bg="green.500" source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }}>
              A
            </Avatar>

        </View>

        <View style={styles.menuBar}>
          <Text>SADI   -   Aprender</Text>
          <Pressable onPress={toggleMenu} style={styles.menu}>
            <Entypo name="menu" color="#000" size={32} />
          </Pressable>
        </View>
      </View>
      
      {/* Drawer router */}
      <GestureHandlerRootView>
        <Drawer
        initialRouteName="/home/"
          screenOptions={{
            headerShown: false,
          }}
          drawerContent={(props) => <CustomDrawerContent {...props} />}
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