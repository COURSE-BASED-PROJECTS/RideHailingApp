import { StyleSheet, Dimensions} from "react-native";
import Colors from "../../styles/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bg_primary,
    },
    map:{
        flex: 1,
        backgroundColor: Colors.secondary_light,
    },
    hailingContent:{
        flex: 1.4,
        backgroundColor: Colors.secondary_medium,
    }
    
});

export default styles;
