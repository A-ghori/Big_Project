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
    if (numRows === 1 || s.length < numRows) return s

    //Creating empty buckets 
    const rows = new Array(numRows).fill("")
    let currentRow = 0

    let goingDown = false;
    for(let i of s){
        rows[currentRow] += i
let start = 0;
let end = numRows - 1;
if(currentRow === start || currentRow === end)
    goingDown = !goingDown
// Ternary Operator Explained:
// condition ? value_if_true : value_if_false

currentRow += goingDown ? 1 : - 1
    }
    return rows.join('')
};
// @lc code=end

