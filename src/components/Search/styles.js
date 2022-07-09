import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../styles/Colors";

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width * 0.8,
        height: 60,
        backgroundColor: Colors.secondary_light,
        borderRadius: 25,
        flexDirection: "row",
        elevation: 15,
        padding: 15,
    },
    searchIcon: {
        width: 30,
        height: 30,
        resizeMode: "contain",
    },
    searchInput: {
        fontSize: 16,
        marginLeft: 5,
    },
});

export default styles;
