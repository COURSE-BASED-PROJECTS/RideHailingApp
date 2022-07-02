import { Text, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import URL from "../../../assets/Link/URL";
import Button from "../../components/Button";
import Colors from "../../styles/Colors";

function Overview() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.imgBackground}
        source={{
          uri: URL.bg_img_intro,
        }}
      />

      <View style={styles.header}>
        <Text style={styles.title}>UP Driver</Text>
        <Text style={styles.subTitle}>
          Chúng tôi sẽ đưa bạn đến bất kì nơi đâu
        </Text>
      </View>

      <View style={styles.button}>
        <Button textInside={"Đăng nhập"} style={{ width: 250, height: 50 }} />
        <Button textInside={"Hoặc đăng ký ngay!"} style={{ width: 250, height: 50, backgroundColor: 'grey', marginTop:15 }} />
      </View>
    </SafeAreaView>
  );
}

export default Overview;
