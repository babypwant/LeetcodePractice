// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

//IM

/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    for (let  i = 0; i <= s.length; i++){
    let curr = s[i];
    let next = s[i+1];
    if (curr > next){
        let num = romanToInt(s.slice(0, i));
        let roman = s.slice(i, s.length);
        if (roman === "CM"){
            num += 900;
        }
        else if (roman === "CD"){
            num += 400;
        }
        else if (roman === "XC"){
            num += 90;
        }
        else if (roman === "XL"){
            num += 40;
        }
        else if (roman === "IX"){
            num += 9;
        }
        else if (roman === "IV"){
            num += 4;
        }
        return num;
    }

    }
};