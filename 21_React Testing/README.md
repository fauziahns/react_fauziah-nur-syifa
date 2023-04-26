# (21) REACT TESTING
## Basic Testing
Testing merupakan proses memverifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. Test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita.
Manfaat testing : 
-    Ketika aplikasi kita mempunyai coverage yang baik, kita akan merasa percaya diri jika harus mengubah suatu bagian pada aplikasi kita.
-    Mengurangi bug pada aplikasi.
Kategori Testing :
-    Rendering component tress didalam environment tes yang sudah disederhanakan dan ditegaskan pada keluarannya.
-    Menjalankan aplikasi secara lengkap di dalam environment peramban (browser) asli, yang biasa dikenal dengan “end-to-end”.
Pertimbangan memilih perkakas untuk testing :
-    Kecepatan iterasi vs environment yang realistis
-    Seberapa banyak mock
Rekomendasi tools yang digunakan untuk testing :
-    Jest = merupakan test runner pada javascript yang memungkinkan anda mengakses DOM melalui jsdom.
-    React testing library = merupakan seperangkat helpers yang memungkinkan kita mengetes komponen pada react tanpa bergantung pada detail implementasinya.
Cara menginstall :
-    Ketika kita menggunakan Create-react-app, jest dan react testing library akan secara default sudah terinstall.
-    Ketika kita menggunakan custom react setup, kita menginstall dan men set up Jest dan React testing library secara manual.