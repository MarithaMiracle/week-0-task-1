function countCharOccurrences(str, char) {
    let characterCount = 0;
    
    for(let i = 0; i < str.length; i++) {

    if (str[i] === char) {
            characterCount ++;
        }
        
    }
    return characterCount;
      
}

module.exports = countCharOccurrences;
