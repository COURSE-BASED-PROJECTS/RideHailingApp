import { Provider } from "react-redux";
import { store } from "./src/app/store";
import IntroductionScreen from "./src/screens/Introduction";
import Overview from "./src/screens/Overview";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Introduction">
          <Stack.Screen name="Introduction" component={IntroductionScreen} options={{headerShown:false}}/>
          <Stack.Screen name="Overview" component={Overview} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
