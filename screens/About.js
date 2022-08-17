import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";

function About() {
    return (
        <View>
            <Header />
            <Text style={styles.title}>Biodata Penulis</Text>
            <Image
                style={styles.image}
                source={require('../assets/profile.jpeg')}
            />
            <View style={styles.list}>
                <Text style={styles.textNumber}>Nama Lengkap</Text>
                <Text style={styles.textList}>: Nurakdana</Text>
            </View>
            <View style={styles.list}>
                <Text style={styles.textNumber}>Nama Panggilan</Text>
                <Text style={styles.textList}>: Dana</Text>
            </View>
            <View style={styles.list}>
                <Text style={styles.textNumber}>TTL</Text>
                <Text style={styles.textList}>: Mamuju, 24 November 2000</Text>
            </View>
            <View style={styles.list}>
                <Text style={styles.textNumber}>Jenis Kelamin</Text>
                <Text style={styles.textList}>: Perempuan</Text>
            </View>
            <View style={styles.list}>
                <Text style={styles.textNumber}>Alamat</Text>
                <Text style={styles.textList}>: Mamuju</Text>
            </View>
            <View style={styles.list}>
                <Text style={styles.textNumber}>Agama</Text>
                <Text style={styles.textList}>: Islam</Text>
            </View>
            <View style={styles.list}>
                <Text style={styles.textNumber}>Zodiac</Text>
                <Text style={styles.textList}>: Sagitarius</Text>
            </View>
            <View style={styles.list}>
                <Text style={styles.textNumber}>Kampus</Text>
                <Text style={styles.textList}>: Universitas Tomakaka</Text>
            </View>
            <View style={styles.list}>
                <Text style={styles.textNumber}>Fakultas</Text>
                <Text style={styles.textList}>: Ilmu Komputer</Text>
            </View>
            <View style={styles.list}>
                <Text style={styles.textNumber}>Jurusan</Text>
                <Text style={styles.textList}>: Sistem Informasi</Text>
            </View>
            <View style={styles.list}>
                <Text style={styles.textNumber}>email</Text>
                <Text style={styles.textList}>: danadg624@gmail.com</Text>
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
        marginLeft: "7%",
        marginBottom: 5,
    },
    textNumber: {
        width: "40%"
    },
    textList: {
        flex: 1,
        paddingLeft: 5,
        textAlign: "justify"
    }
})