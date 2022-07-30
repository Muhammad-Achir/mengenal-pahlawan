import React from "react";
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "../components/Header";
import ContainerMenu from "../components/menu/ContainerMenu";

function MainMenu() {
    return (
        <View style={styles.main}>
            <Header />
            <View>
                <View style={styles.flagRed}></View>
                <View style={styles.flagWhite}></View>
            </View>
            <ContainerMenu />
        </View>
    )
}

export default MainMenu

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#A6D1E6"
    },
    flagRed: {
        height: 50,
        backgroundColor: "red",
        zIndex: 0
    },
    flagWhite: {
        height: 50,
        backgroundColor: "white",
        zIndex: 0
    },
})