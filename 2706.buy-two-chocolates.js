/*
 * @lc app=leetcode id=2706 lang=javascript
 *
 * [2706] Buy Two Chocolates
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    prices.sort((a,b) => a-b);

// For each pair a and b in the array:
//    if (a - b) < 0  ➜ keep a before b
//    if (a - b) > 0  ➜ move b before a
//    if (a - b) === 0 ➜ keep same


// arr.sort((a, b) => b - a);  // Descending sort

	// 2.	Pick the two smallest elements: prices[0] + prices[1].
    let sum = prices[0] + prices [1]
    return sum > money ? money : money - sum 
};

// @lc code=end

