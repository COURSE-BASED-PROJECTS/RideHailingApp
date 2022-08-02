import { View, Text, TextInput } from "react-native";
import styles from "./styles";

import { setUsername, setPassword } from "../../screens/Login/accountSlice";
import { useDispatch, useSelector } from "react-redux";
import { accountSelector } from "../../store/selector";

function FormElement(props) {
    const dispatch = useDispatch();
    const { username, password } = useSelector(accountSelector);

    const {
        title = "N/A",
        placeholder = "Nhập thông tin",
        keyboardType = "default",
        secureTextEntry = false,
    } = props;

    const handleInfoAccount = (newText) => {
        if (secureTextEntry) {
            dispatch(setUsername(newText));
        } else {
            dispatch(setPassword(newText));
        }
    };

    return (
        <View style={styles.form}>
            <View style={styles.formElement}>
                <Text style={styles.formElementTitle}>
                    {title} <Text style={{ color: "red" }}>*</Text>
                </Text>
                <View style={styles.formElementContent}>
                    <TextInput
                        style={styles.formTextInput}
                        placeholder={placeholder}
                        keyboardType={keyboardType}
                        secureTextEntry={secureTextEntry}
                        onChangeText={(newText) => {
                            handleInfoAccount(newText);
                        }}
                        value={secureTextEntry ? username : password}
                    />
                </View>
            </View>
        </View>
    );
}

export default FormElement;
