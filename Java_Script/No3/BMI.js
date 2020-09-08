var tinggi,berat,keterangan,bmi;
function hitung() {
	tinggi = parseFloat(document.getElementById("tinggi").value);
	tinggi /= 100;
	berat = parseFloat(document.getElementById("berat").value);
	bmi = berat / (tinggi * tinggi);

	if (bmi >= 30) {
		keterangan = "Kegemukan (Obesitas)";
	}else if ((bmi >= 25) & (bmi <= 29)){
		keterangan = "Kelebihan berat badan";
	}else if ((bmi >= 18.5) & (bmi <= 24.9)){
		keterangan = "Normal";
	} else if (bmi <= 18.5){
		keterangan = "Kekurangan berat badan";
	}
	document.getElementById('bmi').innerHTML = "Hasil perhitungan BMI : " + bmi.toFixed(1);
	document.getElementById('keterangan').innerHTML = keterangan;
}
