import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import HistoryElement from "../../components/HistoryElement";
import { Text, ScrollView } from "react-native";
import { useEffect } from "react";

import { accountSelector } from "../../store/selector";
import { useSelector } from "react-redux";
import { useState } from "react";

import { historyAPI } from "../../service/api";

function History() {
    const { userInfo } = useSelector(accountSelector);
    const [histories, setHistories] = useState([]);

    useEffect(() => {
        if (userInfo?.phonenumber === "" || userInfo?.phonenumber === undefined)
            return;
        else {
            axios
                .get(historyAPI + userInfo?.phonenumber)
                .then(function (response) {
                    if (response.status === 200) {
                        setHistories(response.data);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
        }
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Lịch sử hoạt động</Text>

            {histories.length > 0 ? (
                <ScrollView style={styles.container}>
                    {histories.map((history, index) => {
                        return <HistoryElement history={history} key={index} />;
                    })}
                </ScrollView>
            ) : (
                <Text style={{marginLeft:20}}>Không có lịch sử hoạt động</Text>
            )}
        </SafeAreaView>
    );
}

export default History;
