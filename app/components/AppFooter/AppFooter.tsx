import {StyleSheet, View} from "react-native";
import React from "react";

import HeartIcon from "../../../assets/svg/heart.svg";
import UserIcon from "../../../assets/svg/user.svg";
import HistoryIcon from "../../../assets/svg/ic_sharp-history.svg";
import HomeIcon from "../../../assets/svg/heroicons-solid_home.svg";
import {H_PADDING, V_PADDING} from "../../styles";

export default function AppFooter() {
    return (
        <View style={styles.container}>
            <HomeIcon/>
            <HeartIcon/>
            <UserIcon/>
            <HistoryIcon/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        paddingVertical: V_PADDING / 2,
        paddingHorizontal: H_PADDING,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});
