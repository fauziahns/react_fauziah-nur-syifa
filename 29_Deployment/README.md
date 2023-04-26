LINK DEPLOY
deployy-lts8bcan6-fauziahns.vercel.app

(29) DEPLOYMENT
## Build React App
Tujuan dari Build adalah agar aplikasi yang telah kita buat menjadi versi production sehingga membuat performanya lebih ringan dan cepat.
Langkah-langkah Build React App menggunakan CRA :
1.	Jalankan npm run build, fungsinya adalah untuk membuat versi produksi untuk aplikasi kita di dalam folder build/.
2.	Lakukan Run Optimized App, yaitu dengan tujuan untuk menjalankan aplikasi dengan optimal pada lokal komputer.
3.	Menginstall serve, npm install -g serve.
4.	Menjalankan serve di lokal, serve -s build.
## Deployment
Deployment merupakan kegiatan yang bertujuan untuk menyebarkan aplikasi yang telah kita buat menjadi dapat diakses oleh banyak orang.
Deployment dengan Surge :
Surge merupakan layanan penerbit website statik gratis untuk front-end Developers. Surge sendiri memiliki subdomain .surge.sh. Surge sendiri dapat menerima file HTML, CSS, dan Javascript.
Cara Deployment menggunakan Surge :
-	Gunakan versi node yang terbaru.
-	Install Surge di terminal : npm install –global surge.
-	Jalankan perintah Surge di terminal.
Teardown Surge merupakan proses ketika kita ingin mempublikasikan sebagian domain atau subdomain. Caranya : Jalankan surge teardown vancouver .surge.sh
Deplotment dengan Netlify CLI :
Netlify meruapakan sebuah platform penyedia layanan build tools sekaligus Continous Deployment.
Kelebihan Netlify :
-	Mempublish sebuah website statis secara gratis.
-	Sudah terintegrasi dengan git Host popular seperti Github, Gitlab, dan Bitbucket.
Cara Deployment menggunakan Netlify :
-	Membuat akun Netlify.
-	Menginstall Netlify CLI di terminal : npm install netlify-cli -g.
-	Jalankan perintah netlify deploy pada terminal.
-	Lakukan verify akun melalui browser, pilih Authorize.
-	Pilih Create dan Configure a new site.
-	Pilih lokasi file yang akan di deploy. Pilih ./build.
## Deploy with vercel
Vercel merupakan end-to-end platform yang ditujukan untuk developers yang memungkinkan untuk membuat sebuah deployment pada sebuah web aplikasi.
Kelebihan menggunakan Vercel :
-	Dapat melakukan deployment.
-	Dapat memonitoring sebuah projek.
