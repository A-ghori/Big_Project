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

// Another Method using Brute Force where i go every prices to compare with prices and buy only two choclates without debt any money


var buyChoco = function(prices, money) {
let minSum = Infinity;
for (let i=0 ; i<prices.length; i++){
    for(let j = i+1; j<prices.length; j++){
        let sum = prices[i] + prices [j]
minSum = sum <= money && sum < minSum ? sum : minSum 
    }
}
// If no valid pair found, return original money
    return minSum === Infinity ? money : money - minSum;
}