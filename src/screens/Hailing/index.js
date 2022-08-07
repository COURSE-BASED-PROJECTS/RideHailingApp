import { View } from "react-native";
import styles from "./styles";
import NavigateCardStackScreen from "../../navigations/NavigateCardScreen";

import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY, GOONG_REST_API } from "@env";
import { geocode } from "../../service/api";

import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
import { travelSelector } from "../../store/selector";
import { setSearchDes } from "../../store/reducer/searchSlice";
import { setDes } from "../../store/reducer/travelSlice";

import axios from "axios";

function Hailing() {
    const { start, des } = useSelector(travelSelector);
    const mapRef = useRef(null);
    const dispatch = useDispatch();

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
                    console.log(response.results[0].formatted_address);
                    dispatch(
                        setSearchDes(response.results[0].formatted_address)
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

        dispatch(setDes(e.nativeEvent.coordinate));
    };

    useEffect(() => {
        if (!start || !des) return;

        mapRef.current.fitToSuppliedMarkers(["start", "des"], {
            edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
        });
    }, [start, des]);

    return (
        <View style={styles.container}>
            <View style={styles.map}>
                <MapView
                    ref={mapRef}
                    style={styles.currentMapView}
                    mapType="mutedStandard"
                    initialRegion={{
                        latitude: start?.latitude,
                        longitude: start?.longitude,
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
                    {/* {start && des && (
                        <MapViewDirections
                            origin={start.description}
                            destination={des.description}
                            apikey={GOOGLE_MAPS_APIKEY}
                            strokeWidth={3}
                            strokeColor="black"
                        />
                    )} */}

                    {start?.latitude && (
                        <Marker
                            coordinate={{
                                latitude: start?.latitude,
                                longitude: start?.longitude,
                            }}
                            identifier="start"
                        />
                    )}

                    {des?.longitude && (
                        <Marker
                            coordinate={{
                                latitude: des?.latitude,
                                longitude: des?.longitude,
                            }}
                            identifier="des"
                        />
                    )}
                </MapView>
            </View>
            <View style={styles.hailingContent}>
                <NavigateCardStackScreen />
            </View>
        </View>
    );
}

export default Hailing;
