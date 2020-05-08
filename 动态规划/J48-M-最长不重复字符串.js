var lengthOfLongestSubstring = function(s) {
  let len = s.length;
  if (len < 1) {
    return 0;
  }
  let max = -Infinity,
    cnt = 0;
  let left = 0,
    right = 0;
  let map = new Map();
  while (right < len) {
    if (map.has(s[right])) {
      let t = map.get(s[right]);
      map.set(s[right], t + 1);
    } else {
      map.set(s[right], 1);
    }
    console.log("map :", map.get);
    cnt++;
    while (map.get(s[right]) >= 2) {
      let t = map.get(s[left]);
      map.set(s[left], t - 1);
      left++;
      cnt--;
    }
    right++;
    max = Math.max(max, cnt);
  }
  return max;
};

console.log("object", lengthOfLongestSubstring("abcabcbb"));
