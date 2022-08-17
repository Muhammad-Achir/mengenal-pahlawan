import React, { useEffect } from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function SplashScreen({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            toMain()
        }, 2000)
    }, [])

    function toMain() {
        navigation.navigate('MainMenu')
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={toMain}
        >
            <ImageBackground
                style={styles.bg}
                source={require('../assets/splashSulawesi.png')}
            >
                <View style={styles.main}>
                    <View style={styles.topBar}></View>
                    <Text style={styles.textTitle}>Pengenalan Nama-Nama Pahlawan Sulawesi Barat</Text>
                    <Text style={styles.textName}>Nurakdana</Text>
                    <View style={styles.bottomBar}></View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}
export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#800000"
    },
    bg: {
        flex: 1,
        marginVertical: 60,
    },
    main: {
        flex: 1,
        alignItems: "center"
    },
    topBar: {
        backgroundColor: "red",
        height: 5,
        width: "100%",
    },
    textTitle: {
        marginTop: "6%",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center"
    },
    textName: {
        position: "absolute",
        fontSize: 24,
        bottom: "5%",
        left: "5%"
    },
    bottomBar: {
        backgroundColor: "red",
        height: 5,
        width: "100%",
        bottom: 0,
        position: "absolute"
    }
})