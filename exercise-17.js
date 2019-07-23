function kaliTerusRekursif(angka) {
    // you can only write your code here!
    let stringAngka = angka.toString()
    if(angka < 10 && angka >= 0){
        return angka
    } else{
        let resultMultiply = 1;
        for(let i=0; i<stringAngka.length; i++){
            resultMultiply *= parseInt(stringAngka[i])
        }
        return kaliTerusRekursif(resultMultiply)
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6