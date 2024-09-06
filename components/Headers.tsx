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

export function MainHeader({
    route = 'Route'
}) {
    const navigation = useNavigation()
    const toggleMenu = () => navigation.dispatch(DrawerActions.toggleDrawer())

    return (
        <View>
            {/* Status Bar (if doesn't work, comment, save, discomment and save again, then it will work ) */}
            <StatusBar style="light" backgroundColor="black" translucent={true} />

            {/* Header Menu */}
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
})