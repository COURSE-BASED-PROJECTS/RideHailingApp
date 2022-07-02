import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../styles/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg_primary,
  },
  header: {
    flex: 1.5,
    paddingLeft: 30,
  },
  title: {
    fontSize: 25,
  },
  button: {
    flex: 0.5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 40,
  },
  imgBackground: {
    flex: 5,
    resizeMode: "contain",
  },
  breakLine:{
    marginTop: 5,
    width: 200,
    height: 1,
    backgroundColor: 'black',
  },
  formContent: {
    flex: 7.5,
  }

});

export default styles;
