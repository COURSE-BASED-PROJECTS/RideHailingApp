import { View, Text, TextInput } from "react-native";
import styles from "./styles";

import {
    setUsername,
    setPassword,
    setRegisterInfo,
} from "../../store/reducer/accountSlice";
import { useDispatch, useSelector } from "react-redux";
import { accountSelector } from "../../store/selector";

function FormElement(props) {
    const dispatch = useDispatch();
    const { username, password, registerInfo } = useSelector(accountSelector);

    const {
        title = "N/A",
        placeholder = "Nhập thông tin",
        keyboardType = "default",
        secureTextEntry = false,
        text = "default",
        type = "login",
        register = "",
    } = props;

    const handleInfoAccount = (newText) => {
        if (type === "login") {
            if (secureTextEntry) {
                dispatch(setPassword(newText));
            } else {
                dispatch(setUsername(newText));
            }
        } else {
            dispatch(setRegisterInfo({ newText, type: register }));
        }
    };

    let valueText = "";

    if (type === "login") {
        if (secureTextEntry) {
            valueText = password;
        } else if (text === "_username_") {
            valueText = username;
        } else {
        }
    } else if (type === "register") {
        valueText = registerInfo[register];
    } else if (type === "info") {
        valueText = text;
    }

    return (
        <View style={styles.form}>
            <View style={styles.formElement}>
                <Text style={styles.formElementTitle}>
                    {title} <Text style={{ color: "red" }}>*</Text>
                </Text>
                <View style={styles.formElementContent}>
                    <TextInput
                        editable={type === "info" ? false : true}
                        style={styles.formTextInput}
                        placeholder={type === "info" ? "......" : placeholder}
                        keyboardType={keyboardType}
                        secureTextEntry={secureTextEntry}
                        onChangeText={(newText) => {
                            handleInfoAccount(newText);
                        }}
                        value={valueText}
                        // selection={{
                        //     start: 0,
                        //     end: 0,
                        // }}
                    />
                </View>
            </View>
        </View>
    );
}

export default FormElement;
