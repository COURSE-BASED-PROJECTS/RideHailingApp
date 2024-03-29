import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

import { GOOGLE_MAPS_APIKEY, GOONG_REST_API } from "@env";
import { geocode } from "../../service/api";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import * as Location from "expo-location";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { setStart } from "../../store/reducer/travelSlice";
import { setSearchStart } from "../../store/reducer/searchSlice";
import { travelSelector, accountSelector } from "../../store/selector";

import Search from "../../components/Search";

function Home({ navigation }) {
    const { start } = useSelector(travelSelector);
    const { userInfo } = useSelector(accountSelector);

    const dispatch = useDispatch();

    const moveTo = () => {
        navigation.navigate("Hailing");
    };

    const handleClickMap = (e) => {
        axios
            .get(geocode, {
                params: {
                    latlng:
                        e.nativeEvent.coordinate.latitude +
                        "," +
                        e.nativeEvent.coordinate.longitude,
                    api_key: GOONG_REST_API,
                },
            })
            .then(function (response) {
                response = response.data;

                if (response.status === "OK") {
                    dispatch(
                        setSearchStart(response.results[0].formatted_address)
                    );
                }
                // console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });

        dispatch(setStart(e.nativeEvent.coordinate));
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
        })();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.headerAva}
                    source={require("../../../assets/icons/ava.png")}
                />
                <Text style={styles.headerTitle}>
                    Xin chào, {userInfo?.name}{" "}
                </Text>

                {/* <TouchableOpacity style={styles.headerNotifButton}>
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
                </TouchableOpacity> */}
            </View>

            <Text style={styles.title}>BẠN MUỐN ĐI ĐÂU ?</Text>

            <View style={styles.searchInput}>
                <Search type={"start"} moveTo={moveTo} />

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
                    onFail={(error) => console.error(error)}
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
                    latitude: start?.latitude ?? 10.7628356,
                    longitude: start?.longitude ?? 106.680293,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
                showsUserLocation={true}
                showsTraffic={true}
                userLocationUpdateInterval={5000}
                onPress={(e) => {
                    handleClickMap(e);
                }}
            >
                {/* <MapViewDirections
                    origin={{ latitude: start?.latitude ?? 0, longitude: start?.longitude ?? 0 }}
                    destination={{
                        latitude: 37.771707,
                        longitude: -122.4053769,
                    }}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="black"
                /> */}

                <Marker
                    coordinate={{
                        latitude: start?.latitude ?? 10.7628356,
                        longitude: start?.longitude ?? 10.7628356,
                    }}
                />
            </MapView>
        </SafeAreaView>
    );
}

export default Home;
