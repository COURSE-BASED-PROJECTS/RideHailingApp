import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import HistoryElement from "../../components/HistoryElement";
import { Text, ScrollView } from "react-native";

function History() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lịch sử hoạt động</Text>
      <ScrollView style={styles.container}>
        {/* put all the elements below into flatlist */}
        <HistoryElement />
        <HistoryElement />
        <HistoryElement />
        <HistoryElement />
        <HistoryElement />
        <HistoryElement />
        <HistoryElement />
      </ScrollView>
    </SafeAreaView>
  );
}

export default History;
