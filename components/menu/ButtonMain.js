import { BackHandler, StyleSheet, Text, TouchableOpacity, View } from "react-native"

function ButtonMain(props) {
    let screenName = props.screenName
    let navigation = props.navigation
    let title = props.title

    function goTo() {
        if (title == "Keluar") {
            props.btnShowAlert()
        } else {
            navigation.navigate(screenName)
        }
    }

    return (
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={goTo}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonMain

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "#003865",
        width: "40%",
        margin: 14,
        padding: 18,
        alignItems: "center",
        borderRadius: 10,
    },
    text: {
        color: "white"
    }
})