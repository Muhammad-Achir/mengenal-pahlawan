import React from "react";
import { FlatList, StyleSheet, View, Text, ScrollView, SafeAreaView, Image } from "react-native";
import { Cell, Row, Rows, Table } from "react-native-table-component";
import Footer from "../components/Footer";
import Header from "../components/Header";

function DetailHero({ route }) {
    const data = route.params

    let imageResult = require('../assets/empty.png')

    switch (data.picture) {
        case "calo.png":
            imageResult = require('../assets/calo.png')
            break;
        case "maemunah.jpg":
            imageResult = require('../assets/maemunah.jpg')
            break;
        case "depu.jpg":
            imageResult = require('../assets/depu.jpg')
            break;
        case "abdurrachman.jpg":
            imageResult = require('../assets/abdurrachman.jpg')
            break;
        case "djud.jpg":
            imageResult = require('../assets/djud.jpg')
            break;
        case "riri.png":
            imageResult = require('../assets/riri.png')
            break;
        case "lopa.jpg":
            imageResult = require('../assets/lopa.jpg')
            break;
        case "tonra.jpg":
            imageResult = require('../assets/tonra.jpg')
            break;

        default:
            break;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView style={styles.scrollView}>
                <View style={styles.content}>
                    <Image
                        style={styles.image}
                        // source={require('../assets/empty.png')}
                        source={imageResult}
                    />
                    <Text style={styles.title}>Biodata Pahlawan</Text>
                    <View style={styles.list}>
                        <Text style={styles.textNumber}>Nama</Text>
                        <Text style={styles.textList}>: {data.name}</Text>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.textNumber}>TTL</Text>
                        <Text style={styles.textList}>: {data.placeOfBirth}, {data.birth}</Text>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.textNumber}>Pendidikan</Text>
                        <Text style={styles.textList}>: {data.education}</Text>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.textNumber}>Profesi</Text>
                        <Text style={styles.textList}>: {data.profession}</Text>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.textNumber}>Wafat</Text>
                        <Text style={styles.textList}>: {data.rip}</Text>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.textNumber}>Sejarah:</Text>
                    </View>
                    <Text style={styles.textHistory}>{data.history}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default DetailHero

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        paddingHorizontal: 10,
        // backgroundColor: "green"
    },
    content: {
        marginBottom: 40
    },
    image: {
        marginTop: 20,
        height: 300,
        width: 250,
        alignSelf: "center"
    },
    title: {
        alignSelf: "center",
        marginVertical: 10,
        fontWeight: "bold",
        fontSize: 25
    },
    list: {
        flexDirection: "row",
        marginLeft: "7%",
        marginBottom: 5,
    },
    textNumber: {
        width: "30%"
    },
    textList: {
        flex: 1,
        paddingLeft: 5,
        textAlign: "justify"
    },
    textHistory: {
        marginHorizontal: 10,
        marginBottom: 20,
        textAlign: "justify"
    }
})