import { Pressable, StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from "react-native"
import { Slot, useNavigation, router, usePathname } from "expo-router"
import { DrawerActions, NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { Entypo, Ionicons } from "@expo/vector-icons"
import { Drawer } from "expo-router/drawer"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Avatar, NativeBaseProvider, Button } from "native-base"
import Constants from 'expo-constants'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer"

export function MainHeader({
    route = 'Route'
}) {
    const navigation = useNavigation()
    const toggleMenu = () => navigation.dispatch(DrawerActions.toggleDrawer())

    return (
        <View>
            <StatusBar style="light" backgroundColor="black" translucent={true} />

            <View>
                <View style={styles.header}>
                    <Avatar
                        style={{ top: 5 }}
                        bg="green.500" source={{
                            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        }}>
                        A
                    </Avatar>
                </View>

                <View style={styles.menuBar}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text>SADI</Text>
                        <Entypo name="chevron-small-right" size={24} color="#BBBBBB" />
                        <Text>{route}</Text>
                    </View>
                    <Pressable onPress={toggleMenu} style={styles.menu}>
                        <Entypo name="menu" color="#000" size={32} />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export const SubjectHeader = ({ redirectTo }: { redirectTo?: string }) => {
    const navigation = useNavigation();
  
    const handleBackPress = () => {
      if (redirectTo) {
        navigation.navigate(redirectTo as never);
      } else {
        navigation.goBack();
      }
    };
    
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.Subjheader}>
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <Ionicons name="chevron-back-outline" size={24} color="black" style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle} numberOfLines={1}>
            Química
          </Text>
        </View>
      </SafeAreaView>
    );
  };
  
  

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
        height: 58,
        backgroundColor: '#F9FAFB',
        marginTop: Constants.statusBarHeight,
        alignItems: 'flex-end',
        paddingRight: 16
    },
    safeArea: {
        backgroundColor: '#F9FAFB',
        paddingTop: Constants.statusBarHeight,
      },
    Subjheader: {
        height: 70,
        backgroundColor: '#F9FAFB',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 16,
    },
    backButton: {
        width: 40,
        height: 40,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#e5e7eb',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#000000',
    },
    backIcon: {
    zIndex: 4,
    },
})