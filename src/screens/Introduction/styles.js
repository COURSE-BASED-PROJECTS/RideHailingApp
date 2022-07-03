import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg_primary
  },
  header: {
    flex: 2,
    padding: 30,
  },
  title: {
    fontSize: 40,
  },
  subTitle: {
    marginTop: 15,
  },
  button: {
    flex: 1,
    marginLeft: 30,
  },
  imgBackground:{
    flex: 6,
    resizeMode: 'contain'
  }
});

export default styles;