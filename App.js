import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OverviewStack from "./src/navigations/OverviewStackScreen";
import HomeStack from "./src/navigations/HomeStackScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Overview">
                    <Stack.Screen
                        name="OverviewStack"
                        component={OverviewStack}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="HomeStack"
                        component={HomeStack}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
