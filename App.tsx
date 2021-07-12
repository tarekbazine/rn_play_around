import React from 'react';
import Home from "./app/pages/Home";
import {Platform, SafeAreaView, StatusBar, StyleSheet} from "react-native";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Home/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
});