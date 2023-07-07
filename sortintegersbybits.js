/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {

    // dont panic
    // what are the inputs. Array of numbers.
    // what are the outputs. an array ascending from bits and order
    
    
    // write a simple test case

    if (arr.length === 1) {
        return arr
    }

    //write a simple mechanical solution
    function convertNumtoBits(num) {
            count = 0

            while (num > 0) {
                count += num & 1;

                num >>= 1
            }

            return count

    }


    return arr.sort((a,b) => {
        let bitA = convertNumtoBits(a)
        let bitB = convertNumtoBits(b)

        if (bitA === bitB) {
            return a - b
        }else {
            return bitA - bitB
        }


    })



    
};