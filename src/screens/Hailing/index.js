import { View } from "react-native";
import styles from "./styles";
import NavigateCardStackScreen from "../../navigations/NavigateCardScreen";

import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";

import { useSelector } from "react-redux";
import { useRef, useEffect } from "react";
import { travelSelector } from "../../store/selector";

function Hailing() {
    const { start, des } = useSelector(travelSelector);
    const mapRef = useRef(null);

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
                        latitude: start?.location.lat,
                        longitude: start?.location.lng,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                    }}
                    showsUserLocation={true}
                    showsTraffic={true}
                    userLocationUpdateInterval={5000}
                >
                    {start && des && (
                        <MapViewDirections
                            origin={start.description}
                            destination={des.description}
                            apikey={GOOGLE_MAPS_APIKEY}
                            strokeWidth={3}
                            strokeColor="black"
                        />
                    )}

                    {start?.location.lat && (
                        <Marker
                            coordinate={{
                                latitude: start?.location.lat,
                                longitude: start?.location.lng,
                            }}
                            identifier="start"
                        />
                    )}

                    {des?.location.lat && (
                        <Marker
                            coordinate={{
                                latitude: des?.location.lat,
                                longitude: des?.location.lng,
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
