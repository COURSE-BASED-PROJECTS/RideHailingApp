import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Overview from "../Overview";
import Register from "../Register";
import Login from "../Login";
import Introduction from "../Introduction";

const OverviewStack = createNativeStackNavigator();

function OverviewStackScreen() {
  return (
    <OverviewStack.Navigator initialRouteName="Introduction">
      <OverviewStack.Screen
        name="Introduction"
        component={Introduction}
        options={{ headerShown: false }}
      />
      <OverviewStack.Screen
        name="Overview"
        component={Overview}
        options={{ headerShown: false }}
      />
      <OverviewStack.Screen
        name="Register"
        component={Register}
        options={{ title: "Đăng ký" }}
      />
      <OverviewStack.Screen
        name="Login"
        component={Login}
        options={{ title: "Đăng nhập" }}
      />
    </OverviewStack.Navigator>
  );
}

export default OverviewStackScreen;
