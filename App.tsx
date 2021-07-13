import React from 'react';
import Home from "./app/pages/Home";
import {Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet} from "react-native";
import AppBar from "./app/components/AppBar/AppBar";
import AppFooter from "./app/components/AppFooter/AppFooter";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <AppBar/>

            <ScrollView showsHorizontalScrollIndicator={false}>
                <Home/>
            </ScrollView>

            <AppFooter/>
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