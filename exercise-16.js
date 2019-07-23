function totalDigitRekursif(angka) {
  // you can only write your code here!
  let strAngka = angka.toString()
  if(angka < 10 && angka >= 0){
      return angka
  } else{
      return parseInt(strAngka[0]) + parseInt(totalDigitRekursif(strAngka.slice(1)));
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5