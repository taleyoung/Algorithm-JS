let str =
  "in SomeState (at App.js:8) in PointerErro (at App.js:6) in div (at App.js:6) in App (at src/index.js:7)";
const parseStr = str => {
  let res = str.match(/in[^\(]+\(/g);
  res = res.map(item => item.slice(3, -2));
  console.log("res", res);
};

parseStr(str);
