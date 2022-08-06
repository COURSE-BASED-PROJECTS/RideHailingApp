import { Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

import { setDes } from "../../store/reducer/travelSlice";
import { useDispatch } from "react-redux";

function Destination({ navigation }) {
    const dispatch = useDispatch();

    const handleMove = () => {
        navigation.navigate("CarPicking");
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Chào buổi sáng, Đức Huy</Text>
            {/* <Search /> */}

            <GooglePlacesAutocomplete
                styles={{
                    container: {
                        flex: 0,
                        width: 300,
                        height: 100,
                        zIndex: 99,
                    },
                    textInput: {
                        fontSize: 18,
                    },
                }}
                onPress={(data, details = null) => {
                    dispatch(
                        setDes({
                            location: details.geometry.location,
                            description: data.description,
                        })
                    );
                }}
                placeholder="Tìm kiếm địa điểm đến ?"
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
                fetchDetails={true}
                enablePoweredByContainer={false}
                minLength={2}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: "vi",
                }}
            />

            <TouchableOpacity
                style={styles.pickingCarButton}
                onPress={handleMove}
            >
                <Image
                    source={require("../../../assets/icons/car.png")}
                    style={{
                        width: 40,
                        height: 40,
                        resizeMode: "contain",
                    }}
                    tintColor="white"
                />
                <Text style={{ fontSize: 18, marginLeft: 10, color: "white" }}>
                    Chọn xe
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Destination;
