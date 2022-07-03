import { View, TextInput, Image } from "react-native";
import styles from "./styles";

function Search() {
  return (
    <View style={styles.container}>
      <Image style={styles.searchIcon} 
      source={require("../../../assets/icons/search.png")}/>
      <TextInput
        style={styles.searchInput}
        placeholder={"Tìm kiếm địa điểm đến"}
      ></TextInput>
    </View>
  );
}

export default Search;
