import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";

function About() {
    return (
        <View>
            <Header />
            <Text style={styles.title}>Biodata Penulis</Text>
            <Image
                style={styles.image}
                source={require('../assets/empty.png')}
            />
            <View style={styles.list}>
                <Text style={styles.textNumber}>Nama</Text>
                <Text style={styles.textList}>: Nurakdana</Text>
            </View>
            <View style={styles.list}>
                <Text style={styles.textNumber}>TTL</Text>
                <Text style={styles.textList}>: Mamuju, 27 Februari 2000</Text>
            </View>
            <View style={styles.list}>
                <Text style={styles.textNumber}>Agama</Text>
                <Text style={styles.textList}>: Islam</Text>
            </View>
        </View>
    )
}
export default About

const styles = StyleSheet.create({
    title: {
        alignSelf: "center",
        marginVertical: 30,
        fontWeight: "bold",
        fontSize: 20
    },
    image: {
        marginBottom: 40,
        height: 200,
        width: 150,
        alignSelf: "center"
    },
    list: {
        flexDirection: "row",
        marginHorizontal: "15%",
        marginBottom: 5,
    },
    textNumber: {
        width: "30%"
    },
    textList: {
        flex: 1,
        paddingLeft: 5,
        textAlign: "justify"
    }
})