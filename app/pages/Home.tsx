import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppBar from "../components/AppBar/AppBar";
import AppText from "../components/AppText/AppText";
import {H_PADDING} from "../styles";

export default function Home() {
    return (
        <View style={styles.container}>

            <AppBar/>

            <View style={styles.paddedContent}>


                <AppText bold={true} size={'XL'}>
                    Delicious
                </AppText>
                <AppText bold={true} size={'XL'}>
                    food for you
                </AppText>


            </View>

            <View>

            </View>


            <Text>Open up App.tsx to start working on your app!</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    paddedContent: {
        paddingHorizontal: H_PADDING
    }
});
