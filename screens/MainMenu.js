import React from "react";
import { Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "../components/Header";
import ContainerMenu from "../components/menu/ContainerMenu";

function MainMenu({ navigation }) {
    return (
        <View style={styles.main}>
            <ImageBackground
                style={styles.img}
                source={require('../assets/bg-v3.jpeg')}
            >
                <Header />
                <ContainerMenu navigation={navigation} />
            </ImageBackground>
        </View>
    )
}

export default MainMenu

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#A6D1E6"
    },
    img: {
        flex: 1,
    }
})