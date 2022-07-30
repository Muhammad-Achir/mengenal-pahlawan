import { Image, StyleSheet } from 'react-native'

function Header() {
    return (
        <Image
            style={styles.heroAnim}
            source={require('../assets/hero-anim.png')}
        />
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
})