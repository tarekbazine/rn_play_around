import {StyleSheet, View} from "react-native";
import React from "react";

import ShoppingCartIcon from "../../assets/svg/shopping-cart.svg";
import MenuIcon from "../../assets/svg/menu.svg";

export default function AppBar() {
    return (
        <View style={styles.container}>
            <MenuIcon/>
            <ShoppingCartIcon/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ac2626',
        flexDirection: "row",
        justifyContent  : 'space-between'
    },
});
