class DeretGeometri {
    constructor(a, r, n) {
      this.suku_pertama = a;
      this.rasio = r;
      this.suku_n = n;
    }
  
  
    jumlahRasioLebihDari1(){
      return (
        (this.suku_pertama * (this.rasio ** this.suku_n - 1)) / (this.rasio - 1)
      );
    }
    JumlahRasioKurangDari1(){
      return (
        (this.suku_pertama * (1 - this.rasio ** this.suku_n)) / (1 - this.rasio)
      );
    }
  }
  
  let a = 4;
  let r = 3;
  let n = 10;
  let geometri = new DeretGeometri(a, r, n);
  
  console.log('---------------- JUMLAH DERET GEOMETRI ----------------');
  console.log('Suku pertama = ' + a);
  console.log('Rasio        = ' + r);
  console.log('Suku ke-     = ' + n);
  console.log('--------------------------------------------------------');
  if (r > 1) {
    console.log('Jumlah 10 suku pertama = ' + geometri.jumlahRasioLebihDari1());
  } else {
    console.log('Jumlah 10 suku pertama = ' + geometri.jumlahRasioKurangDari1());
  }
  