import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setStart } from "../../store/reducer/travelSlice";

function Home({ navigation }) {
    const [start, setStartPosition] = useState({});
    const dispatch = useDispatch();
    console.log("Home render");

    const moveTo = () => {
        navigation.navigate("Hailing");
    };

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                console.log("Permission to access location was denied");
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            const pos = {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            };

            dispatch(setStart(pos));
            setStartPosition(pos);
        })();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.headerAva}
                    source={require("../../../assets/icons/ava.png")}
                />
                <Text style={styles.headerTitle}>Xin chào, Đức Huy </Text>

                <TouchableOpacity style={styles.headerNotifButton} onPress={moveTo}>
                    <Image
                        source={require("../../../assets/icons/notification.png")}
                        style={styles.headerNotifIcon}
                    />
                    <Text
                        style={{
                            position: "absolute",
                            top: -10,
                            right: -5,
                            fontSize: 18,
                            color: "red",
                            fontWeight: "600",
                        }}
                    >
                        5
                    </Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.title}>BẠN MUỐN ĐI ĐÂU ?</Text>

            <View style={styles.searchInput}>
                {/* <Search /> */}

                {/* <GooglePlacesAutocomplete
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
                    zIndex={1000}
                    // onFail={(error) => console.error(error)}
                    onPress={(data, details = null) => {
                        console.log(details);
                        dispatch(
                            setStart({
                                location: details.geometry.location,
                                description: data.description,
                            })
                        );
                        moveTo();
                    }}
                    placeholder="Nhập điểm đón bạn ?"
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                    fetchDetails={true}
                    enablePoweredByContainer={false}
                    minLength={2}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: "vi",
                    }}
                /> */}
            </View>

            <MapView
                style={styles.currentMapView}
                region={{
                    latitude: start?.latitude ?? 0,
                    longitude: start?.longitude ?? 0,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
                showsUserLocation={true}
                showsTraffic={true}
                userLocationUpdateInterval={5000}
            >
                <Marker
                    coordinate={{
                        latitude: start?.latitude ?? 0,
                        longitude: start?.longitude ?? 0,
                    }}
                />
            </MapView>
        </SafeAreaView>
    );
}

export default Home;
