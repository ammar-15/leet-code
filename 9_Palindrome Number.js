/*
Given an integer x, return true if x is a 
palindrome, and false otherwise.
Constraints:
-231 <= x <= 231 - 1
Follow up: Could you solve it without converting the integer to a string?
*/

var isPalindrome = function(x) {
    if (x<0) {
        return false;
    }
    let original = x;
    let reverseNum = 0;
    while (x>0) {
        let digit = x%10;
        reverseNum = reverseNum * 10 + digit;
        x=Math.floor(x/10);
    }
    return original===reverseNum;
};

