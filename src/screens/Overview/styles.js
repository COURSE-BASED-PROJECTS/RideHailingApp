import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg_primary
  },
  imgBackground: {
    flex: 5,
    resizeMode: "contain",
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
    color: Colors.primary,
  },
  subTitle: {
    marginTop: 16,
    textAlign: 'center',
    fontWeight: '500',
  },
  header: {
    flex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
  },
  button: {
    flex: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
