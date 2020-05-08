/**
 * 场景：从错误堆栈字符串中提取组件名
 */

let str =
  "in SomeState (at App.js:8) in PointerErro (at App.js:6) in div (at App.js:6) in App (at src/index.js:7)";
const parseStr = str => {
  let res = str.match(/in[^\(]+\(/g);
  res = res.map(item => item.slice(3, -2));
  console.log("res", res);
};

parseStr(str);

// 打印的结果为  [ 'SomeState', 'PointerErro', 'div', 'App' ]
