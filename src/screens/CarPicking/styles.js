import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../styles/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bg_primary
    },
    backButton: {
        position: 'absolute',
        top: 10,
        left: 15
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'center',
        marginBottom: 15
    },
    headerTitle: {
        // marginLeft: Dimensions.get('window').width*0.15,
        fontSize: 20,
    },
});

export default styles;
