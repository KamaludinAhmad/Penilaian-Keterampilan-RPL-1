let barang = [
    {nama: "Beras", harga: 10000, jumlah: 5 },
    {nama: "Gula", harga: 14000 , jumlah: 5 },
    {nama: "Telur", harga: 20000 , jumlah: 2 },
    {nama: "Minyak Goreng", harga: 9000 , jumlah: 10 },
]

let total = 0
let data = barang.length - 1

for(let i = 0; i<=data; i++){
  let hargaBarang = barang[i].harga * barang[i].jumlah
  total += hargaBarang
}
console.log("Barang Belanjaan = ");
console.log("");
console.log(barang);
console.log("");
console.log("Total Belanja = Rp " + total);
