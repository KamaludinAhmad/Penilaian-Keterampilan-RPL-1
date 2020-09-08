let nama = "Pak Arman"
let panjang = 30
let lebar = 20.5
let harga = 1500000
let ppn = 0.15

var luas = (panjang * lebar)
var total = (luas * harga)

console.log("Nota Pembelian Tanah");
console.log("===============================");
console.log("Nama Pembeli            = " + nama);
console.log("Luas Tanah              = " + luas + " m2");
console.log("Harga Tanah per meter   = Rp. " + harga);
console.log("PPN Pembelian           = 15%");

console.log("===============================");
console.log("Harga tanah keseluruhan = Rp. " + total);
console.log("Total biaya pajak       = Rp. " + (total * 0.15));
console.log("TOTAL PEMBAYARAN        = Rp. " + (total + (total * ppn)) );

