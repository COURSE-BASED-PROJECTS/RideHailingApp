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
        display: "flex",
        justifyContent: "space-between",
    },
    searchIcon: {
        width: 30,
        height: 30,
        resizeMode: "contain",
        minWidth: 30,
        marginHorizontal: 10,
    },
    searchInput: {
        maxWidth: Dimensions.get("window").width * 0.8 - 70,
        fontSize: 18,
        marginLeft: 5,
    },
});

export default styles;
