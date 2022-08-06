import { StyleSheet, Dimensions } from 'react-native'
import Colors from "../../styles/Colors";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
    },
    infoHailing: {
        width: 0.85*Dimensions.get("window").width,
        height: 0.35*Dimensions.get("window").height,
        backgroundColor: Colors.secondary_light,

        elevation: 10,
        marginTop: 10,
        padding: 20,
    },
    titleInfo: {
        fontSize: 18,
        fontWeight: "500",
        marginTop: 10
    },
    infoContent:{
        marginLeft: 10,
        flexWrap: "wrap"
    }

})

export default styles;