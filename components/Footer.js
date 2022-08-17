import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function Footer() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={require('../assets/bg-v4.png')}
            />
            <Text>essss</Text>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "yellow"
    },
    img: {
        position: "absolute",
        top: 380,
        height: 300,
        width: 300,
    }
})