import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import Search from "../../components/Search";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// import { GOOGLE_MAPS_APIKEY } from "@env";
import MapView, { Marker } from "react-native-maps";
import { useSelector, useDispatch } from "react-redux";
import { setStart } from "../../store/actions";
import { useEffect, useState } from "react";
import * as Location from 'expo-location';

function Home() {
    const [start, setStartPosition] = useState({})
    const dispatch = useDispatch();

    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.log('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        console.log(location.coords)
        const pos = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        }

        dispatch(setStart(pos));
        setStartPosition(pos)
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

                <TouchableOpacity style={styles.headerNotifButton}>
                    <Image
                        source={require("../../../assets/icons/notification.png")}
                        style={styles.headerNotifIcon}
                    />
                </TouchableOpacity>
            </View>

            <Text style={styles.title}>BẠN MUỐN ĐI ĐÂU ?</Text>

            <View style={styles.searchInput}>
                <Search />
            </View>

            <MapView
                style={styles.currentMapView}
                region={{
                    latitude: start?.latitude ?? 0,
                    longitude: start?.longitude ?? 0,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
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

            {/* <GooglePlacesAutocomplete
        styles={{
          container: {
            flex: 0,
            width: 300,
            height: 100,
            zIndex: 99
          },
          textInput: {
            fontSize: 18
          }
        }}
        placeholder="Where from ?"
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: 'vi',
        }}
      /> */}
        </SafeAreaView>
    );
}

export default Home;
