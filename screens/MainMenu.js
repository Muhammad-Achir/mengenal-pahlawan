import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

function MainMenu() {
    return (
        <View style={styles.main}>
            <View>
                <View style={styles.flagRed}></View>
                <View style={styles.flagWhite}></View>
            </View>
            <Text style={styles.textTitle}>Nama Nama Pahlawan Indonesia</Text>
            <View>

            </View>
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
        height: 100,
        backgroundColor: "red"
    },
    flagWhite: {
        height: 100,
        backgroundColor: "white"
    },
    textTitle: {
        marginVertical: "30%",
        alignSelf: "center",
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold"
    }
})