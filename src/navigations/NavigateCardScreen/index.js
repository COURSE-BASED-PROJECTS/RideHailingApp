import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Destination from '../../screens/Destination';
import CarPicking from '../../screens/CarPicking';

const NavigateCardStack = createNativeStackNavigator();

function NavigateCardStackScreen() {
    return (
        <NavigateCardStack.Navigator initialRouteName='Destination'>
            <NavigateCardStack.Screen
                name='Destination'
                component={Destination}
                options={{ headerShown: false }}
            />
            <NavigateCardStack.Screen
                name='CarPicking'
                component={CarPicking}
                options={{ headerShown: false }}
            />
        </NavigateCardStack.Navigator>
    );
}

export default NavigateCardStackScreen;
