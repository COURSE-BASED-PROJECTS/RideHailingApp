import { Text, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import Button from "../../components/Button";
import URL from "../../../assets/Link/URL";

function IntroductionScreen({navigation}) {
  const handleStart = ()=>{
    navigation.navigate('Overview')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Đặt xe trực tuyến</Text>
        <Text style={styles.subTitle}>
          Dịch vụ đặt xe trực tuyến UP sẽ đưa bạn bất cứ đâu.
        </Text>
      </View>

      <View style={styles.button}>
        <Button
          textInside={"Bắt đầu"}
          style={{ width: 150, height: 50}}
          handleClick = {handleStart}
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
