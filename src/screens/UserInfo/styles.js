import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../styles/Colors';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.bg_primary,
        display: 'flex',
    },
    imgBackground:{
        flex: 5,
        resizeMode: "contain"
    },
    content:{
        flex: 5,
        width: Dimensions.get('window').width*0.8,
        alignSelf: 'center',
        elevation: 10,
        marginBottom: 20,
        backgroundColor: Colors.secondary_light,
        paddingTop: 20,
        borderRadius: 10
    }
})

export default styles;