import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import Hero from '../components/List-Heroes/Hero'

function ListHeroes() {
    return (
        <View>
            <Header />
            <FlatList
                style={styles.listHero}
                data={data}
                renderItem={({ item }) => (
                    <Hero item={item} />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default ListHeroes

const styles = StyleSheet.create({
    listHero: {
        marginTop: 10,
        marginBottom: 100
    }
})

const data = [
    {
        "id": 1,
        "name": "I Calo Ammana Wewang",
        "picture": "calo.png",
        "birth": "-",
        "placeOfBirth": "Salabulo",
        "education": "-",
        "profession": "-",
        "rip": "1967",
        "history": "    I Calo Ammana Wewang. Ia merupakan Maradia Malolo Balanipa - Maradia Alu. I Calo Ammana Wewang dalam catatan biografinya dilahirkan di Salabulo, Lutang tahun 1854 dari buah perkawinan I Gaan dan Ikena. Pada tahun 1873 ia dilantik menjadi Maradia Malolo Balanipa. Lalu pada tahun 1886 kembali dilantik menjadi Maradia Alu dan merangkap Maradia Malolo Balanipa. Sejara singkat I Calo Ammana Wewang sempat di tangkap tentara Belanda dan diasingkan ke Belitung terhitung kurang lebih 38 tahun. I Calo Ammana Wewang kembali ke mandar dan tiba di Bababulo pada 22 Mei 1945.Ia Kemudian meninggal pada tahun 1967 dan dimakamkan di area Madjid Darul Falah.Lantaran banjir dan erosi mengancam makamnya, kuburannya kemudian dipindahkan ke Limboro."
    },
    {
        "id": 2,
        "name": "Hj Siti Maemunah",
        "picture": "maemunah.jpg",
        "birth": "1916",
        "placeOfBirth": "Baruga",
        "education": "-",
        "profession": "Guru",
        "rip": "-",
        "history": "    Hj. Maemunah lahir pada tahun 1916 di Baruga kabupaten Majene. Ia adalah putri dari pasangan Muhammad Saleh dan Habiba. Hj. Maemunah mempunyai 2 saudara diantaranya H. Bahria dan Hj. Bahria dan H. Nurdin. Setelah enam tahun ibu Maemunah meninggal, ayahnya kemudian menikah lagi dengan Sohara yang kemudian dikaruniai 2 oang putera yaitu Mabur dan abrar, keduanya berdomisili di Makassar. Semasa kanak-kanak, ia dibesarkan di desa Baruga dengan Pendidikan islam yang selalu ditanamkan oleh kedua orangtuanya serta pendidikan nonformal berupa adat istiadat yang berlaku di masyarakat Mandar. \n\n    Dalam kehidupan sehari-hari, Maemunah dikenal sebagai anak yang shalehtaat beribadah dan pemberani. Sebagai anak petama dari lima bersaudara, Maemunah sudah diangkat sebagai kepala sekolah Ba’babulo dari tahun 1937- 1953. Pada tahun 1940 Mamunah menikah dengan pemuda bernama Muh. Jud Pance, mereka berdua satu pofesi sebagai guru. Keduanya bertugas dan menikah di deteng- deteng Majene namun dari hasil perkawinannya, mereka tidak dikaruniai anak.3 B. Masa kecil Hingga Dewasa Hj. Maemunah merupakan pahlawan yang secara terang-terangan berani menentang Belanda. Ia adalah sosok wanita yang beberapa kali lolos dari maut walaupun beberapa kali tertangkap dan disiksa di tahanan. Ia benar-benar mengabdikan dirinya untuk bangsa dan Negara pada saat usianya masih muda. Pada saat jadi guru di Bababulo, ia rela meninggalkan tugasnya sebagai guru untuk ikut bergabung dan menjadi pemimpin salah satu organisasi pergerakan terbesar yang ada di Majene saat itu.\n\n  Dalam melaksanakan tugasnya ia tekun dan bertanggung jawab bahkan ikut serta melakukan gerakan-gerakan rahasia bersama rekan seperjuangannya di GAPRI 5.3.1. para pejuang kemerdekaan telah mengikuti keberadaannya sebagai pejuang revolusi terbukti adanya pemberian tanda-tanda jasa oleh negara yang menjadikannya sebagai pahlawan nasional. Beberapa wanita perkasa telah lahir di tanah Mandar yang menjadi tokoh penting dalam dinamika perjuangan yang terjadi di daerah Mandar. Beberapa tokoh wanita tersebut adalah Andi Depu, Hj. Maemunah, St. Ruwaedah, St. Mulyati dan Hj"
    }
]