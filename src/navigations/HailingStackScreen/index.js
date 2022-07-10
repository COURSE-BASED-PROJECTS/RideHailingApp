import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Hailing from '../../screens/Hailing';
import Home from '../../screens/Home';

const HailingStack = createNativeStackNavigator();

function HailingStackScreen() {
    return (
        <HailingStack.Navigator initialRouteName='Home'>
            <HailingStack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false }}
            />
            <HailingStack.Screen
                name='Hailing'
                component={Hailing}
                // options={{ headerShown: false }}
                options={{
                    title: 'Đặt xe'
                }}
            />
        </HailingStack.Navigator>
    );
}

export default HailingStackScreen;
