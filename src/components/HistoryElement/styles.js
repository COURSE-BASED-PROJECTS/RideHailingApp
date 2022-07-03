import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../styles/Colors";

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 2,
    elevation: 2,
    width: Dimensions.get("window").width,
    height: 100,
    // backgroundColor: Colors.secondary_light
  },

  historyElement: {
    flexDirection: "row",
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ava: {
    flex: 1,
    width: 35,
    height: 35,
  },
  content: {
    flex: 7,
    margin: 10,
  },
  historyTitle: {
    fontSize: 16,
  },
  histortyTime: {},
  price: {
    flex: 2,
  },
});

export default styles;
