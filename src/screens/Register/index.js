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

import { accountSelector } from "../../store/selector";
import { useSelector, useDispatch } from "react-redux";
import { setRegisterInfo } from "../../store/reducer/accountSlice";

import { registerAPI } from "../../service/api";

import axios from "axios";
import { useEffect } from "react";

function RegisterScreen({ navigation }) {
    const dispatch = useDispatch();

    const { registerInfo } = useSelector(accountSelector);

    const handleSubmit = () => {
        console.log(registerInfo);

        if (
            registerInfo.phoneNumber &&
            registerInfo.password &&
            registerInfo.name &&
            registerInfo.address
        ) {
            axios
                .post(registerAPI, {
                    ...registerInfo,
                    role: "DRIVER",
                    avatar: "",
                    isLocked: false,
                    username: registerInfo?.phoneNumber,
                })
                .then(function (response) {
                    console.log(response.data);

                    if (response.status === 200) {
                        dispatch(setRegisterInfo({}));

                        navigation.reset({
                            index: 0,
                            routes: [{ name: "Login" }],
                        });
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    alert("Tài khoản đã tồn tại");
                });
        } else {
            alert("Nhập đầy đủ thông tin đăng ký");
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
            <View style={styles.header}>
                <Text style={styles.title}>Đăng ký tài khoản </Text>
                <View style={styles.breakLine}></View>
            </View>

            <KeyboardAvoidingView
                style={styles.formContent}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                enabled={false}
            >
                <ScrollView>
                    {/* <FormElement
                        title={"Tên đăng nhập"}
                        placeholder={"Nhập tên đăng nhập"}
                        type="register"
                        register="username"
                    /> */}

                    <FormElement
                        title={"SĐT"}
                        placeholder={"Nhập số điện thoại"}
                        keyboardType={"numeric"}
                        type="register"
                        register="phoneNumber"
                    />

                    <FormElement
                        title={"Mật khẩu"}
                        placeholder={"Nhập mật khẩu"}
                        secureTextEntry={true}
                        type="register"
                        register="password"
                    />

                    <FormElement
                        title={"Họ và tên"}
                        placeholder={"Nhập họ tên"}
                        type="register"
                        register="name"
                    />

                    <FormElement
                        title={"Địa chỉ nhà"}
                        placeholder={"Nhập địa chỉ nhà"}
                        type="register"
                        register="address"
                    />
                </ScrollView>
            </KeyboardAvoidingView>

            <View style={styles.button}>
                <Button
                    textInside={"Đăng ký"}
                    style={{ width: 200, height: 50 }}
                    handleClick={handleSubmit}
                />
            </View>
        </SafeAreaView>
    );
}

export default RegisterScreen;
