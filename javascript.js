// Deklarasi variabel nilaiSiswa
let nilaiSiswa = 2

// Menampilkan Nilai Angka
console.log("Nilai Angka:", nilaiSiswa);

// Nilai Huruf Berdasarkan Nilai Angka
if (nilaiSiswa >= 80 && nilaiSiswa <= 100) {
    console.log("Nilai Huruf: A");
} else if (nilaiSiswa >= 75 && nilaiSiswa <= 84) {
    console.log("Nilai Huruf: B");
} else if (nilaiSiswa >= 60 && nilaiSiswa <= 74) {
    console.log("Nilai Huruf: C");
} else 
    console.log("Nilai Huruf: D");

//Menentukan Genap atau Ganjil
if (nilaiSiswa %2 === 0) {
    console.log("Nilai Tersebut Adalah Bilangan Genap");
} else {
    console.log("Nilai Tersebut Adalah Bilangan Ganjil");
}

//Nama
console.log("Made by - Danendra Sajana Dhika");
