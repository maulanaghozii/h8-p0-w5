function changeVocals (str) {
    //code di sini
    const abjad = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const vocal = 'aeiouAEIOU'
    let arrStr  = []
    for(let i=0; i<str.length; i++){
        arrStr[i] = str[i]
    }
    for(let i=0; i<vocal.length; i++){
        for(let j=0; j<arrStr.length; j++){
            if(vocal[i] === str[j]){
                for(let k=0; k<abjad.length; k++){
                    if(vocal[i] === abjad[k]){
                        arrStr[j] = abjad[k+1]
                    }
                }
            }
        }
    }
    let finalStr = '';
    for(let i=0; i<arrStr.length; i++){
        finalStr += arrStr[i]
    }
    return finalStr
}
  
  function reverseWord (str) {
    //code di sini
    let string = changeVocals(str)
    let strReverse = '';
    for(let i=0; i<string.length; i++){
        strReverse = string[i] + strReverse
    }
    return strReverse
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    let string = reverseWord(str)
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    let arrStr = [];
    for(let i=0; i<string.length; i++){
        arrStr[i] = string[i]
    }
    for(let i=0; i<arrStr.length; i++){
        for(let j=0; j<upperCase.length; j++){
            if(arrStr[i]===upperCase[j]){
                arrStr[i]=lowerCase[j]
            } else if(arrStr[i]===lowerCase[j]){
                arrStr[i]=upperCase[j]
            }
        }
    }
    let finalStr = ''
    for(let i=0; i<arrStr.length; i++){
        finalStr += arrStr[i]
    }
    return finalStr
  }

  function removeSpaces (str) {
    //code di sini
    let string = setLowerUpperCase(str)
    let arrStr = [];
    for(let i=0; i<string.length; i++){
        arrStr[i] = string[i]   
    }

    let finalStr = ''
    for(let i=0; i<arrStr.length; i++){
        if(arrStr[i] === ' '){

        } else{
            finalStr += arrStr[i]
        }
    }
    return finalStr
  }
  
  function passwordGenerator (name) {
    //code di sini
    let string = removeSpaces(name)
    if(string.length < 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    } else{
        return removeSpaces(name)
    }
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'