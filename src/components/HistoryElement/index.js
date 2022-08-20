import { View, Image, Text } from "react-native";
import styles from "./styles";

function HistoryElement({ history }) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.historyElement}>
                <Image
                    style={styles.ava}
                    source={{
                        uri: "https://cdn-icons.flaticon.com/png/512/3177/premium/3177440.png?token=exp=1656840050~hmac=3abfc15faaab7c18fda40f46d315f566",
                    }}
                />
                <View style={styles.content}>
                    <Text style={styles.historyTitle}>
                        {history?.pickingAddress}
                    </Text>
                    <Text style={styles.historyTime}>
                        {history?.timeDuring}
                    </Text>
                </View>
                <Text style={styles.price}>
                    {(history?.cost ?? 0)
                        .toFixed(2)
                        .replace(/\d(?=(\d{3})+\.)/g, "$&,") + "đ"}
                </Text>
            </View>
        </View>
    );
}

export default HistoryElement;
