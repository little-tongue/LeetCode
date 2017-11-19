/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var start = 0,
    ans = 0;
  var map = {};
  for (var i = 0, len = s.length; i < len; i++) {
    var ch = s.charAt(i);
    if (map[ch] != null) {
      start = Math.max(map[ch] + 1, start);
    }
    ans = Math.max(i - start + 1, ans);
    map[ch] = i;
  }
  return ans;
};

// test
var s = 'abba';
console.log(lengthOfLongestSubstring(s)); // Expect: 2

var s = 'dvdf';
console.log(lengthOfLongestSubstring(s)); // Expect: 3
