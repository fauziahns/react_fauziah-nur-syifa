Request and respone format : JSON, XML, SOAP
HTTP request Method : Get, Post, Put, Delete, Head, Option, Patch

Client Errors (4xx)
400 Bad Request

Server tidak memahami format request karena ada invalid syntax.

401 Unauthorized

Client sebelumnya harus sudah terautentikasi sebelum boleh mengakses endpoint tertentu.

403 Forbidden

Client mungkin sudah terautentikasi namun tidak memiliki hak ases untuk mengakses endpoint tertentu.

404 Not Found

Server tidak berhasil menemukan sumber daya yang diminta. Ini bisa berarti URL atau data yang diminta tidak tersedia.

405 Method Not Allowed

Client mengirimkan request dengan HTTP verb yang dipahami oleh server, namun tidak dapat digunakan di endpoint tertentu.

sebuah endpoint /users/1 harus diakses menggunakan GET, akan tetapi diakses menggunakan POST

422 Unprocessable Entity

Terdapat permasalahan validasi terhadap atribut-atribut yang dikirimkan pada parameter request.

Server Errors (5xx)
500 Internal Server Error


502 Bad Gateway

Sering terjadi karena server sedang tidak bisa diakses (down).