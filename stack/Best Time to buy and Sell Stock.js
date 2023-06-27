/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {


    if (s.length % 2 !== 0) {
        return false
    }

    var stack = []

    for(let i = 0; i < s.length; i++){

        current_char = s[i]

        if (current_char == '(' || current_char == '{' ||current_char == '['){
            stack.push(current_char)
        }else {
            var top = stack.pop()
            if (
            top == '(' && current_char == ')' || 
            top == '{' && current_char == '}' || 
            top == '[' && current_char == ']' ) {
                continue
            }else {
                return false
            }
        }


    }

    return stack.length === 0
    
};