import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Image } from "react-native";
import UserInfo from "../../screens/UserInfo";
import Home from "../../screens/Home";
import History from "../../screens/History";
import Colors from "../../styles/Colors";
import HailingStackScreen from "../HailingStackScreen";

const Tab = createBottomTabNavigator();

function HomeStackScreen() {
    return (
        <Tab.Navigator initialRouteName="Home" options={{ showLabel: false }}>
            <Tab.Screen
                name="HailingStackScreen"
                component={HailingStackScreen}
                options={{
                    title: "",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                top: 10,
                            }}
                        >
                            <Image
                                source={require("../../../assets/icons/home.png")}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                                tintColor={
                                    focused
                                        ? Colors.secondary_medium
                                        : "#748c94"
                                }
                            ></Image>
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: focused
                                        ? Colors.secondary_medium
                                        : "#748c94",
                                }}
                            >
                                Trang chủ
                            </Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="History"
                component={History}
                options={{
                    title: "",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                top: 10,
                            }}
                        >
                            <Image
                                source={require("../../../assets/icons/history.png")}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                                tintColor={
                                    focused
                                        ? Colors.secondary_medium
                                        : "#748c94"
                                }
                            ></Image>
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: focused
                                        ? Colors.secondary_medium
                                        : "#748c94",
                                }}
                            >
                                Lịch sử
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="UserInfo"
                component={UserInfo}
                options={{
                    title: "",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                top: 10,
                            }}
                        >
                            <Image
                                source={require("../../../assets/icons/user.png")}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                                tintColor={
                                    focused
                                        ? Colors.secondary_medium
                                        : "#748c94"
                                }
                            ></Image>
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: focused
                                        ? Colors.secondary_medium
                                        : "#748c94",
                                }}
                            >
                                Tài khoản
                            </Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default HomeStackScreen;
