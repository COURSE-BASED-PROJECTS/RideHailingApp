import { StyleSheet, Dimensions} from "react-native";
import Colors from "../../styles/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bg_primary,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
    },
    header:{
        flex: 1,
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerAva:{
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    headerTitle:{
        fontSize: 20,
        marginHorizontal: 40
    },
    headerNotifButton:{

    },
    headerNotifIcon:{
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    title:{
        flex: 1,
        fontSize: 32,
        fontWeight: "500",
        marginTop: 30
    },
    searchInput:{
        flex: 1
    },
    currentMapView:{
        flex: 5,
        width: Dimensions.get('window').width*0.98,
        height: 'auto',
        margin: 25,
    }
});

export default styles;
