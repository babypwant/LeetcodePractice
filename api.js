// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

var longestCommonPrefix = function (strs) {
    let prefix = '';
    if (strs.length === 0) {
        return prefix;
    }
    let min = strs[0].length;
    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < min) {
            min = strs[i].length;
        }
    }
    for (let i = 0; i < min; i++) {
        let ch = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== ch) {
                return prefix;
            }
        }
        prefix += ch;
    }

};