/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    
    for (let i = 0; i < letters.length; i++) {
            let curr = letters[i]
            
            if(curr > target){
                return curr
            }
                
        
    }
    
    return letters[0]
    
    
};