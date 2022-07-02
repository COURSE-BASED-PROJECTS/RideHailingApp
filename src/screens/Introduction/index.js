import { Text, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import Button from "../../components/Button";
import URL from "../../../assets/Link/URL";

function IntroductionScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Car Sharing Service</Text>
        <Text style={styles.subTitle}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
      </View>

      <View style={styles.button}>
        <Button
          textInside={"Bắt đầu"}
          style={{ width: 150, height: 50}}
        />
      </View>

      <Image
        style={styles.imgBackground}
        source={{
          uri: URL.bg_img_intro,
        }}
      />
    </SafeAreaView>
  );
}

export default IntroductionScreen;
