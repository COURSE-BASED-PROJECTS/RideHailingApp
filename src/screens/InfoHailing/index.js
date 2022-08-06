import { Text, TouchableOpacity, Image, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

function InfoHailing({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Thông tin chuyến đi</Text>
            <View style={styles.infoHailing}>
                <ScrollView>
                    <Text style={styles.titleInfo}>Thông tin tài xế: </Text>
                    <Text style={styles.infoContent}>
                        Nguyễn Hoàng Thông - 59B3 8888
                    </Text>

                    <Text style={styles.titleInfo}>Chặng đường: </Text>
                    <Text style={styles.infoContent}>
                        227 Nguyễn Văn cừ 227 Nguyễn Văn cừ 227 Nguyễn Văn cừ  --&gt;
                         228 Nguyễn Văn cừ 227 Nguyễn Văn cừ 227 Nguyễn Văn cừ
                        227 Nguyễn Văn cừ
                    </Text>

                    <Text style={styles.titleInfo}>Thời gian: </Text>
                    <Text style={styles.infoContent}>20 phút</Text>

                    <Text style={styles.titleInfo}>Giá tiền: </Text>
                    <Text style={styles.infoContent}>20,000đ</Text>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

export default InfoHailing;
