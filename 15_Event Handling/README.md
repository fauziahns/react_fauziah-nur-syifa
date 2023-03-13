<h2>STATE</h2>

State adalah sebuah data private yang hanya dapat di akses oleh component itu sendiri.
**What the difference between state and props?**
Props :
1. Read only
2. Data tidak dapat dirubah

State :
1. Data dapat dirubah dengan asynchronous
2. Data dirubah dengan menggunakan syntax this.setState

**Cara mendeklarasikan state** 
class NamaComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {objek: tipedata()};
	}

<h2>Statefull and Stateless Component</h2>

**Definition**
1. Statefull Component adalah sebuah component yang memiliki state, dibuat menggunakan class dan memiliki lifecycle.
2. Stateless Component adalah adalah sebuah component yang memiliki props dan  tidak memiliki state, dibuat menggunakan function (tapi dengan class juga bisa).

**Difference between statefull and stateless component**
Statefull
1. tidak tahu tentang aplikasi
2. tidak melakukan fetching data (pengambilan data)
3. tujuan utamanya adalah visualisasi (berfokus pada styling)
4. reuseable, dapat digunakan kembali
5. hanya berkomunikasi dengan induk langsungnya

Stateless
1. mengerti tentang aplikasi
2. melakukan fetching data
3. berinteraksi dengan aplikasi
4. tidak reuseable
5. meneruskan status dan data ke anak-anaknya

<h2>Event Handling</h2>

Event handling adalah suatu metode yang terjadi untuk menangani sebuah event/aksi yang diberikan pengguna kepada suatu komponen
Event sendiri adalah suatu peristiwa yang dipicu oleh pengguna pada suatu komponen.

Contoh list event :
1. clipboard events 
2. form events (onChange, onSubmiit)
3. mouse event (onClick, onDoubleClick, onMouseOver)
4. generic event (onError, onLoad)





