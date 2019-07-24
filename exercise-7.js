function hapusSimbol(str) {
    // you can only write your code here!
    let deletedSymbol = str.match(/[a-z0-9]+/gi)
    // return result.join('') //dengan build in function join
    let result = ''
    for(let i=0; i<deletedSymbol.length; i++){
        if(deletedSymbol[i] === ' '){
        }else{
            result+=deletedSymbol[i]
        }
    }
    return result
  }
  
  // TEST CASES
  console.log(hapusSimbol('test%$4aa')); // test4aa
  console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
  console.log(hapusSimbol('ma@#k!an~')); // makan
  console.log(hapusSimbol('coding')); // coding
  console.log(hapusSimbol('1+3-5*2=100')); // 1352100