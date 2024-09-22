// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return "";
    }
    let prefix = strs[0];
    for (let i = 0; i < strs.length; i++){
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    return prefix;
};
