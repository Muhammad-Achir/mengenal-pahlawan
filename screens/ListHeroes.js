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
    },
    {
        "id": 3,
        "name": "Hj Andi Depu (Ibu Agung)",
        "picture": "depu.jpg",
        "birth": "Agustus 1908",
        "placeOfBirth": "Tinambung",
        "education": "-",
        "profession": "-",
        "rip": "Makassar, 18 Juni 1985",
        "history": "    Agung Hajjah Andi Depu (lahir di sebuah Desa di Kecamatan Tinambung, Polman, Agustus 1908) adalah pejuang perempuan yang berasal dari tanah Mandar, Kabupaten Polewali Mandar (Polman), Sulawesi Barat (Sulbar). Menpan RB Syafruddin masih satu garis keturunan dengan Andi Depu. Mantan Wakapolri itu masih sepupu satu kali dari Andi Depu. Beliau memimpin organisasi gerakan perlawanan yang dibentuk, Kris Muda Mandar untuk mengusir penjajahan Belanda dari Indonesia di tanah Sulawesi. Andi Depu dikenang melalui Monumen Merah Putih Andi Depu di Tinambung, Polman.\n\n    Agung Hajjah Andi Depu berjasa besar mengusir penjajah pasca kemerdekaan, Andi Depu kecil banyak mengahbiskan waktu laiknya anak-anak sebayanya. Tumbuh besar di dalam keluarga berdarah biru, membuat putri dari pasangan raja Mandar ke-50 Lajju Kanna Idoro dan Samaturu itu sangat disegani oleh masyarakat setempat. Lantaran kesederhanaan dan kesetiannya, Andi Depu begitu dikagumi.\n\n    Memasuki masa remaja, Andi Depu kemudian diangkat sebagai pemimpin Kris Muda Mandar. Kelompok gerakan masyarakat Mandar kala itu. Andi Depu menjadi satu-satunya pemimpin perempuan di organisasi yang begitu disegani Belanda dan Jepang. Melalui Netherlands- Indies Civil Administration (NICA), Belanda yang dibentuk tahun 1944, mengekspansi wilayah-wilayah produktif di Sulbar, Sulsel, hingga sebagian besar Sulawesi. Andi Depu menunjukkan kegigihannya mempertahankan bumi pertiwi. Didikan tegas, berwibawa nan santun dari lingkungan Istana Kerajaan Mandar, membuat sosok Andi Depu tak gentar melawan penjajah.\n\n    Sejarah Andi Depu untuk mempertahankan Indonesia, khususnya masyarakat Sulbar dari penjajahan dikenang melalui Monumen Merah Putih Andi Depu di Tinambung, Polman. Anhar mengatakan, di luar kisah singkat perjuangannya, Menpan RB Syafruddin masih satu garis keturunan dengan Andi Depu. Mantan Wakapolri itu masih sepupu satu kali dari Andi Depu. Hj Andi Depu adalah Pahlawan Nasional Pertama dari Sulawesi Barat.\n\n    Andi Depu Maraddia Balanipa, Puang Depu Maraddia Balanipa atau Ibu Agung adalah seorang pejuang wanita asal Indonesia. Ia berhasil mempertahankan Tinambung, Polewali Mandar dari penaklukan Belanda. Pada 1942, ia mengibarkan bendera Merah Putih pada awal kedatangan pasukan Jepang di Mandar. Wikipedia"
    },
    {
        "id": 4,
        "name": "H. Abdurrachman Tamma",
        "picture": "abdurrachman.jpg",
        "birth": "15 Desember 1925",
        "placeOfBirth": "Tinambung",
        "education": "-",
        "profession": "Kedudukannya dalam LVRI bervariasi: kadang menjadi anggota, pengurus, pembantu, sekretaris, dan juga pernah menjadi Ketua. Kepengurusan organisasi di tingkat daerah, ia kerap menjadi pengurus seperti di DPD LVRI  Sulseltra, Puskoveri dan lain-lainnya",
        "rip": "Makassar, 18 Juni 1985",
        "history": "    H. Abdurrachman Tamma atau Rahman Tamma lahir di Balanipa Mandar, 15 Desember 1925. Masa kanak-kanak dan remajanya dihabiskan di tanah Mandar. Rachman Tamma memulai pendidikannya di sekolah dasar (VVS), lalu di Hollandsche School (HIS), dan Klein Ambrenaren Examen (KAE). Semua tingkatan itu ia lalui dimasa penjajahan Belanda. Pada masa pendudukan Jepang, ia mengikuti sekolah lanjutan (Sekolah Pegawai Menengah, setingkat SLTA), dan sekaligus mengikuti latihan kemilliteran (Booei Taesin). Sedangkan pendidikan tinggi ditempuh di Makassar pada akademi Makassar dan menyelesaikan sarjana muda (BA) pada Universitas Sawerigading Ujung Pandang (nama lain dari Makassar).\n\n    Pada masa pergerakan kemerdekaan, ia ikut ambil bagian mempertahankan kemerdekaan dengan aktif dalam perjuangan, antara lain, anggota pimpinan kesatuan, kelasykaran KRIS Muda, sebagai penghubung dari Lasykar  Pemberontak Rakyat Indonesia Sulawesi (LAPRIS), sebagai perwira TRIPS dan perwira TRI-KESS (Komando Gerilya Sulawesi Selatan).\n\n    Namun atas kepeloporannya dalamperjuangannya mempertahankan merah putih yang telah resmi berkibar diangkasa, tentara Belanda menahannya lalu dipindahkan ke penjara layang, ketika terjadi perjanjian Roem-Royen antara pemerintahan RI dengan penguasa milliter Belanda.\n\n    Dalam pergerakan Negeri sendiri, Rachman Tamma juga aktif dalam  menumpas pemberontak yang dilakukan oleh sejumlah pasukan yang tidak menyetujui keutuhan negara kesatuan repoblik Indonesia, atau dalam bentuk motivasi lain yang mengganggu kewibawaan negara yang baru saja merdeka dari tangan penjajah. Salah satunya, pada tahun 1950, ia terlibat menumpas pemberontakan Andi Aziz (April 1950) dan pemberontakan KNIlL (Agustus 1950). Dan jasanya ketika terjadi keretakan NKRI atau ikut membubarkan Negara Indonesia Timur  (NIT) untuk kembali kepada negara kesatuan repoblik Indonesia (NKRI). Ketika ia sementara bertugas dimedan perang antara tahun 1945-1950, ia juga mearangkap sebagai wakil kepala daerah Mandar, yang roda pemerintahan dijalaninya di pengasingan. Tugas lainnya dalam pemerintahan negara, pada tahun 1950 menjabat sebagai kepala kantor Badan Rehabilitasi Nasional (BRN) provinsi Sulawesi Selatan, antara tahun 1952 hingga 1957, di Makassar. Dari tahun 1958 hingga tahun 1961, ia aktif dalam organisasi veteran sebagai wakil koordinator urusan veteran Sulawesi Selatan dan tenggara yang berkedudukan di Makassar. Pada tahun 1961 sebagai staf khusus di Kantor Gubernur"
    },
    {
        "id": 5,
        "name": "H. Muh. Djud Pantje, Hj.",
        "picture": "djud.jpg",
        "birth": "-",
        "placeOfBirth": "-",
        "education": "-",
        "profession": "-",
        "rip": "-",
        "history": "    Hanya sedkit informasi sejarah yang di dapatkan mengenai H. Muh. Djud Pantje. Bersama H. Muh. Djud Pantje dan istrinya Hj Siti Maemunah menjadi pimpinan suatu Kelaskaran terbesar yang ada di Majene yang bertugas dibidang keamanan dan pertahanan dalam rangka perjuangan menegakkan dan mempertahankan kemerdekaan Republik indonesia."
    },
    {
        "id": 6,
        "name": "Riri Amin Daud",
        "picture": "riri.png",
        "birth": "13 Juni 1927",
        "placeOfBirth": "Balanipa",
        "education": "-",
        "profession": "-",
        "rip": "-",
        "history": "    Riri Amin Daud dilahirkan pada 13 Juni 1927 di Kampung Biring Lembang Balanipa Mandar, sebuah wilayah yang dalam sejarahnya senantiasa mereproduksi pejuang sejak periode kolonial sampai perjuangan mempertahankan kemerdekaan.\n\n    Ayahnya bernama Muhammad Daud Puangnga I Lotong dan ibu bernama Sitti Sa’diayah. Tradisi dan karakter pejuang Riri Amin Daud diwariskan secara turun temurun melalui pendidikan keluarga yang berbasis adat dan nilai moral orang Mandar.\n\n    Sebagai keluarga yang cukup mapan, Riri Amin Daud dapat menempuh pendidikan formal dan pendidikan islam. Riri Amin Daud merupakan anak ke-2 dari 6 bersaudara, Riri Amin Daud menikah dengan Rosmani, dan memiliki 10 orang anak, di antaranya Muhammad Yus Mustari, Yunus Mustari, Kahar Mustari, JabirMustari, MyeaMustari, Khaidir Amin Daud, Itji Diana Daud, Fenti Daud, Ronggur Daud, Buyung wijaya kusuma (Muhammad Ronggur Amin Daud, wawancara 23 Mei 2014).\n\n    Di usia mudanya Riri Amin Daud sering di datangi oleh neneknya yaitu Puang Junnia dan Puang Yatia, mereka menceritakan bahwa ayah ibunya (kakek Riri Amin Daud ditangkap oleh Belanda, karena melawan Belanda), bahkan kakek Riri Amin Daud meninggal dalam pembuangan. Riri Amin Daud masih mengingat pada saat kakeknya meninggal dia melihat raja membawa pengikat kain kafan, karena pada waktu itu jika ada yang meninggal maka kain pengikat kain kafan dikirim ke keluarganya sebagai bukti bahwa yang bersangkutan sudah meninggal. Jadi dendam orang-orang terdahulu dari keluarganya yang meninggal akibat kekejaman Belanda (Fatmawati, 2002:9).\n\n    Pada tahun 1932 sampai tahun 1937, Riri Amin Daud menempuh pendidikan di vervolschool di Campalagian. Di samping menempuh pendidikan formal, Riri Amin Daud juga memperoleh pendidikan agama islam pada sore hari atau pesantren sore. Setelah menempuh pendidikan di vervolschool, Riri Amin Daud kemudian melanjutkan pendidikan di sekolah rakyat kecil klas vi merupakan lanjutan sekolah di Majene.\n\n    Selepas itu dilanjutkan di Makassar di normal school 4 tahun. Selama penempuh pendidikan formal di Makassar, ia juga mengikuti kursus-kursus kegamaan (islam) Sampai tahun 1942. Hal ini memperlihatkan bahwa ririn amin daud di samping memperkuat intelektualitasnya melalui pendidikan formal, ia juga memperdalam ilmu-ilmu agama sebagai unsur penting dalam membangun moralitaS. Perpaduan antara pendidikan formal dan ilmu agama inilah yang menjadikan Riri Amin Daud sebagai tokoh berdedikasi, jujur."
    },
    {
        "id": 7,
        "name": "Dr. H. Baharuddin Lopa, S.H.",
        "picture": "lopa.jpg",
        "birth": "27 Agustus 1935",
        "placeOfBirth": "Pambusuang",
        "education": "-",
        "profession": "Jaksa",
        "rip": "Riyadh, Arab Saudi, 3 Juli 2001",
        "history": "    Dr. H. Baharuddin Lopa, S.H. adalah Jaksa Agung Republik Indonesia dari 6 Juni 2001 sampai wafatnya pada 3 Juli 2001. Baharuddin Lopa juga adalah mantan Duta Besar Indonesia untuk Arab Saudi. Antara tahun 1993-1998, ia duduk sebagai anggota Komnas HAM.\n\n    Pria kelahiran Polewali Mandar, Sulawesi Barat, itu dikenal berprestasi sejak usia muda. Bagaimana tidak? Saat usianya baru 23 tahun dan masih menjadi mahasiswa hukum di Universitas Hasanudin, Lopa telah berkarir sebagai jaksa di Kajari Makassar pada tahun 1958. Kemudian, di usianya yang baru 25 tahun ia dilantik menjadi Bupati Majene. Selang dua tahun, Lopa lantas menjabat sebagai Kepala Kejaksaan Tinggi di sejumlah wilayah, mulai dari Tarnate, Aceh, Kalimantan Barat, Sulawesi Selatan, Pusdiklat Kejaksaan Agung di Jakarta, hingga menjadi Jaksa Agung meski dengan masa jabatan yang singkat karena pria berkacamata itu menghembuskan napas terakhirnya pada Juli 2001.\n\n    Selama memegang jabatan publik dan berkarier sebagai jaksa, Lopa menunjukkan integritas dirinya dengan tidak berkompromi pada hal ihwal korupsi. Ia tak gentar mengusut kasus-kasus korupsi kelas kakap yang menyangkut para konglomerat Indonesia. Tanpa pandang bulu, Lopa bahkan pernah menjebloskan mantan Menteri Perindustrian dan Perdagangan Indonesia Bob Hasan, termasuk mengusut dugaan kasus korupsi mantan Presiden Soeharto. Bahkan atas nama keadilan dan kebenaran, ia pernah mengusut kasus pengadaan fiktif Al-Quran senilai Rp 2 juta yang menyangkut karibnya sendiri, K.H. Badawi, sebagai Kepala Kanwil Agama Sulawesi Selatan saat itu. Lopa yang anti dengan pemberian hadiah dalam bentuk apa pun itu pernah menulis di kolom surat kabar, “Jangan berikan uang kepada para jaksa. Jangan coba-coba menyuap para penegak hukum, apa pun alasannya!”.\n\n    Selain jujur dan berani, sosok Lopa juga dikenal dengan kesederhanaannya dan tidak mau memanfaatkan fasilitas kedinasan di luar keperluan bekerja atau untuk urusan keluarga. Telepon dinas di rumahnya selalu dikuncinya dan ia melarang siapa pun di rumahnya memakainya. Pria kelahiran 27 Agustus 1935 itu juga melarang istrinya menggunakan mobil dinas meski hanya untuk pergi ke pasar atau untuk anaknya berangkat sekolah. Lopa pernah pula mengembalikan bensin mobil dinas yang diisikan oleh rekan sesama jaksa.\n\n    Karena itu untuk menambah penghasilannya, Lopa rajin menulis kolom di berbagai majalah dan surat kabar, hingga membuka rental play station dan wartel."
    },
    {
        "id": 8,
        "name": "Andi Tonra (Maraqdia Tonra)",
        "picture": "tonra.jpg",
        "birth": "1905",
        "placeOfBirth": "Majene",
        "education": "-",
        "profession": "2nd Regent of Majene",
        "rip": "25 Agustus 1977",
        "history": "    Andi Tonra dalam Mempertahankan Kemerdekaan di Majene 1945-1949. serta dampak perjuangan Andi Tonra dalam mempertahankan kemerdekaan Indonesia di Majene. perjuangan Andi Tonra dalam mempertahankan kemerdekaan Indonesia di Majene dilakukan atas kesadaran akan nasib bangsa yang menderita akibat penjajahan, serta adanya rasa tanggung jawab untuk mempertahankan kemerdekaan, dengan bersedia tampil dalam pergerakan pemuda. Pernah bergabung dalam organisasi PRAMA (Persatuan Rakyat Mandar) yang didirikan pada tahun 1935 dan sebagai bentuk dukungan terhadap proklamasi, Andi Tonra memprakarsai terbentukya organisasi Pemuda Republik Indonesia, yang bergerak dalam bidang politik. Keterlibatan Andi Tonra membawa dampak terhadap masyarakat, dengan membawa pengaruh yang menyebabkan rakyat bangkit berjuang bersama-sama dalam mempertahankan kemerdekaan. dalam catatan hidupnya Andi Tonra bersama dengan pejuang lainnya bersatu untuk berjuang melawan Belanda hingga Indonesia mencapai kemerdekaan pada 1945 sampai tahun 1949 atau periode pasca kemerdekaan."
    },
    {
        "id": 9,
        "name": "Abdul Wahab Anas",
        "picture": "empty.jpg",
        "birth": "-",
        "placeOfBirth": "Majene",
        "education": "-",
        "profession": "-",
        "rip": "1982",
        "history": "    Abdul Wahab Anas adalah salah satu dari tiga pemuda yang pertama kali mengibarkan Sang Saka Merah Putih di ibukota Afedeling Mandar, Majene.  Peristiwa monumental ini terjadi tak lama setelah berita kemerdekaan Republik Indonesia yang diproklamirkan Soekarno-Hatta sampai ke Mandar. Pada sekitaran September 1945, lewat siaran sebuah radio Australia, segenap kalangan pejuang di Mandar gegap gempita menyambut berita dibacakannya proklamasi kemerdekaan RI.\n\n    Sambutan masyarakat Majene atas peristiwa bersejarah ini membahana memenuhi setiap sudut dan ruang-ruang yang ada. Pekik merdeka menjadi kata yang paling sering dikumandangkan. Puncaknya adalah Pengibaran perdana bendera Sang Saka Merah Putih di tengah-tengah Kota Majene. Tepat jam tiga dinihari, Abd. Wahab Anas, A. Halim A.E dan Muhsin Ali menjadi pelakonnya. Atas peristiwa ini, pihak kepolisianpun memanggil dan menginterogasi Abd. Wahab Anas dan menanyakan alasan pengibaran bendera Merah Putih. “Merah putih adalah bendera resmi RI yang berpusat di Tanah Jawa”, Itulah jawaban Wahab Anas atas pertanyaan tersebut. Setelah kejadian tersebut, Wahab Anas kemudian menginisiasi pembentukan organisasi perjuangan di Majene. Berawal dari diskusi di rumah Wahab Anas di Saleppa, pada tanggal 16 September 1945, diadakanlah rapat umum merah putih di gedung sekolah rakyat putri Tanjung Batu Majene. Dari rapat ini, lahirlah organisasi perjuangan kemerdekaan yang bernama Pemuda Republik Indonesia (PRI) di bawah pimpinan Andi Tonra. Abd. Wahab Anas sendiri menjadi salah satu pengurusnya. Bermula dari PRI inilah Wahab Anas aktif dalam pergerakan mengawal dan mempertahankan kemerdekaan di Majene. Di awal tahun 1946, Abd. Wahab Anas pernah tercatat sebagai Ketua Partai Nasional Indonesia (PNI) Cabang Majene sektor barat. PNI sendiri adalah partai pergerakan nasional yang didirikan oleh Soekarno, dan menjadi salah satu sarana perjuangan dalam meraih kemerdekaan.\n\n    Aktifitasnya di PRI dan PNI, menjadi alasan Belanda untuk menangkap Wahab dan aktivis PRI setelah peristiwa pembantaian Westerling di Galung Lombok pada 11 Desember 1946. Wahab Anas dan aktivis PRI lainnnya ditahan di tangsi KNIL Belanda Majene. Dalam penjara, Wahab Anas banyak mengalami siksaan fisik. Ia digantung dengan kepala terjungkal kebawah, dipukul hingga pingsan kemudian di siram dengan air. Wahab Anas selanjutnya di tahan di penjara Makassar."
    },
    {
        "id": 10,
        "name": "Muhammad Amier (Kapten Amir)",
        "picture": "empty.jpg",
        "birth": "-",
        "placeOfBirth": "-",
        "education": "-",
        "profession": "-",
        "rip": "-",
        "history": "-"
    },
    {
        "id": 11,
        "name": "Abdul Rauf",
        "picture": "empty.jpg",
        "birth": "-",
        "placeOfBirth": "-",
        "education": "-",
        "profession": "-",
        "rip": "-",
        "history": "-"
    },
    {
        "id": 12,
        "name": "Hamma' Saleh (Muhammad Saleh) Puanna Su'ding",
        "picture": "empty.jpg",
        "birth": "-",
        "placeOfBirth": "-",
        "education": "-",
        "profession": "-",
        "rip": "-",
        "history": "-"
    },
    {
        "id": 13,
        "name": "Hj Rosmiani Ahmad",
        "picture": "empty.jpg",
        "birth": "-",
        "placeOfBirth": "-",
        "education": "-",
        "profession": "-",
        "rip": "-",
        "history": "-"
    },
    {
        "id": 14,
        "name": "I Masa (Ibu Seluruh)",
        "picture": "empty.jpg",
        "birth": "-",
        "placeOfBirth": "-",
        "education": "-",
        "profession": "-",
        "rip": "-",
        "history": "-"
    },
    {
        "id": 15,
        "name": "Raden Soeradi",
        "picture": "empty.jpg",
        "birth": "-",
        "placeOfBirth": "-",
        "education": "-",
        "profession": "-",
        "rip": "-",
        "history": "    -"
    },
]