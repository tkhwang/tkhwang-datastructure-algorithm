/**
 * @param {number[]} prices
 * @return {number}
 */

// Basic
// var maxProfit = function(prices) {
//   let max = -99;
//   for (let buy = 0; buy < prices.length; buy += 1) {
//     for (let sell = buy + 1; sell < prices.length; sell += 1) {
//       const diff = prices[sell] - prices[buy];
//       if (max < diff) max = diff;
//     }
//   }
//   return max > 0 ? max : 0;
// };

// Best
var maxProfit = function(prices) {
  let minPrice = Number.MAX_SAFE_INTEGER;
  let maxProfit = 0;

  prices.forEach(price => {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  });

  return maxProfit;
};
