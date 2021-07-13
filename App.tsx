import React from 'react';
import Home from "./app/pages/Home";
import {Platform, SafeAreaView, StatusBar, StyleSheet, Text, View} from "react-native";
import AppBar from "./app/components/AppBar/AppBar";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <AppBar/>

            <Home/>

            <View>
                <Text>Footer</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
});