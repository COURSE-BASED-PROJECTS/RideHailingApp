import { View, Image, KeyboardAvoidingView, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import FormElement from "../../components/FormElement";
import styles from "./styles";
import URL from "../../../assets/Link/URL";

import { useSelector } from "react-redux";
import { accountSelector } from "../../store/selector";

function UserInfo() {
    const userInfo = useSelector(accountSelector);

    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.imgBackground}
                source={{ uri: URL.bg_img_intro }}
            />
            <View style={styles.content}>
                <KeyboardAvoidingView
                    style={styles.formContent}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    enabled={false}
                >
                    <ScrollView>
                        <FormElement
                            title={"SĐT"}
                            // placeholder={"Nhập số điện thoại"}
                            keyboardType={"numeric"}
                            text={userInfo?.phoneNumber}
                            type="info"
                        />

                        <FormElement
                            title={"Họ và tên"}
                            // placeholder={"Nhập họ tên"}
                            text={userInfo?.name}
                            type="info"
                        />

                        <FormElement
                            title={"Tên đăng nhập"}
                            // placeholder={"Nhập mật khẩu"}
                            text={userInfo?.username}
                            type="info"
                        />

                        <FormElement
                            title={"Địa chỉ"}
                            // placeholder={"Nhập Địa chỉ"}
                            text={userInfo.address}
                            type="info"
                        />
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    );
}

export default UserInfo;
