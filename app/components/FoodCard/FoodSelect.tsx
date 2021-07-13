import {Image, StyleSheet, View} from "react-native";
import React from "react";
import {Product} from "../../models/product.interface";
import AppText from "../AppText/AppText";
import SizedBox from "../SizedBox/SizedBox";

export default function FoodCard({product}: { product: Product }) {

    // TODO s :
    //  format price, currency

    return (
        <View style={styles.container}>

            <Image style={styles.image} source={{uri: product.imgSrc}}/>

            <View style={styles.contentContainer}>
                <AppText size={'L'} bold={true} textAlignCenter={true}>{product.name}</AppText>
                <SizedBox height={10}/>
                <AppText color={"active"} bold={true}>{product.price.toFixed(2)}€</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    contentContainer: {
        paddingTop: 145,

        position: 'relative',
        top: -100,

        backgroundColor: '#fff',
        borderRadius: 30,

        height: 270,
        width: 220,

        alignItems: 'center'

        // TODO shadow
    },
    image: {
        height: 165,
        width: 165,
        borderRadius: 165 / 2,

        zIndex: 1,
    }
});