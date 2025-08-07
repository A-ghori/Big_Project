/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else {
            if (stack.length === 0) return false;

            if (
                (stack[stack.length - 1] === '(' && s[i] === ')') ||
                (stack[stack.length - 1] === '{' && s[i] === '}') ||
                (stack[stack.length - 1] === '[' && s[i] === ']')
            ) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
};
// @lc code=end

