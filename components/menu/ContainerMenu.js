import { useState } from "react";
import { BackHandler, StyleSheet, Text, View } from "react-native"
import AwesomeAlert from "react-native-awesome-alerts";
import ButtonMain from "./ButtonMain"

function ContainerMenu({ navigation }) {
    const [showAlert, setShowAlert] = useState(false)

    function btnShowAlert() {
        setShowAlert(true)
    }

    function hideAlert() {
        setShowAlert(false)
    }

    function exit() {
        BackHandler.exitApp()
    }

    return (
        <View>
            <Text style={styles.textTitle}>Nama-Nama Pahlawan Sulawesi Barat</Text>
            <View style={styles.container}>
                <ButtonMain
                    screenName="ListHeroes"
                    navigation={navigation}
                    title={"Mulai"}
                />
                <ButtonMain
                    screenName="Help"
                    navigation={navigation}
                    title={"Petunjuk"}
                />
                <ButtonMain
                    screenName="About"
                    navigation={navigation}
                    title={"Tentang"}
                />
                <ButtonMain
                    screenName="Exit"
                    navigation={navigation}
                    title={"Keluar"}
                    btnShowAlert={btnShowAlert}
                />
            </View>

            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                // title="AwesomeAlert"
                message="Anda yakin ingin keluar?"
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="No"
                confirmText="Yes"
                confirmButtonColor="#DD6B55"
                onCancelPressed={() => {
                    hideAlert();
                }}
                onConfirmPressed={() => {
                    exit();
                }}
            />
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