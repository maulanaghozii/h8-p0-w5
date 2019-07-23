function sorting(arrNumber) {
    // code di sini
    for(let j=0; j<arrNumber.length; j++){
        for(let i=0; i<arrNumber.length-1; i++){
            if(arrNumber[i]>arrNumber[i+1]){
                let temp = arrNumber[i]
                arrNumber[i] = arrNumber[i+1]
                arrNumber[i+1] = temp;
            }
        }
    }
    return arrNumber
  }
  
  function getTotal(arrNumber) {
    // code di sini
    let counter = 0;
    for(let i=arrNumber.length-1; i>=0; i--){
        if(arrNumber[arrNumber.length-1]===arrNumber[i]){
            counter++
        }
    }
    return counter

  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    if(!listSort.length){
        return "''"
    }
    return 'angka paling besar adalah ' +listSort[listSort.length-1]+ ' dan jumlah kemunculan sebanyak '+ countHighest+ ' kali';
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''