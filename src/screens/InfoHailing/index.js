import { Text, TouchableOpacity, Image, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
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
                                Nguyễn Hoàng Thông - 59B3 8888
                            </Text>

                            <Text style={styles.titleInfo}>Chặng đường: </Text>
                            <Text style={styles.infoContent}>
                                {travelInformation?.hailing?.locationStart?.name} --&gt;{" "}
                                {travelInformation?.hailing?.locationEnd?.name}
                            </Text>

                            <Text style={styles.titleInfo}>Thời gian: </Text>
                            <Text style={styles.infoContent}>{travelInformation?.timeTrip}</Text>

                            <Text style={styles.titleInfo}>Giá tiền: </Text>
                            <Text style={styles.infoContent}>20,000đ</Text>
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
