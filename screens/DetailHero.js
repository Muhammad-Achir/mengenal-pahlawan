import React from "react";
import { FlatList, StyleSheet, View, Text, ScrollView, SafeAreaView, Image } from "react-native";
import { Cell, Row, Rows, Table } from "react-native-table-component";
import Header from "../components/Header";

function DetailHero({ route }) {
    const data = route.params

    const bio = [
        ["Nama", ": " + data.name],
        ["Tempat, Tanggal lahir", ": " + data.placeOfBirth + ", " + data.birth],
        ["Pendidikan", ": " + data.education],
        ["Profesi", ": " + data.profession],
        ["Meninggal", ": " + data.rip]
    ]

    let imageResult = require('../assets/empty.png')

    switch (data.picture) {
        case "calo.png":
            imageResult = require('../assets/calo.png')
            break;
        case "maemunah.jpg":
            imageResult = require('../assets/maemunah.jpg')
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
                    <Text>{data.picture}</Text>
                    <Table style={styles.bio}>
                        <Rows
                            data={bio}
                            textStyle={styles.bioRow}
                        />
                    </Table>
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
    bio: {
        marginHorizontal: 20
    },
    bioRow: {
        marginVertical: 5,
    },
    textHistory: {
        marginHorizontal: 10,
        marginBottom: 20,
        textAlign: "justify"
    }
})