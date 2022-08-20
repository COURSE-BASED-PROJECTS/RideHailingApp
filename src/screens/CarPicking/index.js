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
import axios from "axios";
import uuid from "react-native-uuid";

import { travelSelector } from "../../store/selector";
import { searchSelector } from "../../store/selector";
import { useDispatch, useSelector } from "react-redux";
import {
    setStart,
    setTravelInfomation,
    setDes,
    setStatusPackage,
} from "../../store/reducer/travelSlice";
import { setSearchStart, setSearchDes } from "../../store/reducer/searchSlice";

import { GOONG_REST_API } from "@env";
import { distance } from "../../service/api";

import dataCar from "../../utils/dataCar";
import calCostTrip from "../../utils/calCostTrip";

let stompClient = null;

function Car({ navigation }) {
    const [selected, setSelected] = useState(null);
    const { start, des, travelInformation } = useSelector(travelSelector);
    const { searchStart, searchDes } = useSelector(searchSelector);
    const dispatch = useDispatch();

    const handleBack = () => {
        navigation.navigate("Destination");
    };

    useEffect(() => {
        axios
            .get(distance, {
                params: {
                    origin: start?.latitude + "," + start?.longitude,
                    destination: des?.latitude + "," + des?.longitude,
                    vehicle: "car",
                    api_key: GOONG_REST_API,
                },
            })
            .then(function (response) {
                if (response.status === 200) {
                    const dataTravel = response.data.routes[0].legs[0];

                    const distanceTrip = dataTravel.distance.text;
                    const timeTrip = dataTravel.duration.text;
                    const distanceTripValue = dataTravel.distance.value;
                    const timeTripValue = dataTravel.duration.value;

                    dispatch(
                        setTravelInfomation({
                            distanceTrip,
                            timeTrip,
                            distanceTripValue,
                            timeTripValue,
                        })
                    );
                }
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [start, des]);

    const handleHailingCar = () => {
        const packageHailing = {
            idHailing: uuid.v4(),
            idDriver: null,
            idClient: travelInformation?.phoneNumber ?? "123",
            hailing: {
                locationStart: {
                    latitude: +start?.latitude ?? 0,
                    longitude: +start?.longitude ?? 0,
                    name: searchStart,
                },
                locationEnd: {
                    latitude: +des?.latitude ?? 0,
                    longitude: +des?.longitude ?? 0,
                    name: searchDes,
                },
                distance: +travelInformation?.distanceTripValue ?? 0,
                carType: 4,
                cost: calCostTrip(
                    +travelInformation?.distanceTripValue ?? 0,
                    +item.multiplier
                ),
                timeDuring: travelInformation?.timeTripValue ?? 0,
                timeStart: new Date(
                    Date.now() - new Date().getTimezoneOffset() * 60000
                )
                    .toISOString()
                    .slice(0, -1),
            },
            status: "",
            scope: [],
        };

        console.log(packageHailing);

        if (stompClient !== null) {
            stompClient.send(
                "/app/order.getOrder",
                {},
                JSON.stringify(packageHailing)
            );

            navigation.navigate("InfoHailing");
        }
    };

    const onConnected = () => {
        console.log("onConnected");
        // Subscribe to the Public Topic
        stompClient.subscribe("/topic/public", onMessageReceived);
        stompClient.subscribe(
            "/topic/" + travelInformation?.phoneNumber,
            onMessageReceivedPrivate
        );
    };

    const onError = (error) => {
        // stompClient = null;
        console.log(error);
    };

    const onMessageReceived = (payload) => {
        console.log("onMessageReceived");
        const message = JSON.parse(payload.body);
        console.log(message);
    };

    const onMessageReceivedPrivate = (payload) => {
        const message = JSON.parse(payload.body);
        console.log(message);
        if (message.status === "no_driver") {
            setTimeout(() => {
                dispatch(
                    setStatusPackage(
                        "Không tìm thấy tài xế. Vui lòng đặt lại!!!"
                    )
                );
            }, 2000);

            setTimeout(() => {
                dispatch(setTravelInfomation(null));
                dispatch(setSearchDes(null));
                dispatch(setStatusPackage("Đang tìm tài xế..."));

                navigation.navigate("Destination");
            }, 4000);
        } else if (message.status === "have_driver") {
            dispatch(setTravelInfomation(message));
        } else if (message.status === "end") {
            setTimeout(() => {
                dispatch(setStatusPackage("Chuyến đi kết thúc!"));
            }, 2000);

            setTimeout(() => {
                dispatch(setSearchStart(null));
                dispatch(setSearchDes(null));
                dispatch(setTravelInfomation(null));
                dispatch(setStart(null));
                dispatch(setDes(null));
                dispatch(setStatusPackage("Đang tìm tài xế..."));

                navigation.navigate("Home");
            }, 4000);
        }
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
                            <Text style={{ fontWeight: "500" }}>
                                {item.title}
                            </Text>
                            <Text style={{ fontWeight: "500" }}>
                                Thời gian di chuyển:{" "}
                            </Text>
                            <Text>
                                {travelInformation?.timeTrip ?? ""} -{" "}
                                {travelInformation?.distanceTrip ?? ""}
                            </Text>
                        </View>
                        <Text style={{ fontWeight: "500" }}>
                            {calCostTrip(
                                +travelInformation?.distanceTripValue ?? 0,
                                +item.multiplier
                            )
                                .toFixed(2)
                                .replace(/\d(?=(\d{3})+\.)/g, "$&,") + "đ"}
                        </Text>
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
