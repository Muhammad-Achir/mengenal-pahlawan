import React, { useEffect } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import Logo from '../assets/splash.png'

function SplashScreen({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Main Menu')
        }, 1)
    }, [])

    return (
        <View style={styles.main}>
            <Text style={styles.textTitle}>Pengenalan Nama Pahlawan Sulawesi Barat</Text>
            <Text style={styles.textName}>Nurakdana</Text>
        </View>
    )
}
export default SplashScreen

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center"
    },
    textTitle: {
        marginTop: "90%",
        fontSize: 34,
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