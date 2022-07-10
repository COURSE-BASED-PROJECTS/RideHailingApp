import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import NavigateCardStackScreen from '../../navigations/NavigateCardScreen'

function Hailing() {
    return (
        <View style={styles.container}>
            <View style={styles.map}></View>
            <View style={styles.hailingContent}>
              <NavigateCardStackScreen/>
            </View>
        </View>
    );
}

export default Hailing;
