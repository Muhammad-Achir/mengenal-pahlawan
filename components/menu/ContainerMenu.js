import { StyleSheet, Text, View } from "react-native"
import ButtonMain from "./ButtonMain"

function ContainerMenu() {
    return (
        <View>
            <Text style={styles.textTitle}>Nama-Nama Pahlawan Sulawesi Barat</Text>
            <View style={styles.container}>
                <ButtonMain title={"Mulai"} />
                <ButtonMain title={"Petunjuk"} />
                <ButtonMain title={"Tentang"} />
                <ButtonMain title={"Keluar"} />
            </View>
        </View>
    )
}

export default ContainerMenu

const styles = StyleSheet.create({
    textTitle: {
        marginVertical: "30%",
        alignSelf: "center",
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
    },
    container: {
        margin: "10%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        top: "-20%"
    },
})