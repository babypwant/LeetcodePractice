/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    
    // Step 1: Count the frequency of each character
    const freqMap = new Map();
    for (let char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    // Step 2: Sort characters by frequency
    const sortedChars = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);

    const result = [];
    let prevChar = null;

    while (sortedChars.length) {
        let found = false;

        for (let i = 0; i < sortedChars.length; i++) {
            const [char, freq] = sortedChars[i];

            // If the current char is not the same as the previous char or it's the last choice
            if (char !== prevChar || i === sortedChars.length - 1) {
                found = true;
                result.push(char);
                if (freq === 1) {
                    sortedChars.splice(i, 1); // Remove from the list if frequency is 1
                } else {
                    sortedChars[i][1]--; // Decrease the frequency
                }
                prevChar = char;
                break;
            }
        }

        // If no valid character found
        if (!found) {
            return "";
        }

        // Sort again for next iteration
        sortedChars.sort((a, b) => b[1] - a[1]);
    }

    return result.join('');
}

//new results

