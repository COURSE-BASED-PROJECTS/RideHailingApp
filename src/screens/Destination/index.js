import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import Search from "../../components/Search";

function Destination({ navigation }) {
    const handleMove = () => {
        navigation.navigate("CarPicking");
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Chào buổi sáng, Đức Huy</Text>
            <Search />

            <TouchableOpacity
                style={styles.pickingCarButton}
                onPress={handleMove}
            >
                <Image
                    source={require("../../../assets/icons/car.png")}
                    style={{
                        width: 40,
                        height: 40,
                        resizeMode: "contain",
                    }}
                    tintColor="white"
                />
                <Text style={{ fontSize: 18, marginLeft: 10, color: "white" }}>
                    Chọn xe
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Destination;
