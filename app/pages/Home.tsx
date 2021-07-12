import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppBar from "../components/AppBar";

export default function Home() {
    return (
        <View style={styles.container}>

            <AppBar/>

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
});
