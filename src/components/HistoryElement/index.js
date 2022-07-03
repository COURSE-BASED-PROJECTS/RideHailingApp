import { View, Image, Text } from "react-native";
import styles from "./styles";

function HistoryElement() {
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
            Chuyến đi đến Khoa học tự nhiên
          </Text>
          <Text style={styles.historyTime}>20/06/2022, 10:11</Text>
        </View>
        <Text style={styles.price}>100.000đ</Text>
      </View>
    </View>
  );
}

export default HistoryElement;
