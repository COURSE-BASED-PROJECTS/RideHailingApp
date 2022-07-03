import {
  Text,
  Image,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import Button from "../../components/Button";
import URL from "../../../assets/Link/URL";
import FormElement from "../../components/FormElement";

function Login({ navigation }) {
  const handleSubmit = () => {
    // authentication
    // navigation.navigate("HomeStack");
    navigation.reset({
      index: 0,
      routes: [{ name: "HomeStack" }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.imgBackground}
        source={{
          uri: URL.bg_img_intro,
        }}
      />

      <KeyboardAvoidingView
        style={styles.formContent}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled={false}
      >
        <ScrollView>
          <FormElement
            title={"Tên tài khoản / SĐT"}
            placeholder={"Nhập tên tài khoản / SĐT"}
          />

          <FormElement
            title={"Nhập mật khẩu"}
            placeholder={"Nhập mật khẩu"}
            secureTextEntry={true}
          />
        </ScrollView>
      </KeyboardAvoidingView>

      <View style={styles.button}>
        <Button
          textInside={"Đăng nhập"}
          style={{ width: 200, height: 50 }}
          handleClick={handleSubmit}
        />
      </View>
    </SafeAreaView>
  );
}

export default Login;
