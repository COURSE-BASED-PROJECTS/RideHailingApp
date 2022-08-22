import { Text, TouchableOpacity, Image, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import { travelSelector } from "../../store/selector";

import styles from "./styles";

function InfoHailing({ navigation }) {
    const { travelInformation, statusPackage } = useSelector(travelSelector);

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
                                <NumberFormat
                                    value={calCostTrip(
                                        +travelInformation?.distanceTripValue ??
                                            0,
                                        item.multiplier
                                    )}
                                    displayType="text"
                                    thousandSeparator
                                    renderText={(value) => (
                                        <Text>{value + "đ"}</Text>
                                    )}
                                />
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
