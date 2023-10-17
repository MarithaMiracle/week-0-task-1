function countCharOccurrences(str, char) {
    let characterCount = 0;
    
    for(let i = 0; i < str.length; i++) {

    if (str[i] === char) {
            characterCount ++;
        }
        
    }
    return characterCount;
      
}

let str = 'Maritha';
let char = 'a';
let characterCounts = countCharOccurrences(str, char);
console.log(`Occurrences of "${char}" in the string: ${characterCounts}`);

module.exports = countCharOccurrences;
