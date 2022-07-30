import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

function SplashScreen({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Main Menu')
        }, 2000)
    }, [])

    return (
        <View style={styles.main}>
            <Text style={styles.textTitle}>Pengenalan Nama-Nama Pahlawan Sulawesi Barat</Text>
            <Text style={styles.textName}>Nurakdana</Text>
        </View>
    )
}
export default SplashScreen

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        padding: "5%"
    },
    textTitle: {
        marginTop: "70%",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center"
    },
    textName: {
        position: "absolute",
        fontSize: 24,
        bottom: "5%",
        left: "5%"
    }
})