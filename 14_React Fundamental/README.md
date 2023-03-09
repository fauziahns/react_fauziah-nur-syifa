**JSX**
What is JSX? JSX atau Javascript XML adalah ekstensi sintak pada javascript yang disarankan dipakai di react yang akan menghasilkan react element.

Why JSX? 
JSX dibuat berdasarkan fakta jika logika rendering sangat terkait dengan logic UI. dengan menggunakan JSX kita dapat menggabungkan html, css dan js dalam suatu file.

JSX vs React.ceratElement
JSX akan memudahkan dalam menulis app react, pada dasarnya jsx hanya menyediakan syntatic yang mudah ditulis dan mudah dimengerti. 

Spesifikasi jenis Element pada React
1. Kapitalisasi untuk komponen React
2. huruf kecil (lowercase) untuk komponen bawaan

Menaruh expression pada JSX
menaruh expression JS pada JJSX dengan kurung kurawal

Menentukan atribut dengan JSX
1. tanda kutip untuk string literal
2. kurung kurawal untuk ekspresi Javascript
3. camelCase untuk konversi penamaan ReactDOM

**React Component**
What is component? komponen react adalah bagian code yang dapat digunakan kembali yang digunakan untuk menentukan tampilan, behavior dan state sebagai UI.

Membagi UI menjadi beberapa component
Untuk membagi UI menjadi beberapa component adalah dengan mengkotak-kotakan mockup yang telah dibuat oleh designer. bagaimana cara kita menentukan component? dengan menerapkan prinsip single reposibilty principly yaitu suatu komponen hanya dapat melakukan satu hal, jika dapat melakukan beberapa hal maka komponen tersebut harus dipecah menjadi lebih kecil.

**React Lifecycle**
lifecycle method yang sering dipakai
1. render(), paling sering dipakai dan merupakai required pada class component, tidak boleh ada setState()

2. componentDidMount(), dipanggil saat comopnent sudah di render untuk pertama kali, tempat pemanggilan API, boleh ada setState()

3. componentDidUpdate(), dipanggil ketika terjadi update (props atau state berubah)

4. componentWillUnmount(), dipanggil saat component akan dihancurkan, cocok untuk clean up actions

**Directory Structure**
react tidak memiliki pendapat tentang bagaimana cara memasukkan file ke folder. 


