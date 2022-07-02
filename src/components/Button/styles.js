import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors";

const styles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: Colors.primary
  },
  textButton: {
    color: "#fff",
    fontSize: 18,
  },
});

export default styles;
