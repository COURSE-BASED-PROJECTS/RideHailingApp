import { StyleSheet } from 'react-native'
import Colors from "../../styles/Colors";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title:{
        fontSize: 24,
        marginBottom: 30
    },
    pickingCarButton: {
        width: 160,
        height: 60,
        position: 'absolute',
        bottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 30,
    },

})

export default styles;