import { Image, View, KeyboardAvoidingView, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

import Button from "../../components/Button";
import URL from "../../../assets/Link/URL";
import FormElement from "../../components/FormElement";

import { accountSelector } from "../../store/selector";
import { setUserInfo, setUsername, setPassword } from "../../store/reducer/accountSlice";
import { useSelector, useDispatch } from "react-redux";

import { loginAPI } from "../../service/api";
import axios from "axios";

function Login({ navigation }) {
    const dispatch = useDispatch();
    const { username, password } = useSelector(accountSelector);

    const handleSubmit = async () => {
        if (username !== "" && password !== "") {
            axios
                .post(loginAPI, {
                    username,
                    password,
                })
                .then(function (response) {
                    const userInfo = response.data;

                    if (userInfo !== null && response.status === 200) {
                        console.log(userInfo);
                        dispatch(setUserInfo(userInfo));

                        navigation.reset({
                            index: 0,
                            routes: [{ name: "HomeStack" }],
                        });
                    }
                })
                .catch(function (error) {
                    alert("Tên tài khoản hoặc mật khẩu sai");
                    dispatch(setUsername(""));
                    dispatch(setPassword(""));
                    console.log(error);
                });
        }
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
                        text="_username_"
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
