import { Provider } from "react-redux";
import { store } from "./src/app/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroductionScreen from "./src/screens/Introduction";
import Overview from "./src/screens/Overview";
import Register from "./src/screens/Register";
import Login from "./src/screens/Login";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Introduction">
          <Stack.Screen name="Introduction" component={IntroductionScreen} options={{headerShown:false}}/>
          <Stack.Screen name="Overview" component={Overview} options={{headerShown:false}}/>
          <Stack.Screen name="Register" component={Register} options={{title: "Đăng ký"}}/>
          <Stack.Screen name="Login" component={Login} options={{title: "Đăng nhập"}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
