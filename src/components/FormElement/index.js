import { View, Text, TextInput } from "react-native";
import styles from "./styles";

import { setUsername, setPassword } from "../../screens/Login/accountSlice";
import { useDispatch } from "react-redux";

function FormElement(props) {
    const dispatch = useDispatch();

    const {
        title = "N/A",
        placeholder = "Nhập thông tin",
        keyboardType = "default",
        secureTextEntry = false,
    } = props;

    const handleInfoAccount = (e) => {
        if (secureTextEntry) {
            dispatch(setUsername(e.target.value));
        } else {
            dispatch(setPassword(e.target.value));
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
                        onChange={(e) => {
                            handleInfoAccount(e);
                        }}
                    />
                </View>
            </View>
        </View>
    );
}

export default FormElement;
