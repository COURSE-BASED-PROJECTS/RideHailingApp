import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserInfo from "../../screens/UserInfo";
import Home from "../../screens/Home";

const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="UserInfo"
        component={UserInfo}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default HomeStackScreen;
