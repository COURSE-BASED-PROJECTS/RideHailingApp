import { View, Text, TextInput } from "react-native";
import styles from "./styles";

function FormElement(props){
    const {title="N/A", placeholder="Nhập thông tin", keyboardType="default", secureTextEntry=false} = props

    return(
      <View style={styles.form}>
        <View style={styles.formElement}>
          <Text style={styles.formElementTitle}>{title} <Text style={{color: 'red'}}>*</Text></Text>
          <View style={styles.formElementContent}>
            <TextInput
              style={styles.formTextInput}
              placeholder={placeholder}
              keyboardType={keyboardType}
              secureTextEntry={secureTextEntry}
            />
          </View>
        </View>
      </View>
    )
}

export default FormElement;