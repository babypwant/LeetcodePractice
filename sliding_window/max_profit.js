/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // prices = [7,1,5,3,6,4]
    var max_profit = 0
    var window_start = prices[0]

    for(let i = 1; i < prices.length; i++) {
      var window_end = prices[i]

      if (window_end < window_start) {
        window_start = window_end

      }else {
        var profit = window_start - window_end
        max_profit = Math.max(profit, max_profit)
      }

    }
  
    return max_profit

};