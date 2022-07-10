import { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../styles/Colors";
import styles from "./styles";

const data = [
    {
        id: "UpCar-X-123",
        title: "Xe 4 chỗ",
        multiplier: 1,
        image: "https://links.papareact.com/3pn",
    },
    {
        id: "UpCar-X-456",
        title: "Xe 7 chỗ",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8",
    },
    {
        id: "UpCar-X-789",
        title: "Xe 2 chỗ",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf",
    },
];

function Car({ navigation }) {
    const [selected, setSelected] = useState(null);

    const handleBack = () => {
        navigation.navigate("Destination");
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={handleBack}
                >
                    <Image
                        source={require("../../../assets/icons/left-arrow.png")}
                        style={{ width: 20, height: 20, resizeMode: "contain" }}
                    />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>
                    Chọn phương tiện di chuyển
                </Text>
            </View>

            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => setSelected(item)}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexDirection: "row",
                            paddingHorizontal: 20,
                            backgroundColor:
                                item.id === selected?.id
                                    ? Colors.secondary_light
                                    : "transparent",
                        }}
                    >
                        <Image
                            source={{ uri: item.image }}
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: "contain",
                            }}
                        />

                        <View>
                            <Text>{item.title}</Text>
                            <Text>Thời gian di chuyển</Text>
                        </View>
                        <Text>100,000 đ</Text>
                    </TouchableOpacity>
                )}
            />

            <View style={{ display: "flex", marginTop: 20}}>
                <TouchableOpacity
                    style={{
                        width: Dimensions.get("window").width * 0.9,
                        height: 50,
                        backgroundColor: "black",
                        alignSelf: "center",
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        borderRadius: 10
                    
                    }}
                >
                    <Text
                        style={{
                            color: "white",
                            fontSize: 20,
                        }}
                    >
                        Đặt xe
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Car;
