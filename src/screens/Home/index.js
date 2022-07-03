import { View, Text } from "react-native";
import styles from "./styles";
import Search from "../../components/Search";

function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Search/>
    </View>
  );
}

export default Home;
