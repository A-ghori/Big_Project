/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
if (numRows === 1 || numRows<s.length) return s

let currentRow = 0;
let goingDown = false;
let row = new Array(numRows).fill('')




for(let i of s) 
    currentRow += i
        // goingDown != goingDown
let start = 0;
let end = numRows - 1 ;
if(currentRow === start || currentRow === end){
    //Up and down 
    goingDown != goingDown
    currentRow=goingDown ? 1 : -1
}
return row.join('')
}