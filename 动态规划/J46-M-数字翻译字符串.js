/**
 * 
给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。
用来计算一个数字有多少种不同的翻译方法。
 */
var translateNum = function(num) {
  let str = num.toString();
  let len = str.length;
  let dp = [1, 1];
  for (let i = 2; i <= len; i++) {
    if ((str[i - 2] == 2 && str[i - 1] <= 5) || str[i - 2] == 1) {
      dp[i] = dp[i - 1] + dp[i - 2];
    } else {
      dp[i] = dp[i - 1];
    }
  }
  return dp[len];
};
console.log(" :", translateNum(631));
