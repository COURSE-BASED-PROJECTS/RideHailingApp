import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg_primary,
  },
  button: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 40,
  },
  imgBackground: {
    flex: 8,
    resizeMode: "contain",
  },

  formContent: {
    flex: 3,
  }

});

export default styles;
