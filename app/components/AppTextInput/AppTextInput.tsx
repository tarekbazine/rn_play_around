import {StyleSheet, View} from "react-native";
import SearchIcon from "../../../assets/svg/search.svg";
import React from "react";
import AppText from "../AppText/AppText";
import SizedBox from "../SizedBox/SizedBox";


/**
 * TODO implement me
 * Just a place holder for a text input
 */
export default function AppTextInput() {

    return (
        <View style={styles.container}>
            <SearchIcon/>
            <SizedBox width={10}/>
            <AppText color={'secondary'} size={'M'} bold={true}>Search</AppText>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        borderRadius: 30,
        paddingHorizontal: 35,
        paddingVertical: 20,
        backgroundColor: '#EFEEEE',
        flexDirection: "row",
        alignContent: 'center'
    },
});