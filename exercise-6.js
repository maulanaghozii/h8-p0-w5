function meleeRangedGrouping (str) {
    //your code here
    let strArray = []
    if(typeof str === 'string'){
       strArray = str.split(',')
    } else{
        if(strArray[0].indexOf('Ranged') !== -1){
            
        } else if(strArray[0].indexOf('Melee') !== -1){
            
        }

    }
    return result
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []