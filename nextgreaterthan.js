/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    
    for (let i = 0; i < letters.length; i++){
        letter = letters[i]
        if(letter > target){
            return letter
        }
    }
    
    return letters[0]
    
};