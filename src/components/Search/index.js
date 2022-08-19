import {
    View,
    TextInput,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import styles from "./styles";

import { searchSelector } from "../../store/selector";
import { useSelector } from "react-redux";

function Search({ type, moveTo }) {
    const { searchStart, searchDes } = useSelector(searchSelector);
    const icon =
        searchStart === ""
            ? "https://cdn-icons-png.flaticon.com/512/149/149852.png"
            : type === "des"
            ? "https://cdn-icons-png.flaticon.com/512/149/149852.png"
            : "https://cdn-icons-png.flaticon.com/512/545/545682.png";

    return (
        <View style={styles.container}>
            <TextInput
                selection={{
                    start: 0,
                    end: 0,
                }}
                style={styles.searchInput}
                placeholder={"Tìm kiếm địa điểm đến"}
                value={type === "start" ? searchStart : searchDes}
                editable={false}
            ></TextInput>
            <TouchableOpacity onPress={moveTo}>
                <Image
                    style={styles.searchIcon}
                    source={{
                        uri: icon,
                    }}
                />
            </TouchableOpacity>
        </View>
    );
}

export default Search;
