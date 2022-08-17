import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Help() {
    return (
        <View>
            <Header />
            <Footer />
            <Text style={styles.title}>Petunjuk Penggunaan Aplikasi</Text>
            <View style={styles.list}>
                <Text style={styles.textNumber}>1.</Text>
                <Text style={styles.textList}>Buka aplikasi</Text>
            </View>
            <View style={styles.list}>
                <Text style={styles.textNumber}>2.</Text>
                <Text style={styles.textList}>Akan muncul splash screen</Text>
            </View>
            <View style={styles.list}>
                <Text style={styles.textNumber}>3.</Text>
                <Text style={styles.textList}>Selanjutnya aplikasi akan memunculkan menu utama. Dimenu utama ini terdapat empat tombol untuk pindah ke tampilan lain antara tombol mulai, petunjuk, tentang, dan keluar.</Text>
            </View>
            <View style={styles.list}>
                <Text style={styles.textNumber}>4.</Text>
                <Text style={styles.textList}>Tombol "Mulai" berfungsi untuk berpindah ke tampilan daftar pahlawan di Sulawesi Barat. Pada tampilan daftar pahlawan, pengguna dapat memilih salah satu daftar untuk melihat biodata serta sejarah pahlawan yang dipilih.</Text>
            </View>
            <View style={styles.list}>
                <Text style={styles.textNumber}>5.</Text>
                <Text style={styles.textList}>Tombol "Petunjuk" berfungsi untuk berpindah ke tampilan petunjuk penggunaan aplikasi yang berisi tata cara menggunakan aplikasi. </Text>
            </View>
            <View style={styles.list}>
                <Text style={styles.textNumber}>6.</Text>
                <Text style={styles.textList}>Tombol "Tentang" berfungsi untuk berpindah ke tampilan tentang aplikasi yang berisi biodata penulis.</Text>
            </View>
            <View style={styles.list}>
                <Text style={styles.textNumber}>7.</Text>
                <Text style={styles.textList}>Tombol "Keluar" berfungsi untuk menutup aplikasi.</Text>
            </View>
        </View >
    )
}
export default Help

const styles = StyleSheet.create({
    title: {
        alignSelf: "center",
        marginVertical: 30,
        fontWeight: "bold",
        fontSize: 20
    },
    list: {
        flexDirection: "row",
        marginHorizontal: "10%",
        marginBottom: 5,
    },
    textNumber: {

    },
    textList: {
        flex: 1,
        paddingLeft: 5,
        textAlign: "justify"
    }
})