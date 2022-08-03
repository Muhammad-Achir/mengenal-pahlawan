import React from "react";
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "../components/Header";
import ContainerMenu from "../components/menu/ContainerMenu";

function MainMenu({ navigation }) {
    return (
        <View style={styles.main}>
            <Header />
            <ContainerMenu navigation={navigation} />
        </View>
    )
}

export default MainMenu

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#A6D1E6"
    },
})