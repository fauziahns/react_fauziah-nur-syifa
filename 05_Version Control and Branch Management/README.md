Summary : Version Control and Branch Management

**cara melakukan 2 step dengan 1 command**
dir (nama folder) && touch (membuat file) [Readme.md](http://readme.md/)

git reset HEAD --nama folder/namafile


**Membuat Branch**
	1. git branch develop(nama branch)
	2. git branch (melihat branch yang telah dibuat)
	3. git push origin develop


**Cara pindah branch**
	1. git checkout develop(nama branch yang dituju)


**Shortcut untuk membuat branch dan cehckout**
	1. git checkout -b namaBranch


**fungsi Compare & pull request**
untuk ngasih tau kalau kalian bikin update / changes nambahin file dll dan mau di gabung ke branch tertentu sedangkan kalian sedang ada di branch yang berbeda.

branch dibuat agar ketika developer membuat perubahan, branch master tidak akan terganggu


**ketika di branch akan dilakukan penggabungan (merge)**
	1. git add .
	2. git commit -m "Update index.js"
	3. git push origin namaBranch


**untuk mengambil update dari branch lain**
git pull origin namabranchh yang mau diambil

pull : ngambil update dari remote branch



**Konflik branch**
akan ada masalah ketika source tidak dari parent yang sama
git pull origin develop origin/develop(remote branch)

ketika dalam 2 branch yang berbeda ada update dari file yang sama
solusi : memilih file mana yang harus dimasukan kepada branch master

git stash (anggap untuk back-up ditempat lain)
git stash apply

cara protect branch
setting>branch>branch protection rules