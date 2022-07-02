import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

function Button(props) {
  const { textInside, style } = props;

  return (
    <TouchableOpacity style={[styles.button, style]}>
      <Text style={styles.textButton}>{textInside}</Text>
    </TouchableOpacity>
  );
}

export default Button;
