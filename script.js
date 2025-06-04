var recognizing = false;
        var recognition;
        function getResponse() {
            var userText = document.getElementById("userInput").value.toLowerCase().trim();
            var chatbox = document.getElementById("chatbox");

            if (userText === "") return;

            var userDiv = document.createElement("p");
            userDiv.textContent = "Kamu: " + userText;
            chatbox.appendChild(userDiv);

            document.getElementById("userInput").value = "";

            var botResponse = "";
            var audioToPlay = document.getElementById("defaultAudio");
            var videoToPlay = "assets/videotiga.mp4";

            if ('webkitSpeechRecognition' in window) {
            recognition = new webkitSpeechRecognition();
            recognition.continuous = false; // Stop automatically after a result is recognized
            recognition.interimResults = false; // Don't show partial (interim) results
            recognition.lang = 'id-ID'; // Set the language to Indonesian

            recognition.onstart = function() {
                recognizing = true;
                document.getElementById("micIcon").classList.replace("fa-microphone", "fa-microphone-slash");
            };

            recognition.onend = function() {
                recognizing = false;
                document.getElementById("micIcon").classList.replace("fa-microphone-slash", "fa-microphone");
            };

            recognition.onresult = function(event) {
                var transcript = event.results[0][0].transcript;
                document.getElementById("userInput").value = transcript;
            };
        } else {
            alert("Browser Anda tidak mendukung fitur pengenalan suara.");
        }
        

        function toggleMic() {
            if (recognizing) {
                recognition.stop();
            } else {
                recognition.start();
            }
        
            var micButton = document.getElementById("micButton");
var recognition = new webkitSpeechRecognition() || SpeechRecognition();
recognition.lang = 'id-ID'; // Bahasa Indonesia
recognition.continuous = false;
recognition.interimResults = false;
var isListening = false;

micButton.onclick = function() {
    if (!isListening) {
        recognition.start();
        micButton.innerHTML = "&#10074;&#10074;"; // Mengubah ikon ke 'pause' (garing)
        isListening = true;
    } else {
        recognition.stop();
        micButton.innerHTML = "&#127908;"; // Kembali ke ikon mikrofon
        isListening = false;
    }
};

recognition.onresult = function(event) {
    var transcript = event.results[0][0].transcript;
    document.getElementById("userInput").value = transcript;
    micButton.innerHTML = "&#127908;"; // Kembali ke ikon mikrofon setelah selesai mendengarkan
    isListening = false;
};

recognition.onerror = function(event) {
    console.error("Error during recognition: ", event.error);
    micButton.innerHTML = "&#127908;"; // Kembali ke ikon mikrofon jika terjadi error
    isListening = false;
};
        }

            // Peta pengetahuan geografi
            var regions = {
                afrikaUtara: ["mesir", "libya", "aljazair", "tunisia", "maroko", "sudan", "mauritania","sudan selatan","sahara barat"],
                afrikaSelatan: ["afrika selatan", "namibia", "botswana", "zimbabwe", "mozambik", "lesotho","eswatini","zambia"],
                afrikaBarat: ["nigeria", "ghana", "senegal", "liberia", "mali", "guinea","benin","burkina faso","cape verde","gambia","guinea bissau","ivory coast","niger","sierra leone", "togo"],
                afrikaTimur: ["ethiopia", "kenya", "tanzania", "somalia", "rwanda","burundi","djibouti","eritrea","uganda","seychelles","komoro"],
                afrikaTengah: ["angola", "kamerun", "afrika tengah", "chad", "kongo","guinea_khatulistiwa","gabon","sao tome dan principe"],
                asiaTengah: ["kazakhstan", "uzbekistan", "tajikistan","turkmenistan","kyrgyzstan"],
                asiaTenggara: ["indonesia", "thailand", "malaysia","singapura","filipina","laos","kamboja","brunei darussalam","vietnam","myanmar"],
                asiaTimur: ["jepang", "korea selatan", "cina","korea utara","mongolia","taiwan"],
                asiaBarat: ["iran", "arab saudi", "turki","bahrain","irak","yordania","kuwait","lebanon","oman","qatar","suriah","uni emirat arab","yaman","palestina","siprus"],
                asiaSelatan: ["india", "pakistan", "afghanistan", "nepal", "bhutan", "srilanka", "bangladesh","maladewa"],
                eropaTimur: ["rusia", "ukraina", "polandia","belarus","moldova","ceko","slovakia","hungaria","rumania","bulgaria","lithuania","latvia","estonia","albania","bosnia dan herzegovina","kroasia","kosovo","montenegro","makedonia utara","serbia","slovenia","yunani"],
                eropaBarat: ["perancis", "jerman", "belgia","belanda","inggris","irlandia","monako","austria","swiss","luxembourg","spanyol","portugal","andorra","italia","vatikan","san marino"],
                eropaUtara: ["swedia", "finlandia", "norwegia","denmark","islandia"],
                amerikaUtara: ["kanada", "amerika serikat", "meksiko", "greenland"],
                amerikaTengah: ["guatemala", "honduras", "panama","belize","kosta rika","el salvador","kuba","haiti","nikaragua","puerto riko","dominika","jamaika",],
                amerikaSelatan: ["brazil", "argentina", "chili","kolombia","ekuador","guyana","paraguay","peru","bolivia","suriname","uruguay","venezuela"],
                australia: ["australia", "selandia baru","papua nugini","vanuatu","samoa","tonga","fiji","kepulauan solomon","mikronesia","kiribati"],
                antartika: ["antartika"]
                
                
            };

            // Penanganan pertanyaan khusus
            if (userText.includes("gunung tertinggi")) {
                botResponse = "Gunung tertinggi di dunia adalah Gunung Everest, yang memiliki ketinggian 8.848 meter dan gunung ojos del salado,yang memiliki ketinggian 9.144 meter dari dasar laut.";
            } else if (userText.includes("palung terdalam")) {
                botResponse = "Palung terdalam di dunia adalah Palung Mariana, dengan kedalaman sekitar 10.994 meter.";
            } else if (userText.includes("negara terkunci")) {
                botResponse = "Negara terkunci adalah negara yang tidak memiliki akses ke laut, contohnya adalah Swiss, Austria, dan Hungaria.";
            } else if (userText.includes("tidak memiliki garis pantai") ||(userText.includes("tidak memiliki pantai")) ) {
                botResponse = "Negara yang tidak punya pantai termasuk Mongolia, Nepal, dan Bhutan.";
            } else if (userText.includes(" keajaiban dunia")) {
                botResponse = "7 Keajaiban Dunia Kuno meliputi: Piramida Agung Giza, Taman Gantung Babilonia, Patung Zeus di Olympia, Kuil Artemis di Efesus, Makam Mausolus, Kolosus di Rhodes, dan Mercusuar di Alexandria.";
            } else if (userText.includes("berapa samudra")) {
                botResponse = "Terdapat Samudra hindia, Samudra pasifik, Samudra atlantik, Samudra antartika dan Samudra artik.";

        
            } else if (userText.includes("kepulauan")) {
                botResponse = "Negara dengan akan pulau pulaunya diantaranya Indonesia, Swedia, Finlandia, Norwegia, dan Kanada."; 
            } else if (userText.includes("negara terbesar")) {
                botResponse = "Negara terbesar adalah Rusia, Kanada, Amerika serikat, Brazil , Cina, dll.";
            } else if (userText.includes("negara terkecil")) {
                botResponse = "Negara terkecil adalah vatikan, nauru, fiji, San marino,dll.";
            } else if (userText.includes("sungai terpanjang")) {
                botResponse = "Sungai terpanjang di dunia adakah Sungai Nil dengan panjangnya sekitar 6.650 km.";
            } else if (userText.includes("danau")) {
                botResponse = "Danau terluas di dunia adalah Danau kaspia,  sangking besarnya sampai disebut Laut kaspia dengan luas mencapai 371.000 km^2.";
            } else if (userText.includes("populasi terbanyak")) {
                botResponse = "Benua dengan populasi manusia terbanyak adalah Asia khususnya negara india,cina,indonesia,pakistan.";
            } else if (userText.includes("gurun terluas")) {
                botResponse = "gurun terpanas terluas adalah gurun sahara dengan luas 9.2 juta km^2 dan gurun terdingin terluas adalah antartika dengan luas 14 juta km^2.";
            } else if (userText.includes("khatulistiwa")) {
                botResponse = "Negara yang dilintasi garis khatulistiwa adalah ekuador, kolombia, brasil, sao tome, gabon, republik kongo, republik demokratik kongo, uganda, kenya, somalia, maladewa, indonesia dan kiribati.";
            } else if (userText.includes("ring of fire")) {
                botResponse = "Negara yang termasuk kategori ring of fire adalah california amerika serikat, meksiko, chile, peru, jepang, filipina, indonesia, papua nugini dan rusia bagian timur.";
            } else if (userText.includes("kota terpadat")) {
                botResponse = "kota terpadat di dunia adalah kota tokyo yang berada di negara jepang.";
            } else if (userText.includes("waktu")) {
                botResponse = "zona waktu indonesia terbagi menjadi 3 yaitu   WIB meliputi sumatera,jawa dan bali lalu WITA meliputi kalimantan bagian tengah sampai ntt dan WIT meliputi maluku dan papua.";
            } else if (userText.includes("tengah")) {
                botResponse = "titik tengah didunia dengan garis bujur 0 derajat ialah 'greenwich,inggris'.";
            } else if (userText.includes("benua dan negara") || userText.includes("negara dan benua"))  {
                botResponse = "Benua adalah daratan yang sangat luas, biasanya terdiri dari banyak negara. Contohnya, Asia, Afrika, dan Eropa adalah benua. Negara adalah entitas politik dan geografis yang lebih kecil di dalam benua, seperti Indonesia, Jerman, atau Brazil.'.";
            } else if (userText.includes("negara dengan garis pantai terpanjang") || userText.includes("pantai terpanjang"))  {
                botResponse = " Kanada memiliki garis pantai terpanjang di dunia, sekitar 202.080 kilometer."; 
            } else if (userText.includes("apa itu peta") || userText.includes("peta"))  {
                botResponse = "Peta adalah representasi grafis dari suatu wilayah yang menunjukkan fitur-fitur geografis, seperti daratan, lautan, gunung, sungai, jalan, dan batas-batas politik. Peta biasanya digambar pada permukaan datar dan digunakan untuk membantu memahami tata letak dan posisi relatif dari tempat-tempat di dunia. "; 
            } else if (userText.includes("apa itu skala") || userText.includes("skala"))  {
                botResponse = "kala pada peta adalah perbandingan antara jarak pada peta dengan jarak sebenarnya di permukaan bumi. Skala ini menunjukkan seberapa banyak area dunia nyata yang direpresentasikan pada peta dalam ukuran yang lebih kecil. Dengan kata lain, skala membantu kita mengetahui berapa jarak sesungguhnya di lapangan berdasarkan jarak yang terlihat pada peta. "; 
            } else if (userText.includes("siapa itu marco polo") || userText.includes("marco polo"))  {
                botResponse = "Marco Polo adalah seorang penjelajah dan pedagang asal Venesia, Italia, yang melakukan perjalanan panjang dari Eropa ke Asia pada abad ke-13. Perjalanan epik ini dimulai pada tahun 1271 dan berlangsung hingga 1295, ketika ia kembali ke Venesia. Catatan perjalanannya terdokumentasi dalam buku terkenal berjudul Il Milione atau The Travels of Marco Polo. Rute perjalanan Marco Polo sangat penting dalam memperkenalkan dunia Timur kepada Eropa, terutama Cina dan Asia Tengah. "; 
            } else if (userText.includes("menara tertinggi di dunia") || userText.includes("menara tertinggi"))  {
                botResponse = "Menara tertinggi di dunia saat ini adalah Burj Khalifa, yang terletak di Dubai, Uni Emirat Arab. Tingginya mencapai 828 meter (2.717 kaki) dengan total 163 lantai. Burj Khalifa selesai dibangun pada tahun 2010 dan telah menjadi ikon arsitektur serta destinasi wisata terkenal di dunia. "; 
            } else if (userText.includes("samudra terluas") || userText.includes("laut terluas"))  {
                botResponse = "laut samudra terluas didunia adalah samudra pasifik dengan luas mencapai 168,7 juta km^2.";
            } else if (userText.includes("benua terluas") || userText.includes("benua terbesar"))  {
                botResponse = "Asia adalah benua terluas di dunia, dengan luas sekitar 44,58 juta km². Benua ini juga memiliki populasi terbesar. ";
            } else if (userText.includes("benua tersempit") || userText.includes("benua terkecil"))  {
                botResponse = "Australia adalah benua terkecil dengan luas sekitar 8,6 juta km². Meskipun sering disebut sebagai negara, Australia juga merupakan benua yang tersendiri. ";  
            } else if (userText.includes("sungai terkecil") || userText.includes("sungai yang kecil"))  {
                botResponse = "Sungai Roe di Montana, Amerika Serikat, adalah salah satu sungai terpendek di dunia dengan panjang hanya 61 meter.";  
            } else if (userText.includes("gunung terkecil") || userText.includes("gunung yang kecil"))  {
                botResponse = "Gurun Carcross di Yukon, Kanada, sering disebut sebagai gurun terkecil di dunia, dengan luas sekitar 2,6 km². Meskipun kecil, ini adalah area pasir yang terbentuk dari endapan glasial.";   
            } else if (userText.includes("pulau terbesar") || userText.includes("pulau besar"))  {
                botResponse = "Greenland adalah pulau terbesar di dunia dengan luas sekitar 2,16 juta km². Greenland merupakan wilayah otonomi dari Denmark.";
            } else if (userText.includes("pulau terbanyak") || userText.includes("pulau banyak"))  {
                botResponse = "Swedia memiliki lebih dari 267.000 pulau, menjadikannya negara dengan jumlah pulau terbanyak di dunia. Namun, sebagian besar pulau ini tidak berpenghuni. Indonesia adalah negara kepulauan terbesar dengan lebih dari 17.000 pulau yang tersebar di seluruh wilayahnya.";
            } else if (userText.includes("gunung berapi terbanyak") || userText.includes("gunung api terbanyak"))  {
                botResponse = "Indonesia memiliki jumlah gunung berapi aktif terbanyak di dunia, dengan sekitar 130 gunung berapi aktif karena letaknya yang berada di Cincin Api Pasifik"; 
            } else if (userText.includes("suku terbanyak") || userText.includes("suku banyak"))  {
                botResponse = "Indonesia juga dikenal sebagai salah satu negara dengan jumlah suku terbanyak, dengan lebih dari 1.300 kelompok etnis yang berbeda, masing-masing dengan budaya dan bahasa mereka sendiri.";
            } else if (userText.includes("curah hujan terbanyak") || userText.includes("curah hujan"))  {
                botResponse = "Mawsynram, sebuah desa di negara bagian Meghalaya, India, tercatat sebagai tempat dengan curah hujan tahunan terbanyak di dunia, mencapai lebih dari 11.871 mm hujan per tahun.";
            } else if (userText.includes("geografi") || userText.includes("peta"))  {
                botResponse = "Geografi adalah ilmu yang mempelajari lokasi dan fenomena di permukaan bumi, baik yang bersifat alamiah maupun buatan manusia. Geografi tidak hanya fokus pada bentuk fisik bumi seperti gunung, sungai, dan lautan, tetapi juga mencakup bagaimana manusia hidup dan berinteraksi dengan lingkungan sekitarnya.Kata 'geografi' berasal dari bahasa Yunani, yaitu 'geo' yang berarti 'Bumi' dan 'graphien' yang berarti 'menulis' atau 'menggambarkan.' Jadi, geografi dapat diartikan sebagai 'menggambarkan atau mempelajari Bumi.' ";
            } else if (userText.includes("hutan terbesar") || userText.includes("hutan terluas"))  {
                botResponse = "Hutan terluas di dunia adalah Hutan Amazon, yang terletak di Amerika Selatan.";
            } else if (userText.includes("apa itu hutan") || userText.includes("hutan"))  {
                botResponse = "Hutan adalah wilayah luas yang ditumbuhi oleh berbagai jenis pohon dan tumbuhan lainnya, serta menjadi habitat bagi banyak spesies hewan, tumbuhan, dan mikroorganisme. Hutan memiliki peran penting dalam ekosistem global, termasuk menjaga keseimbangan iklim, menyerap karbon dioksida, serta mendukung keanekaragaman hayati.";
            } else if (userText.includes("apa itu sungai") || userText.includes("sungai"))  {
                botResponse = "Sungai adalah aliran air alami yang mengalir di permukaan bumi dari daerah yang lebih tinggi ke daerah yang lebih rendah, biasanya menuju ke laut, danau, atau sungai lain. Sungai terbentuk dari curah hujan, mata air, gletser yang mencair, atau limpasan air dari tanah. Aliran sungai dapat berupa sungai kecil (anak sungai) hingga sungai besar yang mengalir melintasi benua.";
            } else if (userText.includes("apa itu gunung") || userText.includes("gunung"))  {
                botResponse = "Gunung adalah bentuk permukaan bumi yang menonjol dengan ketinggian yang lebih tinggi dibandingkan dengan daerah di sekitarnya. Gunung terbentuk akibat proses geologi yang meliputi pergerakan lempeng tektonik, erupsi vulkanik, dan pengangkatan lapisan bumi selama jutaan tahun. Gunung memiliki ciri khas berupa lereng yang curam, puncak, serta ketinggian yang mencapai ratusan hingga ribuan meter di atas permukaan laut.";
            } else if (userText.includes("apa itu lembah") || userText.includes("lembah"))  {
                botResponse = "Lembah adalah wilayah daratan yang lebih rendah dibandingkan area di sekitarnya, biasanya terletak di antara pegunungan atau bukit-bukit. Lembah terbentuk oleh berbagai proses geologi, termasuk erosi oleh aliran sungai atau gletser yang memotong permukaan tanah, serta pergerakan lempeng tektonik.";
            } else if (userText.includes("apa itu palung") || userText.includes("palung"))  {
                botResponse = "Palung adalah cekungan dalam dan sempit di dasar laut, yang merupakan bagian dari bentuk permukaan bumi. Palung biasanya terbentuk akibat proses geologi, seperti pergerakan lempeng tektonik, di mana satu lempeng terdesak di bawah lempeng lainnya (subduksi). Proses ini menciptakan kedalaman yang signifikan di bawah permukaan laut.";
            } else if (userText.includes("apa itu danau") || userText.includes("danau"))  {
                botResponse = "Danau adalah badan air tawar atau air asin yang terperangkap di dalam daratan dan dikelilingi oleh tanah. Danau dapat bervariasi dalam ukuran, kedalaman, dan asal terbentuknya. Mereka bisa sangat kecil, seperti kolam, atau sangat besar, seperti danau yang mencakup area ribuan kilometer persegi.";
            } else if (userText.includes("apa itu iklim") || userText.includes("iklim"))  {
                botResponse = "Iklim adalah pola cuaca yang berlangsung dalam jangka waktu panjang di suatu wilayah tertentu. Iklim mencakup rata-rata suhu, curah hujan, kelembapan, dan angin selama periode waktu yang biasanya diukur dalam dekade atau lebih. Iklim berbeda dari cuaca, yang merujuk pada kondisi atmosfer yang lebih singkat dan dapat berubah dari hari ke hari."; 
            } else if (userText.includes("apa itu gurun") || userText.includes("gurun"))  {
                botResponse = "Gurun adalah wilayah yang ditandai dengan curah hujan yang sangat rendah, sehingga membuatnya menjadi daerah yang kering dan jarang terdapat vegetasi. Gurun bisa memiliki suhu yang sangat panas pada siang hari dan dingin pada malam hari, atau bahkan bisa juga memiliki suhu yang dingin, seperti gurun salju.";
            } else if (userText.includes("apa itu bukit") || userText.includes("bukit"))  {
                botResponse = "Bukit adalah bentuk permukaan bumi yang lebih tinggi dari sekitarnya tetapi lebih rendah dibandingkan dengan gunung. Bukit memiliki ketinggian yang bervariasi, umumnya tidak lebih dari 600 meter di atas permukaan laut, dan memiliki kemiringan yang lebih landai dibandingkan dengan gunung.";
            } else if (userText.includes("apa itu laut") || userText.includes("laut"))  {
                botResponse = "Laut adalah badan air asin yang lebih kecil dari samudera dan biasanya terletak di antara daratan atau mengelilingi pulau-pulau. Laut memiliki kedalaman yang bervariasi dan mencakup berbagai ekosistem yang kaya akan keanekaragaman hayati.";
            } else if (userText.includes("apa itu benua") || userText.includes("dengan benua"))  {
                botResponse = "Benua adalah massa daratan yang luas dan biasanya dipisahkan oleh lautan. Benua merupakan bagian utama dari permukaan bumi dan memiliki ciri-ciri geografi, iklim, dan ekosistem yang berbeda. Secara umum, benua dianggap sebagai salah satu dari beberapa bagian besar yang membentuk wajah bumi.";
            } else if (userText.includes("berapa benua") || userText.includes("jumlah benua"))  {
                botResponse = "Asia, Afrika, Amerika Utara, Amerika Selatan, Antartika, Eropa, Australia";
            } else if (userText.includes("apa itu samudra") || userText.includes("dengan samudra"))  {
                botResponse = "Samudra adalah badan air asin yang sangat luas dan dalam, yang membentang di antara benua-benua. Samudra merupakan bagian terbesar dari permukaan bumi dan memainkan peran penting dalam ekosistem global serta dalam pengaturan iklim.";
            } else if (userText.includes("apa itu akuifer") || userText.includes("akuifer"))  {
                botResponse = "akuifer adalah lapisan batuan atau tanah yang dapat menyimpan dan mengalirkan air, sering dimanfaatkan sebagai sumber air minum.";
            } else if (userText.includes("apa itu pantai") || userText.includes("dengan pantai"))  {
                botResponse = "Pantai adalah garis pertemuan antara daratan dan laut, yang sering kali terdiri dari pasir, kerikil, atau batu. Pantai dapat terbentuk melalui berbagai proses geologis dan memiliki ekosistem yang unik, berfungsi sebagai habitat bagi berbagai spesies flora dan fauna.";
            } else if (userText.includes("apa itu lempeng") || userText.includes("dengan lempeng"))  {
                botResponse = "Lempeng merujuk pada bagian besar dari kerak bumi yang membentuk permukaan planet kita. Lempeng ini terdiri dari lapisan batuan keras yang mengapung di atas lapisan mantel yang lebih cair dan viskos. Konsep ini merupakan bagian dari teori tektonik lempeng, yang menjelaskan bagaimana lempeng-lempeng ini bergerak dan berinteraksi satu sama lain, memengaruhi bentuk dan struktur geologi bumi.";
            } else if (userText.includes("luas permukaan") || userText.includes("luas bumi"))  {
                botResponse = "Luas permukaan Bumi sekitar 510,1 juta kilometer persegi. Dari luas tersebut, sekitar 71% terdiri dari air, sementara 29% adalah daratan.";

            } else if (userText.includes("luas papua") || userText.includes("papua"))  {
                botResponse = "Papua adalah provinsi terluas di Indonesia, yang terletak di bagian timur negara tersebut. Secara geografis, Papua terdiri dari dua bagian utama: Papua Barat (dulu dikenal sebagai Irian Jaya) dan Papua (yang mencakup wilayah pegunungan tengah dan pantai).  Luas wilayah Papua, yang mencakup Provinsi Papua dan Papua Barat, sekitar 420.540 kilometer persegi. Ini menjadikannya sebagai provinsi terluas di Indonesia.";
            } else if (userText.includes("luas merauke") || userText.includes("merauke"))  {
                botResponse = "Merauke terletak di bagian paling selatan pulau Papua, berbatasan langsung dengan negara Papua Nugini di sebelah selatan. Kabupaten ini memiliki akses ke Samudra Pasifik.  Wilayah Merauke didominasi oleh dataran rendah, hutan tropis, dan sungai besar seperti Sungai Maro dan Sungai Bupul. Luas wilayah Kabupaten Merauke sekitar 46.960 kilometer persegi, menjadikannya sebagai salah satu kabupaten terluas di Indonesia. Merauke dihuni oleh berbagai suku, termasuk suku Marind, Muyu, dan suku-suku lainnya. Terdapat keragaman budaya dan bahasa di daerah ini. Ekonomi Merauke sebagian besar bergantung pada pertanian, peternakan, dan perikanan. Merauke dikenal sebagai salah satu lumbung pangan di Papua, dengan produksi beras dan komoditas lainnya.  ";

            } else if (userText.includes("jumlah pulau") || userText.includes("provinsi"))  {
                botResponse = "Jumlah Pulau: Diperkirakan ada sekitar 17.508 pulau, tetapi jumlah yang diakui secara resmi dalam administrasi pemerintah adalah sekitar 6.000 pulau yang dihuni. dan termasuk pulau terbesar nya seperti sumatra, jawa, bali, kalimantan, sulawesi, dan papua lalu Jumlah Provinsi: Terdapat 38 provinsi di Indonesia";

            } else if (userText.includes("apa itu pulau") || userText.includes("pulau"))  {
                botResponse = "Pulau adalah sebuah daratan yang dikelilingi oleh air. Dalam definisi geografi, pulau bisa bervariasi dalam ukuran dan bentuk, dan dapat ditemukan di lautan, sungai, dan danau. dan kepulauan adalah kumpulan beberapa pulau.";

            } else if (userText.includes("sumantra") || userText.includes("sumatra"))  {
                botResponse = "Sumatra adalah pulau terbesar keenam di dunia dan terbesar kedua di Indonesia (setelah Kalimantan). Terletak di bagian barat Indonesia, pulau ini dikelilingi oleh Selat Malaka di sebelah timur, Laut Andaman di sebelah barat laut, Samudra Hindia di sebelah barat, dan Selat Sunda di sebelah selatan yang memisahkannya dari Pulau Jawa. Sumatra memiliki keanekaragaman budaya, suku, dan bahasa yang kaya, serta beragam ekosistem, mulai dari hutan hujan tropis, pegunungan, hingga pantai.                \n\n\n   Secara administratif, Sumatra terdiri dari beberapa provinsi, yaitu Aceh, Sumatra Utara, Sumatra Barat, Riau, Kepulauan Riau, Jambi, Sumatra Selatan, Bangka Belitung, Bengkulu, dan Lampung. Pulau ini juga memiliki sejumlah gunung berapi aktif, seperti Gunung Sinabung dan Gunung Kerinci, dan merupakan habitat bagi berbagai spesies endemik, seperti harimau sumatra, gajah sumatra, dan badak sumatra, yang saat ini terancam punah.                                                                                  Pulau Sumatra juga memiliki sejarah yang kaya. Banyak kerajaan besar, seperti Kerajaan Sriwijaya dan Kerajaan Aceh, pernah berdiri di sana dan memainkan peran penting dalam sejarah perdagangan dan penyebaran agama Islam di Asia Tenggara.   ";

            } else if (userText.includes("apa itu jawa") || userText.includes("jawa"))  {
                botResponse = "Jawa adalah pulau di Indonesia yang menjadi pusat pemerintahan, ekonomi, dan budaya. Pulau ini mencakup enam provinsi: Banten, DKI Jakarta, Jawa Barat, Jawa Tengah, DI Yogyakarta, dan Jawa Timur. Jawa sangat padat penduduk dan memiliki sejarah panjang dengan kerajaan-kerajaan besar serta situs budaya seperti Candi Borobudur dan Prambanan. Selain itu, pulau ini dikenal dengan keanekaragaman budaya dan bahasa daerah, serta beberapa gunung berapi aktif seperti Gunung Merapi dan Bromo.";
            } else if (userText.includes("apa itu kalimantan") || userText.includes("kalimantan"))  {
                botResponse = "Kalimantan adalah pulau besar di Indonesia yang merupakan bagian dari pulau Borneo, pulau terbesar ketiga di dunia setelah Greenland dan Papua Nugini. Pulau ini dibagi menjadi beberapa wilayah administratif di Indonesia, yaitu Kalimantan Barat, Kalimantan Tengah, Kalimantan Selatan, Kalimantan Timur, dan Kalimantan Utara. Selain Indonesia, wilayah Borneo juga mencakup bagian dari Malaysia (Sabah dan Sarawak) serta seluruh wilayah Brunei.";
            } else if (userText.includes("apa itu sulawesi") || userText.includes("sulawesi"))  {
                botResponse = "Sulawesi adalah pulau di Indonesia yang memiliki bentuk unik seperti huruf K dan terdiri dari enam provinsi: Sulawesi Utara, Gorontalo, Sulawesi Tengah, Sulawesi Barat, Sulawesi Selatan, dan Sulawesi Tenggara. Pulau ini terkenal dengan keanekaragaman hayati (anoa, babirusa, tarsius) dan wisata lautnya, seperti Taman Laut Bunaken. Berbagai suku, seperti Bugis, Makassar, Toraja, dan Minahasa, menambah kekayaan budaya pulau ini.";
            } else if (userText.includes("kepulauan maluku") || userText.includes("maluku"))  {
                botResponse = "Kepulauan Maluku adalah gugusan pulau-pulau di Indonesia bagian timur, terletak di antara Pulau Sulawesi dan Papua. Kepulauan ini terbagi menjadi dua provinsi: Maluku dan Maluku Utara. Maluku dikenal sebagai 'Kepulauan Rempah' karena sejak zaman dahulu menghasilkan cengkeh, pala, dan rempah-rempah lain yang menjadi komoditas utama dalam perdagangan global, terutama pada masa kolonial.";
            } else if (userText.includes("pulau bali") || userText.includes("bali"))  {  
                botResponse = "Bali adalah sebuah pulau di Indonesia yang terkenal karena keindahan alam, budaya yang kaya, dan sebagai destinasi wisata. Terletak antara pulau Jawa dan Lombok, Bali memiliki pantai indah, sawah terasering, dan tradisi Hindu yang kuat. Tempat-tempat populer termasuk Kuta, Ubud, dan Tanah Lot, serta berbagai aktivitas seperti berselancar, menyelam, dan yoga. Dikenal sebagai 'Pulau Dewata,' Bali menawarkan pengalaman unik bagi wisatawan. ";   
            } else if (userText.includes("nusa tenggara barat") || userText.includes("ntb"))  {  
                botResponse = " Nusa Tenggara Barat (NTB): Provinsi di Indonesia dengan ibu kota Mataram, terdiri dari pulau Lombok dan Sumbawa. Dikenal dengan Gunung Rinjani dan budaya Sasak."; 
            } else if (userText.includes("nusa tenggara timur") || userText.includes("ntt"))  {  
                botResponse = "Nusa Tenggara Timur (NTT): Provinsi dengan ibu kota Kupang, terdiri dari banyak pulau seperti Flores dan Sumba. Terkenal dengan Danau Kelimutu dan keberagaman budaya lokal. ";

              // ibukota negara asia  
            } else if (userText.includes("ibukota indonesia") || userText.includes("ibukota negara indonesia"))  {  
                botResponse = " ibukota negara indonesia adalah IKN NUSANTARA.";   
            } else if (userText.includes("ibukota malaysia") || userText.includes("ibukota negara malaysia"))  {
                botResponse = " ibukota negara malaysia adalah kuala lumpur.";   
            } else if (userText.includes("ibukota thailand") || userText.includes("ibukota negara thailand"))  {
                botResponse = " ibukota negara thailand adalah bangkok.";   
            } else if (userText.includes("ibukota myanmar") || userText.includes("ibukota negara myanmar"))  {
                botResponse = " ibukota negara myanmar/burma adalah Naypyidaw.";   
            } else if (userText.includes("ibukota filipina") || userText.includes("ibukota negara filipina"))  {
                botResponse = " ibukota negara filipina adalah manila.";   
            } else if (userText.includes("ibukota vietnam") || userText.includes("ibukota negara vietnam"))  {
                botResponse = " ibukota negara vietnam adalah hanoi.";   
            } else if (userText.includes("ibukota kamboja") || userText.includes("ibukota negara kamboja"))  {
                botResponse = " ibukota negara kamboja adalah phnom penh.";   
            } else if (userText.includes("ibukota brunei darussalam") || userText.includes("ibukota negara brunei darussalam"))  {
                botResponse = " ibukota negara indonesia adalah IKN NUSANTARA.";   
            } else if (userText.includes("ibukota singapura") || userText.includes("ibukota negara singapura"))  {
                botResponse = " ibukota negara singapura adalah singapura.";   
            } else if (userText.includes("ibukota laos") || userText.includes("ibukota negara laos"))  {
                botResponse = " ibukota negara laos adalah vientiane.";   
            } else if (userText.includes("ibukota timor") || userText.includes("leste"))  {
                botResponse = " ibukota negara timor leste adalah dili."; 

                } else if (userText.includes("asean") || userText.includes("asia tenggara"))  {
                botResponse = " negara negara asean adalah indonesia, myanmar, thailand , malaysia, filipina, singapura, brunei darussalam, kamboja, vietnam, laos.";   

            

             // Respons untuk pertanyaan lokasi ibukota
    } else if (userText.includes("kuala lumpur") || userText.includes("lokasi kuala lumpur") || userText.includes("kuala lumpur itu di mana")) {
        botResponse = "Kuala Lumpur adalah ibukota negara Malaysia yang terletak di bagian barat laut Semenanjung Malaysia.";
    } else if (userText.includes("bangkok") || userText.includes("lokasi bangkok") || userText.includes("bangkok itu di mana")) {
        botResponse = "Bangkok adalah ibukota negara Thailand yang terletak di bagian tengah negara tersebut.";
    } else if (userText.includes("naypyidaw") || userText.includes("lokasi naypyidaw") || userText.includes("naypyidaw itu di mana")) {
        botResponse = "Naypyidaw adalah ibukota negara Myanmar yang terletak di bagian tengah negara, dan merupakan kota yang relatif baru.";
    } else if (userText.includes("manila") || userText.includes("lokasi manila") || userText.includes("manila itu di mana")) {
        botResponse = "Manila adalah ibukota negara Filipina yang terletak di pulau Luzon, di bagian barat negara.";
    } else if (userText.includes("hanoi") || userText.includes("lokasi hanoi") || userText.includes("hanoi itu di mana")) {
        botResponse = "Hanoi adalah ibukota negara Vietnam yang terletak di bagian utara negara tersebut.";
    } else if (userText.includes("phnom penh") || userText.includes("lokasi phnom penh") || userText.includes("phnom penh itu di mana")) {
        botResponse = "Phnom Penh adalah ibukota negara Kamboja yang terletak di bagian selatan negara tersebut, di tepi sungai Mekong.";
    } else if (userText.includes("bandar seri begawan") || userText.includes("lokasi bandar seri begawan") || userText.includes("bandar seri begawan itu di mana")) {
        botResponse = "Bandar Seri Begawan adalah ibukota negara Brunei Darussalam yang terletak di pantai utara pulau Borneo.";
    } else if (userText.includes("singapura") || userText.includes("lokasi singapura") || userText.includes("singapura itu di mana")) {
        botResponse = "Singapura adalah ibukota negara Singapura yang terletak di pulau Singapura di selatan Malaysia.";
    } else if (userText.includes("vientiane") || userText.includes("lokasi vientiane") || userText.includes("vientiane itu di mana")) {
        botResponse = "Vientiane adalah ibukota negara Laos yang terletak di sepanjang tepi Sungai Mekong, dekat perbatasan Thailand.";
    } else if (userText.includes("dili") || userText.includes("lokasi dili") || userText.includes("dili itu di mana")) {
        botResponse = "dili adalah ibukota negara timor leste,ia satu pulau dengan kupang nusa tenggara timur.";




            //  ibukota negara terkenal

            }else if (userText.includes("ibukota jepang") || userText.includes("ibukota negara jepang"))  {
                botResponse = " ibukota negara jepang adalah tokyo.";   
            } else if (userText.includes("ibukota korea selatan") || userText.includes("ibukota negara korea selatan"))  {
                botResponse = " ibukota negara korea selatan adalah seoul.";   
            } else if (userText.includes("ibukota cina") || userText.includes("ibukota negara cina"))  {
                botResponse = " ibukota negara cina adalah beijing.";   
            } else if (userText.includes("ibukota india") || userText.includes("ibukota negara india"))  {
                botResponse = " ibukota negara india adalah new delhi.";   
            } else if (userText.includes("ibukota mesir") || userText.includes("ibukota negara mesir"))  {
                botResponse = " ibukota negara mesir adalah kairo.";   
            } else if (userText.includes("ibukota turki") || userText.includes("ibukota negara turki"))  {
                botResponse = " ibukota negara turki adalah ankara.";   
            } else if (userText.includes("ibukota yunani") || userText.includes("ibukota negara yunani"))  {
                botResponse = " ibukota negara yunani adalah athena.";   
            } else if (userText.includes("ibukota jerman") || userText.includes("ibukota negara jerman"))  {
                botResponse = " ibukota negara jerman adalah berlin.";   
            } else if (userText.includes("ibukota rusia") || userText.includes("ibukota negara rusia"))  {
                botResponse = " ibukota negara rusia adalah moskow.";   
            } else if (userText.includes("ibukota nigeria") || userText.includes("ibukota negara nigeria"))  {
                botResponse = " ibukota negara nigeria adalah abuja.";   
            } else if (userText.includes("ibukota polandia") || userText.includes("ibukota negara polandia"))  {
                botResponse = " ibukota negara polandia adalah warsaw.";   
            } else if (userText.includes("ibukota belanda") || userText.includes("ibukota negara belanda"))  {
                botResponse = " ibukota negara belanda adalah amsterdam.";   
            } else if (userText.includes("ibukota prancis") || userText.includes("ibukota negara prancis"))  {
                botResponse = " ibukota negara prancis adalah paris.";   
            } else if (userText.includes("ibukota italia") || userText.includes("ibukota negara italia"))  {
                botResponse = " ibukota negara italia adalah roma.";   
            } else if (userText.includes("ibukota spanyol") || userText.includes("ibukota negara spanyol"))  {
                botResponse = " ibukota negara spanyol adalah madrid.";   
            } else if (userText.includes("ibukota portugal") || userText.includes("ibukota negara portugal"))  {
                botResponse = " ibukota negara portugal adalah lisboa.";   
            } else if (userText.includes("ibukota maroko") || userText.includes("ibukota negara maroko"))  {
                botResponse = " ibukota negara maroko adalah rabat.";   
            } else if (userText.includes("ibukota inggris") || userText.includes("ibukota negara inggris"))  {
                botResponse = " ibukota negara inggris adalah london.";   
            } else if (userText.includes("ibukota irlandia") || userText.includes("ibukota negara irlandia"))  {
                botResponse = " ibukota negara irlandia adalah dublin.";   
            } else if (userText.includes("ibukota norwegia") || userText.includes("ibukota negara norwegia"))  {
                botResponse = " ibukota negara norwegia adalah oslo.";   
            } else if (userText.includes("ibukota swedia") || userText.includes("ibukota negara swedia"))  {
                botResponse = " ibukota negara swedia adalah stockholm.";   
            } else if (userText.includes("ibukota finlandia") || userText.includes("ibukota negara finlandia"))  {
                botResponse = " ibukota negara finlandia adalah helsinki.";   
            } else if (userText.includes("ibukota bosnia dan herzegovina") || userText.includes("ibukota negara bosnia dan herzegovina"))  {
                botResponse = " ibukota negara bosnia dan herzegovina adalah sarajevo.";   
            } else if (userText.includes("ibukota denmark") || userText.includes("ibukota negara denmark"))  {
                botResponse = " ibukota negara denmark adalah kopenhagen.";   
            } else if (userText.includes("ibukota amerika") || userText.includes("ibukota negara amerika"))  {
                botResponse = " ibukota negara amerika serikat adalah washington,d.c";   
            } else if (userText.includes("ibukota kanada") || userText.includes("ibukota negara kanada"))  {
                botResponse = " ibukota negara kanada adalah ottawa.";   
            } else if (userText.includes("ibukota meksiko") || userText.includes("ibukota negara meksiko"))  {
                botResponse = " ibukota negara meksiko adalah meksiko city.";   
            } else if (userText.includes("ibukota australia") || userText.includes("ibukota negara australia"))  {
                botResponse = " ibukota negara australia adalah canberra.";   
            } else if (userText.includes("ibukota selandia baru") || userText.includes("ibukota negara selandia baru"))  {
                botResponse = " ibukota negara selandia baru adalah wellington.";   
            } else if (userText.includes("ibukota brasil") || userText.includes("ibukota negara brasilia"))  {
                botResponse = " ibukota negara brasil adalah brasilia.";   
            } else if (userText.includes("ibukota argentina") || userText.includes("ibukota negara argentina"))  {
                botResponse = " ibukota negara argentina adalah buenos aries.";   
            } else if (userText.includes("ibukota afrika selatan") || userText.includes("ibukota negara afrika selatan"))  {
                botResponse = " ibukota negara afrika selatan adalah cape town,pretoria dan bloemfontein.";   
            } else if (userText.includes("ibukota swiss") || userText.includes("ibukota negara swiss"))  {
                botResponse = " ibukota negara swiss adalah bern.";   
            } else if (userText.includes("ibukota chile") || userText.includes("ibukota negara chile"))  {
                botResponse = " ibukota negara chile adalah santiago."; 
            } else if (userText.includes("ibukota kazakhtan") || userText.includes("ibukota negara kazakhtan"))  {
                botResponse = " ibukota negara kazakhtan adalah astana.";
            } else if (userText.includes("ibukota arab saudi") || userText.includes("ibukota negara arab saudi"))  {
                botResponse = " ibukota negara arab saudi adalah riyadh.";
            } else if (userText.includes("ibukota iran") || userText.includes("ibukota negara iran"))  {
                botResponse = " ibukota negara iran adalah teheran.";
            } else if (userText.includes("ibukota maroko") || userText.includes("ibukota negara maroko"))  {
                botResponse = " ibukota negara maroko adalah rabat.";
            } else if (userText.includes("ibukota aljazair") || userText.includes("ibukota negara aljazair"))  {
                botResponse = " ibukota negara aljazair adalah algeirs.";
            } else if (userText.includes("ibukota pakistan") || userText.includes("ibukota negara pakistan"))  {
                botResponse = " ibukota negara pakistan adalah islamabad.";
            } else if (userText.includes("ibukota palestina") || userText.includes("ibukota negara palestina"))  {
                botResponse = " ibukota negara palestina adalah yerusalem.";

            } else if (userText.includes("tokyo") || userText.includes("lokasi tokyo") || userText.includes("tokyo itu di mana")) {
                botResponse = "Tokyo adalah ibukota negara Jepang yang terletak di pulau Honshu bagian timur, dekat dengan Samudra Pasifik.";
            } else if (userText.includes("seoul") || userText.includes("lokasi seoul") || userText.includes("seoul itu di mana")) {
                botResponse = "Seoul adalah ibukota negara Korea Selatan yang terletak di bagian barat laut negara tersebut, dekat dengan perbatasan Korea Utara.";
            } else if (userText.includes("beijing") || userText.includes("lokasi beijing") || userText.includes("beijing itu di mana")) {
                botResponse = "Beijing adalah ibukota negara Cina yang terletak di bagian timur laut negara tersebut.";
            } else if (userText.includes("new delhi") || userText.includes("lokasi new delhi") || userText.includes("new delhi itu di mana")) {
                botResponse = "New Delhi adalah ibukota negara India yang terletak di bagian utara negara tersebut.";
            } else if (userText.includes("ankara") || userText.includes("lokasi ankara") || userText.includes("ankara itu di mana")) {
                botResponse = "Ankara adalah ibukota negara Turki yang terletak di bagian tengah negara tersebut.";
            } else if (userText.includes("kairo") || userText.includes("lokasi kairo") || userText.includes("kairo itu di mana")) {
                botResponse = "Kairo adalah ibukota negara Mesir yang terletak di tepi Sungai Nil, di bagian utara negara tersebut.";
            } else if (userText.includes("moskow") || userText.includes("lokasi moskow") || userText.includes("moskow itu di mana")) {
                botResponse = "Moskow adalah ibukota negara Rusia yang terletak di bagian barat negara tersebut.";
            } else if (userText.includes("riyadh") || userText.includes("lokasi riyadh") || userText.includes("riyadh itu di mana")) {
                botResponse = "Riyadh adalah ibukota negara Arab Saudi yang terletak di bagian tengah negara tersebut.";
            } else if (userText.includes("teheran") || userText.includes("lokasi teheran") || userText.includes("teheran itu di mana")) {
                botResponse = "Teheran adalah ibukota negara Iran yang terletak di bagian utara negara tersebut, di dekat Pegunungan Alborz.";
            } else if (userText.includes("islamabad") || userText.includes("lokasi islamabad") || userText.includes("islamabad itu di mana")) {
                botResponse = "Islamabad adalah ibukota negara Pakistan yang terletak di bagian utara negara tersebut, di kaki bukit Margalla.";
            } else if (userText.includes("astana") || userText.includes("lokasi astana") || userText.includes("astana itu di mana")) {
                botResponse = "Astana adalah ibukota negara Kazakhstan yang terletak di bagian utara-tengah negara tersebut.";
            } else if (userText.includes("tashkent") || userText.includes("lokasi tashkent") || userText.includes("tashkent itu di mana")) {
                botResponse = "Tashkent adalah ibukota negara Uzbekistan yang terletak di bagian timur negara tersebut, dekat perbatasan Kazakhstan.";
            } else if (userText.includes("kathmandu") || userText.includes("lokasi kathmandu") || userText.includes("kathmandu itu di mana")) {
                botResponse = "Kathmandu adalah ibukota negara Nepal yang terletak di Lembah Kathmandu, di bagian tengah negara tersebut.";
            } else if (userText.includes("ulaanbaatar") || userText.includes("lokasi ulaanbaatar") || userText.includes("ulaanbaatar itu di mana")) {
                botResponse = "Ulaanbaatar adalah ibukota negara Mongolia yang terletak di bagian timur-tengah negara tersebut.";
            } else if (userText.includes("dushanbe") || userText.includes("lokasi dushanbe") || userText.includes("dushanbe itu di mana")) {
                botResponse = "Dushanbe adalah ibukota negara Tajikistan yang terletak di bagian barat negara tersebut.";
            } else if (userText.includes("bishkek") || userText.includes("lokasi bishkek") || userText.includes("bishkek itu di mana")) {
                botResponse = "Bishkek adalah ibukota negara Kirgizstan yang terletak di bagian utara negara tersebut, dekat perbatasan Kazakhstan.";
            } else if (userText.includes("ashgabat") || userText.includes("lokasi ashgabat") || userText.includes("ashgabat itu di mana")) {
                botResponse = "Ashgabat adalah ibukota negara Turkmenistan yang terletak di bagian selatan negara tersebut, dekat perbatasan Iran.";
            } else if (userText.includes("yerusalem") || userText.includes("lokasi yerusalem") || userText.includes("yerusalem itu di mana")) {
                botResponse = "yerusalem adalah ibukota negara palestina yang terletak di dekat perbatasan negara yordania.";



                //EROPA

            } else if (userText.includes("london") || userText.includes("lokasi london") || userText.includes("london itu di mana")) {
                botResponse = "London adalah ibukota negara Inggris yang terletak di bagian tenggara Inggris, di tepi Sungai Thames.";
            } else if (userText.includes("paris") || userText.includes("lokasi paris") || userText.includes("paris itu di mana")) {
                botResponse = "Paris adalah ibukota negara Prancis yang terletak di bagian utara-tengah negara tersebut, di tepi Sungai Seine.";
            } else if (userText.includes("berlin") || userText.includes("lokasi berlin") || userText.includes("berlin itu di mana")) {
                botResponse = "Berlin adalah ibukota negara Jerman yang terletak di bagian timur laut negara tersebut.";
            } else if (userText.includes("madrid") || userText.includes("lokasi madrid") || userText.includes("madrid itu di mana")) {
                botResponse = "Madrid adalah ibukota negara Spanyol yang terletak di bagian tengah negara tersebut.";
            } else if (userText.includes("roma") || userText.includes("lokasi roma") || userText.includes("roma itu di mana")) {
                botResponse = "Roma adalah ibukota negara Italia yang terletak di bagian tengah negara tersebut, di tepi Sungai Tiber.";
            } else if (userText.includes("amsterdam") || userText.includes("lokasi amsterdam") || userText.includes("amsterdam itu di mana")) {
                botResponse = "Amsterdam adalah ibukota negara Belanda yang terletak di bagian barat negara tersebut.";
            } else if (userText.includes("wina") || userText.includes("lokasi wina") || userText.includes("wina itu di mana")) {
                botResponse = "Wina adalah ibukota negara Austria yang terletak di bagian timur negara tersebut, di tepi Sungai Donau.";
            } else if (userText.includes("warsaw") || userText.includes("lokasi warsaw") || userText.includes("warsaw itu di mana")) {
                botResponse = "Warsaw adalah ibukota negara Polandia yang terletak di bagian tengah-timur negara tersebut, di tepi Sungai Vistula.";
            } else if (userText.includes("lisboa") || userText.includes("lokasi lisboa") || userText.includes("lisboa itu di mana")) {
                botResponse = "Lisboa (Lisbon) adalah ibukota negara Portugal yang terletak di bagian barat negara tersebut, di tepi Sungai Tagus.";
            } else if (userText.includes("athena") || userText.includes("lokasi athena") || userText.includes("athena itu di mana")) {
                botResponse = "Athena adalah ibukota negara Yunani yang terletak di bagian tenggara negara tersebut, dekat Laut Aegea.";
            } else if (userText.includes("moskow") || userText.includes("lokasi moskow") || userText.includes("moskow itu di mana")) {
                botResponse = "Moskow adalah ibukota negara Rusia yang terletak di bagian barat negara tersebut.";
            } else if (userText.includes("stockholm") || userText.includes("lokasi stockholm") || userText.includes("stockholm itu di mana")) {
                botResponse = "Stockholm adalah ibukota negara Swedia yang terletak di bagian tenggara negara tersebut, di tepi Laut Baltik.";
            } else if (userText.includes("oslo") || userText.includes("lokasi oslo") || userText.includes("oslo itu di mana")) {
                botResponse = "Oslo adalah ibukota negara Norwegia yang terletak di bagian tenggara negara tersebut, di tepi Oslofjord.";
            } else if (userText.includes("helsinki") || userText.includes("lokasi helsinki") || userText.includes("helsinki itu di mana")) {
                botResponse = "Helsinki adalah ibukota negara Finlandia yang terletak di bagian selatan negara tersebut, di tepi Teluk Finlandia.";
            } else if (userText.includes("dublin") || userText.includes("lokasi dublin") || userText.includes("dublin itu di mana")) {
                botResponse = "Dublin adalah ibukota negara Irlandia yang terletak di pantai timur negara tersebut, di tepi Laut Irlandia.";
            } else if (userText.includes("bern") || userText.includes("lokasi bern") || userText.includes("bern itu di mana")) {
                botResponse = "Bern adalah ibukota negara Swiss yang terletak di bagian barat-tengah negara tersebut, di tepi Sungai Aare.";
            } else if (userText.includes("budapest") || userText.includes("lokasi budapest") || userText.includes("budapest itu di mana")) {
                botResponse = "Budapest adalah ibukota negara Hongaria yang terletak di bagian tengah negara tersebut, di tepi Sungai Donau.";
            } else if (userText.includes("prague") || userText.includes("lokasi prague") || userText.includes("prague itu di mana")) {
                botResponse = "Prague (Praha) adalah ibukota negara Ceko yang terletak di bagian barat negara tersebut, di tepi Sungai Vltava.";
            } else if (userText.includes("sofia") || userText.includes("lokasi sofia") || userText.includes("sofia itu di mana")) {
                botResponse = "Sofia adalah ibukota negara Bulgaria yang terletak di bagian barat negara tersebut, dekat Pegunungan Vitosha.";
            } else if (userText.includes("kopenhagen") || userText.includes("lokasi kopenhagen") || userText.includes("kopenhagen itu di mana")) {
                botResponse = "Kopenhagen adalah ibukota negara Denmark yang terletak di pulau Sjælland, di bagian timur negara tersebut.";
            } else if (userText.includes("brussels") || userText.includes("lokasi brussels") || userText.includes("brussels itu di mana")) {
                botResponse = "Brussels adalah ibukota negara Belgia yang terletak di bagian tengah negara tersebut.";

            } else if (userText.includes("sarajevo") || userText.includes("lokasi sarajevo") || userText.includes("sarajevo itu di mana")) {
                botResponse = "Sarajevo adalah ibukota negara Bosnia dan Herzegovina yang terletak di bagian tengah-timur negara tersebut.";
            } else if (userText.includes("belgrade") || userText.includes("beograd") || userText.includes("belgrade itu di mana")) {
                botResponse = "Belgrade (Beograd) adalah ibukota negara Serbia yang terletak di pertemuan Sungai Sava dan Donau, di bagian utara negara tersebut.";
            } else if (userText.includes("podgorica") || userText.includes("lokasi podgorica") || userText.includes("podgorica itu di mana")) {
                botResponse = "Podgorica adalah ibukota negara Montenegro yang terletak di bagian selatan negara tersebut.";
            } else if (userText.includes("tirana") || userText.includes("lokasi tirana") || userText.includes("tirana itu di mana")) {
                botResponse = "Tirana adalah ibukota negara Albania yang terletak di bagian tengah negara tersebut.";
            } else if (userText.includes("skopje") || userText.includes("lokasi skopje") || userText.includes("skopje itu di mana")) {
                botResponse = "Skopje adalah ibukota negara Makedonia Utara yang terletak di bagian utara negara tersebut.";
            } else if (userText.includes("zagreb") || userText.includes("lokasi zagreb") || userText.includes("zagreb itu di mana")) {
                botResponse = "Zagreb adalah ibukota negara Kroasia yang terletak di bagian barat laut negara tersebut.";
            } else if (userText.includes("ljubljana") || userText.includes("lokasi ljubljana") || userText.includes("ljubljana itu di mana")) {
                botResponse = "Ljubljana adalah ibukota negara Slovenia yang terletak di bagian tengah negara tersebut.";
            } else if (userText.includes("sofia") || userText.includes("lokasi sofia") || userText.includes("sofia itu di mana")) {
                botResponse = "Sofia adalah ibukota negara Bulgaria yang terletak di bagian barat negara tersebut, dekat Pegunungan Vitosha.";
            } else if (userText.includes("pristina") || userText.includes("lokasi pristina") || userText.includes("pristina itu dimana")) {
                botResponse = "pristina adalah ibukota negara kosovo yang terletak di bagian dekat perbatasan serbia.";
            } else if (userText.includes("bukares") || userText.includes("bucharest") || userText.includes("bucharest itu di mana")) {
                botResponse = "Bucharest adalah ibukota negara Rumania yang terletak di bagian tenggara negara tersebut.";

                //amerikaaaa

            } else if (userText.includes("washington d.c") || userText.includes("lokasi washington d.c") || userText.includes("washington d.c itu di mana")) {
                botResponse = "Washington, D.C. adalah ibukota negara Amerika Serikat yang terletak di Pantai Timur negara tersebut, antara negara bagian Maryland dan Virginia.";
            } else if (userText.includes("ottawa") || userText.includes("lokasi ottawa") || userText.includes("ottawa itu di mana")) {
                botResponse = "Ottawa adalah ibukota negara Kanada yang terletak di bagian timur Ontario, dekat perbatasan dengan provinsi Quebec.";
            } else if (userText.includes("mexico city") || userText.includes("lokasi mexico city") || userText.includes("mexico city itu di mana")) {
                botResponse = "Mexico City adalah ibukota negara Meksiko yang terletak di lembah pusat negara tersebut.";
            } else if (userText.includes("guatemala city") || userText.includes("lokasi guatemala city") || userText.includes("guatemala city itu di mana")) {
                botResponse = "Guatemala City adalah ibukota negara Guatemala yang terletak di bagian selatan negara tersebut.";
            } else if (userText.includes("tegucigalpa") || userText.includes("lokasi tegucigalpa") || userText.includes("tegucigalpa itu di mana")) {
                botResponse = "Tegucigalpa adalah ibukota negara Honduras yang terletak di lembah pegunungan bagian tengah negara tersebut.";
            } else if (userText.includes("san salvador") || userText.includes("lokasi san salvador") || userText.includes("san salvador itu di mana")) {
                botResponse = "San Salvador adalah ibukota negara El Salvador yang terletak di bagian tengah negara tersebut, dekat Gunung San Salvador.";
            } else if (userText.includes("managua") || userText.includes("lokasi managua") || userText.includes("managua itu di mana")) {
                botResponse = "Managua adalah ibukota negara Nikaragua yang terletak di barat daya negara tersebut, di tepi Danau Managua.";
            } else if (userText.includes("san jose") || userText.includes("lokasi san jose") || userText.includes("san jose itu di mana")) {
                botResponse = "San José adalah ibukota negara Kosta Rika yang terletak di bagian tengah negara tersebut.";
            } else if (userText.includes("panama city") || userText.includes("lokasi panama city") || userText.includes("panama city itu di mana")) {
                botResponse = "Panama City adalah ibukota negara Panama yang terletak di bagian tengah negara tersebut, di tepi Samudra Pasifik.";
            } else if (userText.includes("havana") || userText.includes("lokasi havana") || userText.includes("havana itu di mana")) {
                botResponse = "Havana adalah ibukota negara Kuba yang terletak di pantai utara negara tersebut.";
            } else if (userText.includes("bogota") || userText.includes("lokasi bogota") || userText.includes("bogota itu di mana")) {
                botResponse = "Bogotá adalah ibukota negara Kolombia yang terletak di dataran tinggi tengah negara tersebut.";
            } else if (userText.includes("quito") || userText.includes("lokasi quito") || userText.includes("quito itu di mana")) {
                botResponse = "Quito adalah ibukota negara Ekuador yang terletak di dataran tinggi Andes, dekat garis khatulistiwa.";
            } else if (userText.includes("lima") || userText.includes("lokasi lima") || userText.includes("lima itu di mana")) {
                botResponse = "Lima adalah ibukota negara Peru yang terletak di pantai tengah negara tersebut, dekat Samudra Pasifik.";
            } else if (userText.includes("caracas") || userText.includes("lokasi caracas") || userText.includes("caracas itu di mana")) {
                botResponse = "Caracas adalah ibukota negara Venezuela yang terletak di bagian utara negara tersebut, dekat Laut Karibia.";
            } else if (userText.includes("brasilia") || userText.includes("lokasi brasilia") || userText.includes("brasilia itu di mana")) {
                botResponse = "Brasília adalah ibukota negara Brasil yang terletak di bagian tengah negara tersebut.";
            } else if (userText.includes("buenos") || userText.includes("lokasi buenos aires") || userText.includes("buenos aires itu di mana")) {
                botResponse = "Buenos Aires adalah ibukota negara Argentina yang terletak di pantai timur negara tersebut, di tepi Sungai Plata.";
            } else if (userText.includes("santiago") || userText.includes("lokasi santiago") || userText.includes("santiago itu di mana")) {
                botResponse = "Santiago adalah ibukota negara Chili yang terletak di lembah bagian tengah negara tersebut.";
            } else if (userText.includes("montevideo") || userText.includes("lokasi montevideo") || userText.includes("montevideo itu di mana")) {
                botResponse = "Montevideo adalah ibukota negara Uruguay yang terletak di pantai selatan negara tersebut, di tepi Sungai Plata.";
            } else if (userText.includes("georgetown") || userText.includes("lokasi georgetown") || userText.includes("georgetown itu di mana")) {
                botResponse = "Georgetown adalah ibukota negara Guyana yang terletak di pantai utara negara tersebut, dekat Laut Atlantik.";
            } else if (userText.includes("paramaribo") || userText.includes("lokasi paramaribo") || userText.includes("paramaribo itu di mana")) {
                botResponse = "Paramaribo adalah ibukota negara Suriname yang terletak di pantai utara negara tersebut.";


                //afrika

            } else if (userText.includes("kairo") || userText.includes("lokasi cairo") || userText.includes("cairo itu di mana")) {
                botResponse = "Kairo adalah ibukota negara Mesir yang terletak di bagian timur laut negara tersebut, dekat Delta Sungai Nil.";
            } else if (userText.includes("addis ababa") || userText.includes("lokasi addis ababa") || userText.includes("addis ababa itu di mana")) {
                botResponse = "Addis Ababa adalah ibukota negara Ethiopia yang terletak di dataran tinggi tengah negara tersebut.";
            } else if (userText.includes("nairobi") || userText.includes("lokasi nairobi") || userText.includes("nairobi itu di mana")) {
                botResponse = "Nairobi adalah ibukota negara Kenya yang terletak di bagian selatan negara tersebut.";
            } else if (userText.includes("kampala") || userText.includes("lokasi kampala") || userText.includes("kampala itu di mana")) {
                botResponse = "Kampala adalah ibukota negara Uganda yang terletak di tepi Danau Victoria, di bagian selatan negara.";
            } else if (userText.includes("kinshasa") || userText.includes("lokasi kinshasa") || userText.includes("kinshasa itu di mana")) {
                botResponse = "Kinshasa adalah ibukota negara Republik Demokratik Kongo yang terletak di tepi barat Sungai Kongo.";
            } else if (userText.includes("abidjan") || userText.includes("lokasi abidjan") || userText.includes("abidjan itu di mana")) {
                botResponse = "Abidjan adalah kota terbesar di Pantai Gading, terletak di pantai selatan negara tersebut.";
            } else if (userText.includes("pretoria") || userText.includes("lokasi pretoria") || userText.includes("pretoria itu di mana")) {
                botResponse = "Pretoria adalah salah satu dari tiga ibukota Afrika Selatan, terletak di bagian timur laut negara tersebut.";
            } else if (userText.includes("algiers") || userText.includes("lokasi algiers") || userText.includes("algiers itu di mana")) {
                botResponse = "Algiers adalah ibukota negara Aljazair yang terletak di pantai utara, berbatasan dengan Laut Mediterania.";
            } else if (userText.includes("rabat") || userText.includes("lokasi rabat") || userText.includes("rabat itu di mana")) {
                botResponse = "Rabat adalah ibukota negara Maroko yang terletak di pantai barat negara tersebut.";
            } else if (userText.includes("accra") || userText.includes("lokasi accra") || userText.includes("accra itu di mana")) {
                botResponse = "Accra adalah ibukota negara Ghana yang terletak di pantai selatan negara tersebut.";
            } else if (userText.includes("antananarivo") || userText.includes("lokasi antananarivo") || userText.includes("antananarivo itu di mana")) {
                botResponse = "Antananarivo adalah ibukota negara Madagaskar yang terletak di dataran tinggi tengah pulau Madagaskar.";
            } else if (userText.includes("dakar") || userText.includes("lokasi dakar") || userText.includes("dakar itu di mana")) {
                botResponse = "Dakar adalah ibukota negara Senegal yang terletak di Semenanjung Cape Verde di pantai barat negara tersebut.";
            } else if (userText.includes("lusaka") || userText.includes("lokasi lusaka") || userText.includes("lusaka itu di mana")) {
                botResponse = "Lusaka adalah ibukota negara Zambia yang terletak di bagian selatan-tengah negara tersebut.";
            } else if (userText.includes("yaounde") || userText.includes("lokasi yaounde") || userText.includes("yaounde itu di mana")) {
                botResponse = "Yaoundé adalah ibukota negara Kamerun yang terletak di bagian tengah negara tersebut.";
            } else if (userText.includes("mogadishu") || userText.includes("lokasi mogadishu") || userText.includes("mogadishu itu di mana")) {
                botResponse = "Mogadishu adalah ibukota negara Somalia yang terletak di pantai timur negara tersebut, berbatasan dengan Samudra Hindia.";
            } else if (userText.includes("tripoli") || userText.includes("lokasi tripoli") || userText.includes("tripoli itu di mana")) {
                botResponse = "Tripoli adalah ibukota negara Libya yang terletak di bagian barat laut negara tersebut, di tepi Laut Mediterania.";
            } else if (userText.includes("harare") || userText.includes("lokasi harare") || userText.includes("harare itu di mana")) {
                botResponse = "Harare adalah ibukota negara Zimbabwe yang terletak di bagian timur laut negara tersebut.";
            } else if (userText.includes("conakry") || userText.includes("lokasi conakry") || userText.includes("conakry itu di mana")) {
                botResponse = "Conakry adalah ibukota negara Guinea yang terletak di pantai barat negara tersebut, berbatasan dengan Samudra Atlantik.";
            } else if (userText.includes("tunis") || userText.includes("lokasi tunis") || userText.includes("tunis itu di mana")) {
                botResponse = "Tunis adalah ibukota negara Tunisia yang terletak di pantai timur laut negara tersebut.";
            } else if (userText.includes("niamey") || userText.includes("lokasi niamey") || userText.includes("niamey itu di mana")) {
                botResponse = "Niamey adalah ibukota negara Niger yang terletak di sepanjang Sungai Niger di barat daya negara tersebut.";
            } else if (userText.includes("banjul") || userText.includes("lokasi banjul") || userText.includes("banjul itu di mana")) {
                botResponse = "Banjul adalah ibukota negara Gambia yang terletak di pulau di Sungai Gambia, di dekat Samudra Atlantik.";
            } else if (userText.includes("gaborone") || userText.includes("lokasi gaborone") || userText.includes("gaborone itu di mana")) {
                botResponse = "Gaborone adalah ibukota negara Botswana yang terletak di bagian tenggara negara tersebut.";
            } else if (userText.includes("freetown") || userText.includes("lokasi freetown") || userText.includes("freetown itu di mana")) {
                botResponse = "Freetown adalah ibukota negara Sierra Leone yang terletak di pesisir Samudra Atlantik, di bagian barat negara tersebut.";
            } else if (userText.includes("lagos") || userText.includes("lokasi lagos") || userText.includes("lagos itu di mana")) {
                botResponse = "Lagos adalah kota terbesar di Nigeria yang terletak di pantai barat daya, meskipun ibukota resmi Nigeria adalah Abuja.";
            } else if (userText.includes("rabat") || userText.includes("lokasi rabat") || userText.includes("rabat itu di mana")) {
                botResponse = "Rabat adalah ibukota negara Maroko yang terletak di pantai barat negara tersebut, berbatasan dengan Samudra Atlantik.";
            } else if (userText.includes("ouagadougou") || userText.includes("lokasi ouagadougou") || userText.includes("ouagadougou itu di mana")) {
                botResponse = "Ouagadougou adalah ibukota negara Burkina Faso yang terletak di bagian tengah negara tersebut.";
            } else if (userText.includes("bissau") || userText.includes("lokasi bissau") || userText.includes("bissau itu di mana")) {
                botResponse = "Bissau adalah ibukota negara Guinea-Bissau yang terletak di pantai barat negara tersebut, berbatasan dengan Samudra Atlantik.";
            } else if (userText.includes("moroni") || userText.includes("lokasi moroni") || userText.includes("moroni itu di mana")) {
                botResponse = "Moroni adalah ibukota negara Komoro yang terletak di pulau Grande Comore di Samudra Hindia.";
            } else if (userText.includes("brazzaville") || userText.includes("lokasi brazzaville") || userText.includes("brazzaville itu di mana")) {
                botResponse = "Brazzaville adalah ibukota negara Republik Kongo yang terletak di tepi barat Sungai Kongo, di seberang kota Kinshasa.";
            } else if (userText.includes("victoria") || userText.includes("lokasi victoria") || userText.includes("victoria itu di mana")) {
                botResponse = "Victoria adalah ibukota negara Seychelles yang terletak di Pulau Mahé di Samudra Hindia.";



                //indonesia coyyyyy

            } else if (userText.includes("jakarta") || userText.includes("lokasi jakarta") || userText.includes("jakarta itu di mana")) {
                botResponse = "Jakarta adalah kota terbesar di Indonesia yang terletak di pantai barat laut Pulau Jawa.";
            } else if (userText.includes("surabaya") || userText.includes("lokasi surabaya") || userText.includes("surabaya itu di mana")) {
                botResponse = "Surabaya adalah kota terbesar kedua di Indonesia yang terletak di pantai timur laut Pulau Jawa, di Provinsi Jawa Timur.";
            } else if (userText.includes("bandung") || userText.includes("lokasi bandung") || userText.includes("bandung itu di mana")) {
                botResponse = "Bandung adalah kota besar yang terletak di dataran tinggi Jawa Barat, Indonesia.";
            } else if (userText.includes("medan") || userText.includes("lokasi medan") || userText.includes("medan itu di mana")) {
                botResponse = "Medan adalah kota terbesar di Pulau Sumatra, yang terletak di Provinsi Sumatera Utara.";
            } else if (userText.includes("makassar") || userText.includes("lokasi makassar") || userText.includes("makassar itu di mana")) {
                botResponse = "Makassar adalah kota besar di Indonesia yang terletak di pantai barat daya Pulau Sulawesi, di Provinsi Sulawesi Selatan.";
            } else if (userText.includes("semarang") || userText.includes("lokasi semarang") || userText.includes("semarang itu di mana")) {
                botResponse = "Semarang adalah ibukota Provinsi Jawa Tengah yang terletak di pantai utara Pulau Jawa.";
            } else if (userText.includes("palembang") || userText.includes("lokasi palembang") || userText.includes("palembang itu di mana")) {
                botResponse = "Palembang adalah kota besar di Pulau Sumatra yang terletak di Provinsi Sumatera Selatan, di tepi Sungai Musi.";
            } else if (userText.includes("denpasar") || userText.includes("lokasi denpasar") || userText.includes("denpasar itu di mana")) {
                botResponse = "Denpasar adalah ibukota Provinsi Bali yang terletak di bagian selatan Pulau Bali.";
            } else if (userText.includes("yogyakarta") || userText.includes("lokasi yogyakarta") || userText.includes("yogyakarta itu di mana")) {
                botResponse = "Yogyakarta adalah kota bersejarah dan budaya yang terletak di bagian selatan Pulau Jawa, di Provinsi Daerah Istimewa Yogyakarta.";
            } else if (userText.includes("balikpapan") || userText.includes("lokasi balikpapan") || userText.includes("balikpapan itu di mana")) {
                botResponse = "Balikpapan adalah kota pelabuhan besar di pesisir timur Kalimantan Timur, Indonesia.";
            } else if (userText.includes("samarinda") || userText.includes("lokasi samarinda") || userText.includes("samarinda itu di mana")) {
                botResponse = "Samarinda adalah ibukota Provinsi Kalimantan Timur yang terletak di tepi Sungai Mahakam.";
            } else if (userText.includes("batam") || userText.includes("lokasi batam") || userText.includes("batam itu di mana")) {
                botResponse = "Batam adalah kota besar yang terletak di Kepulauan Riau, dekat dengan Singapura.";
            } else if (userText.includes("manado") || userText.includes("lokasi manado") || userText.includes("manado itu di mana")) {
                botResponse = "Manado adalah ibukota Provinsi Sulawesi Utara yang terletak di pesisir utara Pulau Sulawesi.";
            } else if (userText.includes("pontianak") || userText.includes("lokasi pontianak") || userText.includes("pontianak itu di mana")) {
                botResponse = "Pontianak adalah ibukota Provinsi Kalimantan Barat yang terletak di tepi Sungai Kapuas, dekat garis khatulistiwa.";

            } else if (userText.includes("jayapura") || userText.includes("lokasi jayapura") || userText.includes("jayapura itu di mana")) {
                botResponse = "Jayapura adalah ibukota Provinsi Papua yang terletak di pantai utara Pulau Papua, dekat perbatasan dengan Papua Nugini.";
            } else if (userText.includes("merauke dimana") || userText.includes("lokasi merauke") || userText.includes("merauke itu di mana")) {
                botResponse = "Merauke adalah kota paling timur di Indonesia, yang terletak di Provinsi Papua Selatan, dekat perbatasan dengan Papua Nugini.";
            } else if (userText.includes("ambon") || userText.includes("lokasi ambon") || userText.includes("ambon itu di mana")) {
                botResponse = "Ambon adalah ibukota Provinsi Maluku yang terletak di Pulau Ambon, di bagian timur Indonesia.";
            } else if (userText.includes("kupang") || userText.includes("lokasi kupang") || userText.includes("kupang itu di mana")) {
                botResponse = "Kupang adalah ibukota Provinsi Nusa Tenggara Timur yang terletak di bagian barat Pulau Timor.";
            } else if (userText.includes("ternate") || userText.includes("lokasi ternate") || userText.includes("ternate itu di mana")) {
                botResponse = "Ternate adalah kota di Provinsi Maluku Utara yang terletak di Pulau Ternate, di Kepulauan Maluku.";
            } else if (userText.includes("sorong") || userText.includes("lokasi sorong") || userText.includes("sorong itu di mana")) {
                botResponse = "Sorong adalah kota di Provinsi Papua Barat Daya, yang terletak di ujung barat Pulau Papua.";
            } else if (userText.includes("manokwari") || userText.includes("lokasi manokwari") || userText.includes("manokwari itu di mana")) {
                botResponse = "Manokwari adalah ibukota Provinsi Papua Barat yang terletak di pesisir utara Pulau Papua.";
            } else if (userText.includes("timika") || userText.includes("lokasi timika") || userText.includes("timika itu di mana")) {
                botResponse = "Timika adalah kota yang terletak di Kabupaten Mimika, Provinsi Papua Tengah, dekat area pertambangan Grasberg.";

                //luas pulau indonesia

            } else if (userText.includes("pulau sumatra luasnya berapa") || userText.includes("luas pulau sumatra")) {
                botResponse = "Pulau Sumatra memiliki luas sekitar 473.481 km², menjadikannya pulau terbesar kedua di Indonesia.";
            } else if (userText.includes("pulau jawa luasnya berapa") || userText.includes("luas pulau jawa")) {
                botResponse = "Pulau Jawa memiliki luas sekitar 138.794 km², dan merupakan pulau terpadat di Indonesia.";
            } else if (userText.includes("pulau kalimantan luasnya berapa") || userText.includes("luas pulau kalimantan")) {
                botResponse = "Pulau Kalimantan memiliki luas sekitar 743.330 km², menjadikannya pulau terbesar di Indonesia dan ketiga terbesar di dunia.";
            } else if (userText.includes("pulau sulawesi luasnya berapa") || userText.includes("luas pulau sulawesi")) {
                botResponse = "Pulau Sulawesi memiliki luas sekitar 189.216 km², dan terkenal dengan bentuknya yang unik seperti huruf 'K'.";
            } else if (userText.includes("pulau papua luasnya berapa") || userText.includes("luas pulau papua")) {
                botResponse = "Pulau Papua memiliki luas sekitar 786.000 km², dan merupakan pulau terbesar kedua di Indonesia setelah Kalimantan.";
            } else if (userText.includes("pulau bali luasnya berapa") || userText.includes("luas pulau bali")) {
                botResponse = "Pulau Bali memiliki luas sekitar 5.780 km², terkenal sebagai tujuan wisata internasional.";
            } else if (userText.includes("pulau sumba luasnya berapa") || userText.includes("luas pulau sumba")) {
                botResponse = "Pulau Sumba memiliki luas sekitar 11.153 km², dikenal dengan budaya dan tradisi uniknya.";
            } else if (userText.includes("pulau flores luasnya berapa") || userText.includes("luas pulau flores")) {
                botResponse = "Pulau Flores memiliki luas sekitar 13.540 km², dan terkenal dengan keindahan alam serta keberagaman budaya.";
            } else if (userText.includes("pulau lombok luasnya berapa") || userText.includes("luas pulau lombok")) {
                botResponse = "Pulau Lombok memiliki luas sekitar 4.725 km², dan terkenal dengan Gunung Rinjani yang megah.";
            } else if (userText.includes("pulau komodo luasnya berapa") || userText.includes("luas pulau komodo")) {
                botResponse = "Pulau Komodo memiliki luas sekitar 390 km², dan merupakan habitat asli komodo, hewan purba yang dilindungi.";

                //luas asean

            } else if (userText.includes("luas brunei") || userText.includes("luas negara brunei")) {
                botResponse = "Luas negara Brunei adalah sekitar 5.765 km², menjadikannya salah satu negara terkecil di dunia.";
            } else if (userText.includes("luas indonesia") || userText.includes("luas negara indonesia")) {
                botResponse = "Luas negara Indonesia adalah sekitar 1.904.569 km², menjadikannya negara kepulauan terbesar di dunia.";
            } else if (userText.includes("luas malaysia") || userText.includes("luas negara malaysia")) {
                botResponse = "Luas negara Malaysia adalah sekitar 330.803 km², terdiri dari dua bagian, Semenanjung Malaysia dan Malaysia Timur.";
            } else if (userText.includes("luas filipina") || userText.includes("luas negara filipina")) {
                botResponse = "Luas negara Filipina adalah sekitar 300.000 km², terdiri dari lebih dari 7.000 pulau.";
            } else if (userText.includes("luas singapura") || userText.includes("luas negara singapura")) {
                botResponse = "Luas negara Singapura adalah sekitar 728,6 km², menjadikannya salah satu negara terkecil di ASEAN.";
            } else if (userText.includes("luas thailand") || userText.includes("luas negara thailand")) {
                botResponse = "Luas negara Thailand adalah sekitar 513.120 km², dan dikenal sebagai negara yang kaya akan budaya dan sejarah.";
            } else if (userText.includes("luas vietnam") || userText.includes("luas negara vietnam")) {
                botResponse = "Luas negara Vietnam adalah sekitar 331.212 km², terkenal dengan pemandangan alam yang indah dan budaya yang kaya.";
            } else if (userText.includes("luas laos") || userText.includes("luas negara laos")) {
                botResponse = "Luas negara Laos adalah sekitar 236.800 km², dan merupakan satu-satunya negara tanpa akses laut di Asia Tenggara.";
            } else if (userText.includes("luas kambodia") || userText.includes("luas negara kambodia")) {
                botResponse = "Luas negara Kamboja adalah sekitar 181.035 km², terkenal dengan situs warisan dunia Angkor Wat.";
            } else if (userText.includes("luas myanmar") || userText.includes("luas negara myanmar")) {
                botResponse = "Luas negara Myanmar adalah sekitar 676.578 km², dan memiliki beragam etnis dan budaya.";
            

                //versi luas eropa

            } else if (userText.includes("luas jerman") || userText.includes("luas negara jerman")) {
                botResponse = "Luas negara Jerman adalah sekitar 357.022 km², dan merupakan negara dengan ekonomi terbesar di Eropa.";
            } else if (userText.includes("luas prancis") || userText.includes("luas negara prancis")) {
                botResponse = "Luas negara Prancis adalah sekitar 551.695 km², dan terkenal dengan seni, budaya, dan gastronominya.";
            } else if (userText.includes("luas inggris") || userText.includes("luas negara inggris")) {
                botResponse = "Luas negara Inggris adalah sekitar 243.610 km², dan merupakan bagian dari Britania Raya.";
            } else if (userText.includes("luas italia") || userText.includes("luas negara italia")) {
                botResponse = "Luas negara Italia adalah sekitar 301.340 km², dan dikenal dengan sejarah dan seni yang kaya.";
            } else if (userText.includes("luas spanyol") || userText.includes("luas negara spanyol")) {
                botResponse = "Luas negara Spanyol adalah sekitar 505.990 km², terkenal dengan budaya dan festival yang beragam.";
            } else if (userText.includes("luas belanda") || userText.includes("luas negara belanda")) {
                botResponse = "Luas negara Belanda adalah sekitar 41.543 km², terkenal dengan kincir angin dan taman bunga.";
            } else if (userText.includes("luas belgia") || userText.includes("luas negara belgia")) {
                botResponse = "Luas negara Belgia adalah sekitar 30.528 km², dan dikenal dengan cokelat serta birnya.";
            } else if (userText.includes("luas swedia") || userText.includes("luas negara swedia")) {
                botResponse = "Luas negara Swedia adalah sekitar 450.295 km², dan dikenal dengan keindahan alamnya.";
            } else if (userText.includes("luas norwegia") || userText.includes("luas negara norwegia")) {
                botResponse = "Luas negara Norwegia adalah sekitar 323.802 km², terkenal dengan fjord yang menakjubkan.";
            } else if (userText.includes("luas finlandia") || userText.includes("luas negara finlandia")) {
                botResponse = "Luas negara Finlandia adalah sekitar 338.424 km², dan terkenal dengan danau dan hutan yang luas.";
            } else if (userText.includes("luas portugal") || userText.includes("luas negara portugal")) {
                botResponse = "Luas negara Portugal adalah sekitar 92.212 km², dikenal dengan sejarah maritimnya.";
            } else if (userText.includes("luas yunani") || userText.includes("luas negara yunani")) {
                botResponse = "Luas negara Yunani adalah sekitar 131.957 km², terkenal dengan sejarah kuno dan pulau-pulaunya.";
            } else if (userText.includes("luas irlandia") || userText.includes("luas negara irlandia")) {
                botResponse = "Luas negara Irlandia adalah sekitar 70.273 km², dikenal dengan lanskap hijau dan budaya yang kaya.";
            } else if (userText.includes("luas polandia") || userText.includes("luas negara polandia")) {
                botResponse = "Luas negara Polandia adalah sekitar 312.696 km², dan memiliki banyak situs bersejarah.";
            } else if (userText.includes("luas hungaria") || userText.includes("luas negara hungaria")) {
                botResponse = "Luas negara Hungaria adalah sekitar 93.030 km², dikenal dengan Danau Balaton dan budaya yang kaya.";

                //luas asia

            } else if (userText.includes("luas cina") || userText.includes("luas negara cina")) {
                botResponse = "Luas negara Cina adalah sekitar 9.596.961 km², menjadikannya negara terbesar ketiga di dunia berdasarkan luas daratan.";
            } else if (userText.includes("luas india") || userText.includes("luas negara india")) {
                botResponse = "Luas negara India adalah sekitar 3.287.263 km², dengan populasi terbesar kedua di dunia.";
            } else if (userText.includes("luas jepang") || userText.includes("luas negara jepang")) {
                botResponse = "Luas negara Jepang adalah sekitar 377.975 km², terdiri dari empat pulau utama dan banyak pulau kecil.";
            } else if (userText.includes("luas korea selatan") || userText.includes("luas negara korea selatan")) {
                botResponse = "Luas negara Korea Selatan adalah sekitar 100.210 km², dan terkenal dengan teknologi maju serta budaya K-pop.";
            } else if (userText.includes("luas korea utara") || userText.includes("luas negara korea utara")) {
                botResponse = "Luas negara Korea Utara adalah sekitar 120.538 km², berbatasan dengan Korea Selatan dan Cina.";
            } else if (userText.includes("luas kazakhstan") || userText.includes("luas negara kazakhstan")) {
                botResponse = "Luas negara Kazakhstan adalah sekitar 2.724.900 km², menjadikannya negara terbesar di Asia Tengah.";
            } else if (userText.includes("luas iran") || userText.includes("luas negara iran")) {
                botResponse = "Luas negara Iran adalah sekitar 1.648.195 km², dengan wilayah pegunungan yang luas dan dataran tinggi.";
            } else if (userText.includes("luas arab saudi") || userText.includes("luas negara arab saudi")) {
                botResponse = "Luas negara Arab Saudi adalah sekitar 2.149.690 km², terkenal sebagai negara penghasil minyak terbesar di dunia.";
            } else if (userText.includes("luas turki") || userText.includes("luas negara turki")) {
                botResponse = "Luas negara Turki adalah sekitar 783.356 km², yang terletak di antara Eropa dan Asia.";
            } else if (userText.includes("luas afghanistan") || userText.includes("luas negara afghanistan")) {
                botResponse = "Luas negara Afghanistan adalah sekitar 652.230 km², yang terkenal dengan pegunungan Hindu Kush.";
            } else if (userText.includes("luas pakistan") || userText.includes("luas negara pakistan")) {
                botResponse = "Luas negara Pakistan adalah sekitar 881.913 km², dengan beragam lanskap dari pegunungan hingga gurun.";
            } else if (userText.includes("luas mongolia") || userText.includes("luas negara mongolia")) {
                botResponse = "Luas negara Mongolia adalah sekitar 1.564.116 km², dikenal dengan stepa yang luas dan budaya nomadik.";
            } else if (userText.includes("luas yaman") || userText.includes("luas negara yaman")) {
                botResponse = "Luas negara Yaman adalah sekitar 527.968 km², dengan lanskap dari pegunungan hingga pantai di Laut Merah.";
            } else if (userText.includes("luas suriah") || userText.includes("luas negara suriah")) {
                botResponse = "Luas negara Suriah adalah sekitar 185.180 km², yang terletak di wilayah Timur Tengah.";
            } else if (userText.includes("luas irak") || userText.includes("luas negara irak")) {
                botResponse = "Luas negara Irak adalah sekitar 438.317 km², dengan wilayah dataran rendah di selatan dan pegunungan di utara.";
            } else if (userText.includes("luas yordania") || userText.includes("luas negara yordania")) {
                botResponse = "Luas negara Yordania adalah sekitar 89.342 km², dan terkenal dengan situs bersejarah seperti Petra.";
            } else if (userText.includes("luas israel") || userText.includes("luas negara israel")) {
                botResponse = "Luas negara Israel adalah sekitar 22.145 km², terletak di tepi timur Laut Mediterania.";
            } else if (userText.includes("luas georgia") || userText.includes("luas negara georgia")) {
                botResponse = "Luas negara Georgia adalah sekitar 69.700 km², terletak di wilayah Kaukasus di antara Asia dan Eropa.";
            } else if (userText.includes("luas armenia") || userText.includes("luas negara armenia")) {
                botResponse = "Luas negara Armenia adalah sekitar 29.743 km², dikenal sebagai negara pegunungan di wilayah Kaukasus.";
            } else if (userText.includes("luas azerbaijan") || userText.includes("luas negara azerbaijan")) {
                botResponse = "Luas negara Azerbaijan adalah sekitar 86.600 km², juga terletak di wilayah Kaukasus.";
            

                //luas mamarika

            } else if (userText.includes("luas amerika serikat") || userText.includes("luas negara amerika serikat")) {
                botResponse = "Luas negara Amerika Serikat adalah sekitar 9.525.067 km², menjadikannya negara terbesar ketiga di dunia.";
            } else if (userText.includes("luas kanada") || userText.includes("luas negara kanada")) {
                botResponse = "Luas negara Kanada adalah sekitar 9.984.670 km², negara terbesar kedua di dunia berdasarkan luas daratan.";
            } else if (userText.includes("luas meksiko") || userText.includes("luas negara meksiko")) {
                botResponse = "Luas negara Meksiko adalah sekitar 1.964.375 km², terletak di Amerika Utara.";
            } else if (userText.includes("luas brasil") || userText.includes("luas negara brasil")) {
                botResponse = "Luas negara Brasil adalah sekitar 8.515.767 km², negara terbesar di Amerika Selatan.";
            } else if (userText.includes("luas argentina") || userText.includes("luas negara argentina")) {
                botResponse = "Luas negara Argentina adalah sekitar 2.780.400 km², menjadikannya negara terbesar kedua di Amerika Selatan.";
            } else if (userText.includes("luas chili") || userText.includes("luas negara chili")) {
                botResponse = "Luas negara Chili adalah sekitar 756.102 km², negara yang panjangnya terbentang sepanjang pesisir barat Amerika Selatan.";
            } else if (userText.includes("luas kolombia") || userText.includes("luas negara kolombia")) {
                botResponse = "Luas negara Kolombia adalah sekitar 1.141.748 km², terletak di bagian utara Amerika Selatan.";
            } else if (userText.includes("luas venezuela") || userText.includes("luas negara venezuela")) {
                botResponse = "Luas negara Venezuela adalah sekitar 916.445 km², terletak di pesisir utara Amerika Selatan.";
            } else if (userText.includes("luas peru") || userText.includes("luas negara peru")) {
                botResponse = "Luas negara Peru adalah sekitar 1.285.216 km², terkenal dengan pegunungan Andes dan sejarah Inka.";
            } else if (userText.includes("luas bolivia") || userText.includes("luas negara bolivia")) {
                botResponse = "Luas negara Bolivia adalah sekitar 1.098.581 km², negara yang terkurung daratan di Amerika Selatan.";
            } else if (userText.includes("luas ecuador") || userText.includes("luas negara ecuador")) {
                botResponse = "Luas negara Ekuador adalah sekitar 283.561 km², termasuk Kepulauan Galapagos.";
            } else if (userText.includes("luas uruguay") || userText.includes("luas negara uruguay")) {
                botResponse = "Luas negara Uruguay adalah sekitar 176.215 km², terletak di pesisir tenggara Amerika Selatan.";
            } else if (userText.includes("luas paraguay") || userText.includes("luas negara paraguay")) {
                botResponse = "Luas negara Paraguay adalah sekitar 406.752 km², terkurung daratan di bagian tengah Amerika Selatan.";
            } else if (userText.includes("luas guyana") || userText.includes("luas negara guyana")) {
                botResponse = "Luas negara Guyana adalah sekitar 214.969 km², terletak di pesisir utara Amerika Selatan.";
            } else if (userText.includes("luas suriname") || userText.includes("luas negara suriname")) {
                botResponse = "Luas negara Suriname adalah sekitar 163.820 km², negara terkecil di Amerika Selatan.";
            } else if (userText.includes("luas jamaika") || userText.includes("luas negara jamaika")) {
                botResponse = "Luas negara Jamaika adalah sekitar 10.991 km², negara pulau di Laut Karibia.";
            } else if (userText.includes("luas kuba") || userText.includes("luas negara kuba")) {
                botResponse = "Luas negara Kuba adalah sekitar 109.884 km², negara pulau terbesar di Karibia.";
            } else if (userText.includes("luas haiti") || userText.includes("luas negara haiti")) {
                botResponse = "Luas negara Haiti adalah sekitar 27.750 km², terletak di pulau Hispaniola di Karibia.";
            } else if (userText.includes("luas repubik dominika") || userText.includes("luas negara republik dominika")) {
                botResponse = "Luas negara Republik Dominika adalah sekitar 48.671 km², terletak di pulau Hispaniola bersama dengan Haiti.";
            } else if (userText.includes("luas panama") || userText.includes("luas negara panama")) {
                botResponse = "Luas negara Panama adalah sekitar 75.417 km², menghubungkan Amerika Tengah dengan Amerika Selatan.";
            } else if (userText.includes("luas nikaragua") || userText.includes("luas negara nikaragua")) {
                botResponse = "Luas negara Nikaragua adalah sekitar 130.373 km², negara terbesar di Amerika Tengah.";
            } else if (userText.includes("luas honduras") || userText.includes("luas negara honduras")) {
                botResponse = "Luas negara Honduras adalah sekitar 112.492 km², terletak di Amerika Tengah.";
            } else if (userText.includes("luas el salvador") || userText.includes("luas negara el salvador")) {
                botResponse = "Luas negara El Salvador adalah sekitar 21.041 km², negara terkecil di daratan Amerika Tengah.";
            } else if (userText.includes("luas guatemala") || userText.includes("luas negara guatemala")) {
                botResponse = "Luas negara Guatemala adalah sekitar 108.889 km², terletak di sebelah barat daya Meksiko.";
            } else if (userText.includes("luas belize") || userText.includes("luas negara belize")) {
                botResponse = "Luas negara Belize adalah sekitar 22.966 km², terletak di pesisir timur Amerika Tengah.";
            } else if (userText.includes("luas bahama") || userText.includes("luas negara bahama")) {
                botResponse = "Luas negara Bahama adalah sekitar 13.943 km², negara kepulauan di Laut Karibia.";


                //afrikaaa luass

            } else if (userText.includes("luas aljazair") || userText.includes("luas negara aljazair")) {
                botResponse = "Luas negara Aljazair adalah sekitar 2.381.741 km², menjadikannya negara terbesar di Afrika.";
            } else if (userText.includes("luas republik demokratik kongo") || userText.includes("luas negara republik demokratik kongo")) {
                botResponse = "Luas negara Republik Demokratik Kongo adalah sekitar 2.344.858 km², negara terbesar kedua di Afrika.";
            } else if (userText.includes("luas sudan") || userText.includes("luas negara sudan")) {
                botResponse = "Luas negara Sudan adalah sekitar 1.886.068 km², terletak di Afrika Timur Laut.";
            } else if (userText.includes("luas libya") || userText.includes("luas negara libya")) {
                botResponse = "Luas negara Libya adalah sekitar 1.759.541 km², terletak di Afrika Utara.";
            } else if (userText.includes("luas chad") || userText.includes("luas negara chad")) {
                botResponse = "Luas negara Chad adalah sekitar 1.284.000 km², terletak di Afrika Tengah.";
            } else if (userText.includes("luas niger") || userText.includes("luas negara niger")) {
                botResponse = "Luas negara Niger adalah sekitar 1.267.000 km², terletak di Afrika Barat.";
            } else if (userText.includes("luas angola") || userText.includes("luas negara angola")) {
                botResponse = "Luas negara Angola adalah sekitar 1.246.700 km², terletak di bagian barat daya Afrika.";
            } else if (userText.includes("luas mali") || userText.includes("luas negara mali")) {
                botResponse = "Luas negara Mali adalah sekitar 1.240.192 km², terletak di Afrika Barat.";
            } else if (userText.includes("luas afrika selatan") || userText.includes("luas negara afrika selatan")) {
                botResponse = "Luas negara Afrika Selatan adalah sekitar 1.221.037 km², terletak di ujung selatan Afrika.";
            } else if (userText.includes("luas ethiopia") || userText.includes("luas negara ethiopia")) {
                botResponse = "Luas negara Ethiopia adalah sekitar 1.104.300 km², terletak di Tanduk Afrika.";
            } else if (userText.includes("luas mauritania") || userText.includes("luas negara mauritania")) {
                botResponse = "Luas negara Mauritania adalah sekitar 1.030.700 km², terletak di bagian barat laut Afrika.";
            } else if (userText.includes("luas mesir") || userText.includes("luas negara mesir")) {
                botResponse = "Luas negara Mesir adalah sekitar 1.001.450 km², sebagian besar wilayahnya adalah gurun.";
            } else if (userText.includes("luas tanzania") || userText.includes("luas negara tanzania")) {
                botResponse = "Luas negara Tanzania adalah sekitar 945.087 km², terletak di Afrika Timur.";
            } else if (userText.includes("luas nigeria") || userText.includes("luas negara nigeria")) {
                botResponse = "Luas negara Nigeria adalah sekitar 923.769 km², terletak di Afrika Barat.";
            } else if (userText.includes("luas namibia") || userText.includes("luas negara namibia")) {
                botResponse = "Luas negara Namibia adalah sekitar 825.615 km², terletak di Afrika Barat Daya.";
            } else if (userText.includes("luas mozambik") || userText.includes("luas negara mozambik")) {
                botResponse = "Luas negara Mozambik adalah sekitar 801.590 km², terletak di pesisir tenggara Afrika.";
            } else if (userText.includes("luas zambia") || userText.includes("luas negara zambia")) {
                botResponse = "Luas negara Zambia adalah sekitar 752.612 km², terletak di Afrika Selatan.";
            } else if (userText.includes("luas madagaskar") || userText.includes("luas negara madagaskar")) {
                botResponse = "Luas negara Madagaskar adalah sekitar 587.041 km², sebuah pulau di Samudra Hindia.";
            } else if (userText.includes("luas botswana") || userText.includes("luas negara botswana")) {
                botResponse = "Luas negara Botswana adalah sekitar 581.730 km², terletak di bagian selatan Afrika.";
            } else if (userText.includes("luas kenya") || userText.includes("luas negara kenya")) {
                botResponse = "Luas negara Kenya adalah sekitar 580.367 km², terletak di Afrika Timur.";
            } else if (userText.includes("luas maroko") || userText.includes("luas negara maroko")) {
                botResponse = "Luas negara Maroko adalah sekitar 446.550 km², terletak di Afrika Utara.";
            } else if (userText.includes("luas zimbabwe") || userText.includes("luas negara zimbabwe")) {
                botResponse = "Luas negara Zimbabwe adalah sekitar 390.757 km², terletak di bagian selatan Afrika.";
            } else if (userText.includes("luas guinea") || userText.includes("luas negara guinea")) {
                botResponse = "Luas negara Guinea adalah sekitar 245.857 km², terletak di Afrika Barat.";
            } else if (userText.includes("luas rwanda") || userText.includes("luas negara rwanda")) {
                botResponse = "Luas negara Rwanda adalah sekitar 26.338 km², salah satu negara terkecil di Afrika.";
            } else if (userText.includes("luas burundi") || userText.includes("luas negara burundi")) {
                botResponse = "Luas negara Burundi adalah sekitar 27.834 km², terletak di Afrika Timur.";
            } else if (userText.includes("luas sierra leone") || userText.includes("luas negara sierra leone")) {
                botResponse = "Luas negara Sierra Leone adalah sekitar 71.740 km², terletak di pesisir barat Afrika.";
            } else if (userText.includes("luas eritrea") || userText.includes("luas negara eritrea")) {
                botResponse = "Luas negara Eritrea adalah sekitar 117.600 km², terletak di Tanduk Afrika.";
            } else if (userText.includes("luas somalia") || userText.includes("luas negara somalia")) {
                botResponse = "Luas negara Somalia adalah sekitar 637.657 km², terletak di Tanduk Afrika.";


                //benua luas

            } else if (userText.includes("luas asia") || userText.includes("luas benua asia")) {
                botResponse = "Luas benua Asia adalah sekitar 44.579.000 km², menjadikannya benua terbesar di dunia.";
            } else if (userText.includes("luas afrika") || userText.includes("luas benua afrika")) {
                botResponse = "Luas benua Afrika adalah sekitar 30.370.000 km², menjadikannya benua terbesar kedua di dunia.";
            } else if (userText.includes("luas amerika utara") || userText.includes("luas benua amerika utara")) {
                botResponse = "Luas benua Amerika Utara adalah sekitar 24.709.000 km², mencakup negara-negara seperti Amerika Serikat, Kanada, dan Meksiko.";
            } else if (userText.includes("luas amerika selatan") || userText.includes("luas benua amerika selatan")) {
                botResponse = "Luas benua Amerika Selatan adalah sekitar 17.840.000 km², dengan negara terbesar yaitu Brasil.";
            } else if (userText.includes("luas antartika") || userText.includes("luas benua antartika")) {
                botResponse = "Luas benua Antartika adalah sekitar 14.000.000 km², sebagian besar tertutup oleh es sepanjang tahun.";
            } else if (userText.includes("luas eropa") || userText.includes("luas benua eropa")) {
                botResponse = "Luas benua Eropa adalah sekitar 10.180.000 km², dengan negara terbesar adalah Rusia (bagian Eropa).";
            } else if (userText.includes("luas australia") || userText.includes("luas benua australia") || userText.includes("luas benua oseania") || userText.includes("luas oseania")) {
                botResponse = "Luas benua Australia/Oseania adalah sekitar 8.525.989 km², mencakup Australia, Selandia Baru, dan kepulauan di Pasifik.";
            
        
            
        
            
        
        
         
        
        
            
        
            
        
            
        
            
        
            
         
            
        
            
         




                
            } else if (userText.includes("sma negeri 2 merauke") || userText.includes("sma negeri dua merauke"))  {
                botResponse = "Alamat SMA Negeri 2 Merauke adalah di Jalan Nowari No. 97, Karang Indah, Kecamatan Merauke, Kabupaten Merauke, Papua Selatan.  Sekolah ini didirikan pada 1 April 1991.";

            } else if (userText.includes("alasan") || userText.includes("diciptakan"))  {
                botResponse = "alasan saya diciptakan adalah untuk membantu anda dalam menjawab sebagian ilmu tentang geografi umum";



            } else if (userText.includes("kabar") || userText.includes("keadaan"))  {
                botResponse = " alhamdulillah keadaan saya baik.";
            } else if (userText.includes("nama") || userText.includes("kamu siapa"))  {
                botResponse = " Nama saya adalah Farid Muhammad Hilan.";
            } else if (userText.includes("hai") || userText.includes("halo"))  {
                botResponse = " Ohh hai senang bertemu dengan anda :)";
            } else if (userText.includes("bertanya") || userText.includes("ingin"))  {
                botResponse = " Ohh silahkan saya siap melayani anda untuk menjawab prtanyaan khususnya untuk pengetahuan geografi umum dan matematika sederhana";

            } else if (userText.includes("pagi") || userText.includes("shubuh"))  {
                botResponse = " iyaaaa selamat pagi juga :)";
            } else if (userText.includes("siang") || userText.includes("dhuhur"))  {
                botResponse = " iyaaaa selamat siang juga :)";
            } else if (userText.includes("sore") || userText.includes("petang"))  {
                botResponse = " iyaaaa selamat sore juga :)";
            } else if (userText.includes("malam") || userText.includes("isya"))  {
                botResponse = " iyaaaa selamat malam juga :)";

            } else if (userText.includes("assalamualaikum") || userText.includes("warahmatullahi"))  {
                botResponse = " waalaikum salam warahmatullahi wabarakatuh";

            } else if (userText.includes("ganteng") || userText.includes("tampan") || userText.includes("keren"))  {
                botResponse = " terima kasih banyak :)";
            } else if (userText.includes("kasih") || userText.includes("terimakasih"))  {
                botResponse = " sama sama senang membantu anda :)";
            } else if (userText.includes("pacar") || userText.includes("pasangan"))  {
                botResponse = " untuk saat ini saya masih single,saya mau fokus bersekolah dulu";
 





                


            } else if (userText.includes("tempat tinggal") || userText.includes("alamat"))  {
                botResponse = " tempat tinggal saya di jalan biak daerah bampel.";
            } else if (userText.includes("sekolah") || userText.includes("kelas"))  {
                botResponse = " saya bersekolah di sma negeri dua merauke dan saya duduk di kelas 11 6 informatika.";
            } else if (userText.includes("smp") || userText.includes("sebelumnya sekolah dimana"))  {
                botResponse = " saya sebelumnya bersekolah di smp muhammadiyah merauke di jalan spadem.";
            } else if (userText.includes("makanan") || userText.includes("makanan favorit mu"))  {
                botResponse = " makanan favorit saya adalah terong sambal tomat dan ayam kentaky.";
            } else if (userText.includes("mata pelajaran") || userText.includes("mapel"))  {
                botResponse = " mata pelajaran favorit saya adalah geografi, matematika, sejarah, dan fisika.";
            } else if (userText.includes("agama") || userText.includes("kepercayaan"))  {
                botResponse = " agama saya adalah islam.";
            } else if (userText.includes("hari") || userText.includes("tanggal")) {
            var days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
            var months = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

            var today = new Date();
            var day = days[today.getDay()];
            var month = months[today.getMonth()];
            var date = today.getDate();
            var year = today.getFullYear();
            botResponse = "Hari ini adalah " + day + ", " + date + " " + month + " " + year + ".";
         

    } else if (userText.includes("jam") || userText.includes("pukul")) {
        var now = new Date();
        var hours = String(now.getHours()).padStart(2, '0');
        var minutes = String(now.getMinutes()).padStart(2, '0');
        var seconds = String(now.getSeconds()).padStart(2, '0');
        botResponse = "Sekarang pukul " + hours + ":" + minutes + "";
    }

    

    




                // Cek negara dalam peta geografi
                for (const [region, countries] of Object.entries(regions)) {
    for (const country of countries) {
        // Cek apakah nama negara ada dalam userText
        if (userText.includes(country)) {
            botResponse = `${country.charAt(0).toUpperCase() + country.slice(1)} terletak di ${region.replace(/([A-Z])/g, ' $1').trim()}.`;
            audioToPlay = document.getElementById(`${region}Audio`);
            videoToPlay = "assets/videodua.mp4";
            break;
        }
    }
    // Jika sudah menemukan jawaban, tidak perlu melanjutkan loop
    if (botResponse) break;
}

if (/^[0-9+\-*/\s()]+$/.test(userText)) {
            botResponse = "Hasil dari " + userText + " = " + eval(userText) + ".";
}
            
        

            // Jika bot tidak mengenali pertanyaan
            if (botResponse === "") {
                botResponse = "Maaf, Farid tidak mengerti pertanyaan tersebut.";
                videoToPlay = "assets/videotiga.mp4"; // Video saat AI tidak tahu
            }

            // Tampilkan respons bot
            var botDiv = document.createElement("p");
            botDiv.textContent = "Farid: " + botResponse;
            chatbox.appendChild(botDiv);

            // Putar audio jika tersedia
            if (audioToPlay) {
                audioToPlay.play();
            }

            // Ubah video sesuai respons
            var videoDisplay = document.getElementById("videoDisplay");
            var videoSource = document.getElementById("videoSource");
            videoSource.src = videoToPlay;
            videoDisplay.load();
            videoDisplay.play();

            // Setelah video berakhir, kembali ke video default (videoempat)
            videoDisplay.onended = function() {
                videoSource.src = "assets/videoempat.mp4"; // Video default
                videoDisplay.load();
                videoDisplay.play();
            };

            // Setelah video berakhir, biarkan bot menunggu input pengguna
            videoDisplay.onplay = function() {
                // Tampilkan pesan menunggu di chatbox
                var waitingDiv = document.createElement("p");
                waitingDiv.textContent = "";
                chatbox.appendChild(waitingDiv);
            };

// Fitur text-to-speech
var speech = new SpeechSynthesisUtterance(botResponse);
            speech.lang = "id-ID"; // Bahasa Indonesia
            window.speechSynthesis.speak(speech);
        }