const daysOfTheMonth = [
    31, // January
    28, // February
    31, // March
    30, // April
    31, // May
    30, // June
    31, // July
    31, // August
    30, // September
    31, // October
    30, // November
    31  // December
];



  

function isLeapYear(year) {
    if (year % 4 === 0 ) {
        return true
    }else {
        return false
    }

}

function isNextDay(year, month, day) {

    if (day < 30) {
        return year, month, day +1
    }else {
        if (month < 12) {
            return year, month + 1, 1
        }else {
            return year + 1, 1 , 1
        }
    }


}

function dayBetweenDates(y1, m1, d1,y2,m2,d2) {
    days = 0

   while (y1 < y2) {

        if (isLeapYear(y1)){
            days += 366
        }else{
            days += 365
        }
   }


}


console.log(dayBetweenDates(1997,11,6, 2023, 7, 5) )