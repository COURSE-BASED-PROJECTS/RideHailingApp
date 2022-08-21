import { Text, TouchableOpacity, Image, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import { travelSelector } from "../../store/selector";

import { setTravelInfomation } from "../../store/reducer/travelSlice";
import { driverAPI } from "../../service/api";

import styles from "./styles";
import { useEffect } from "react";

function InfoHailing({ navigation }) {
    const dispatch = useDispatch();
    const { travelInformation, statusPackage } = useSelector(travelSelector);

    useEffect(() => {
        if (travelInformation?.idDriver) {
            axios
                .get(driverInfoAPI + travelInformation?.idDriver)
                .then(function (res) {
                    const driverInfo = res.data;
                    console.log(driverInfo);
                    // handle success
                    if (driverInfo !== null && res.status === 200) {
                        dispatch(setTravelInfomation(driverInfo));
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                    alert("Đăng nhập thất bại");
                })
                .then(function () {
                    // always executed
                });
        }
    }, []);

    return (
        <>
            {travelInformation?.idDriver && (
                <SafeAreaView style={styles.container}>
                    <Text style={styles.title}>Thông tin chuyến đi</Text>
                    <View style={styles.infoHailing}>
                        <ScrollView>
                            <Text style={styles.titleInfo}>
                                Thông tin tài xế:{" "}
                            </Text>
                            <Text style={styles.infoContent}>
                                {travelInformation?.name} -{" "}
                                {travelInformation?.plate}
                            </Text>

                            <Text style={styles.titleInfo}>Chặng đường: </Text>
                            <Text style={styles.infoContent}>
                                {
                                    travelInformation?.hailing?.locationStart
                                        ?.name
                                }{" "}
                                --&gt;{" "}
                                {travelInformation?.hailing?.locationEnd?.name}
                            </Text>

                            <Text style={styles.titleInfo}>Thời gian: </Text>
                            <Text style={styles.infoContent}>
                                {travelInformation?.timeTrip}
                            </Text>

                            <Text style={styles.titleInfo}>Giá tiền: </Text>
                            <Text style={styles.infoContent}>
                                {travelInformation?.distanceTrip}
                            </Text>
                        </ScrollView>
                    </View>
                </SafeAreaView>
            )}

            {!travelInformation?.idDriver && (
                <SafeAreaView style={styles.container}>
                    <Text style={styles.title}>{statusPackage}</Text>
                </SafeAreaView>
            )}
        </>
    );
}

export default InfoHailing;
