import { Image, StyleSheet, View } from 'react-native'

function Header() {
    return (
        <View>
            <Image
                style={styles.heroAnim}
                source={require('../assets/hero-anim.png')}
            />
            <View>
                <View style={styles.flagRed}></View>
                <View style={styles.flagWhite}></View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    heroAnim: {
        top: 5,
        right: 5,
        height: 90,
        width: 90,
        position: "absolute",
        zIndex: 1
    },
    flagRed: {
        height: 50,
        backgroundColor: "red",
        zIndex: 0
    },
    flagWhite: {
        height: 50,
        backgroundColor: "white",
        zIndex: 0
    },
})