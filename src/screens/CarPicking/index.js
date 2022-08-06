import { useState, useEffect } from "react";

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

import SockJS from "sockjs-client"; // Note this line
import Stomp from "stompjs";

import dataCar from "../../utils/dataCar";

let stompClient = null;

function Car({ navigation }) {
    const [selected, setSelected] = useState(null);

    const handleBack = () => {
        navigation.navigate("Destination");
    };

    const handleHailingCar = () => {
        console.log(stompClient);
        if (stompClient) {
            stompClient.send(
                "/app/order.sendOrder",
                {},
                JSON.stringify({
                    type: "SENT",
                    phoneNumber: "0123456789",
                    cusName: "Nguyen Duc Huy",
                    pickingAddress: "227 Nguyen van cu",
                    lngPickingAddr: 123,
                    latPickingAddr: 456,
                    arrivingAddress: "228 Nguyen van cu",
                    lngArrivingAddr: 789,
                    latArrivingAddr: 0,
                    distance: 23.2,
                    duration: 1200,
                    cost: 23000,
                    bookingTime: new Date(
                        Date.now() - (new Date().getTimezoneOffset() * 60000)
                    )
                        .toISOString()
                        .slice(0, -1),
                })
            );

            navigation.navigate("InfoHailing");
        }
    };

    const onConnected = () => {
        console.log("onConnected");
        // Subscribe to the Public Topic
        stompClient.subscribe("/topic/public", onMessageReceived);
    };

    const onError = (error) => {
        console.log(error);
    };

    const onMessageReceived = (payload) => {
        console.log("onMessageReceived");
        const message = JSON.parse(payload.body);
        console.log(message);
    };

    useEffect(() => {
        const socket = new SockJS("http://10.0.2.2:8080/ws");
        stompClient = Stomp.over(socket);

        stompClient.connect({}, onConnected, onError);

        return () => stompClient && stompClient.disconnect();
    }, []);

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
                data={dataCar}
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
                                item?.id === selected?.id
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

            <View style={{ display: "flex", marginTop: 20 }}>
                <TouchableOpacity
                    style={{
                        width: Dimensions.get("window").width * 0.9,
                        height: 50,
                        backgroundColor: "black",
                        alignSelf: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        borderRadius: 10,
                    }}
                    onPress={handleHailingCar}
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
