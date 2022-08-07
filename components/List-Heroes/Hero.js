import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native'

function Hero({ item }) {
    const navigation = useNavigation()

    function detailHero() {
        navigation.navigate('DetailHero', {
            id: item.id,
            name: item.name,
            picture: item.picture,
            birth: item.birth,
            placeOfBirth: item.placeOfBirth,
            education: item.education,
            profession: item.profession,
            rip: item.rip,
            history: item.history
        })
    }

    let imageResult = require('../../assets/empty.png')

    switch (item.picture) {
        case "calo.png":
            imageResult = require('../../assets/calo.png')
            break;
        case "maemunah.jpg":
            imageResult = require('../../assets/maemunah.jpg')
            break;
        case "depu.jpg":
            imageResult = require('../../assets/depu.jpg')
            break;
        case "abdurrachman.jpg":
            imageResult = require('../../assets/abdurrachman.jpg')
            break;
        case "djud.jpg":
            imageResult = require('../../assets/djud.jpg')
            break;
        case "riri.png":
            imageResult = require('../../assets/riri.png')
            break;
        case "lopa.jpg":
            imageResult = require('../../assets/lopa.jpg')
            break;
        case "tonra.jpg":
            imageResult = require('../../assets/tonra.jpg')
            break;

        default:
            break;
    }

    return (
        <TouchableOpacity style={styles.item}
            onPress={detailHero}
        >
            <Image
                style={styles.image}
                source={imageResult}
            />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.name}</Text>
                {/* <Text>{item.picture}</Text> */}
                <Text style={styles.textHistory}>{item.history}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Hero

const styles = StyleSheet.create({
    item: {
        marginHorizontal: 20,
        marginVertical: 5,
        flex: 1,
        flexDirection: "row",
        height: 100
    },
    image: {
        top: 5,
        right: 5,
        height: 90,
        width: 90,
    },
    textContainer: {
        marginTop: 10,
        marginBottom: 34,
        marginRight: 80,
        marginLeft: 5
        // backgroundColor: "green",
    },
    title: {
        fontWeight: "bold",
        fontSize: 16
    },
    textHistory: {
        textAlign: "justify"
    }
})