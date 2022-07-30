import { StyleSheet, Text, TouchableOpacity } from "react-native"

function ButtonMain(props) {
    let title = props.title
    return (
        <TouchableOpacity style={styles.buttonContainer}>
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