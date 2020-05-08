/**
 * 
在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。
你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。
给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？
 */
var maxValue = function(grid) {
  let m = grid.length;
  let n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i >= 1 && j >= 1) {
        grid[i][j] += Math.max(grid[i - 1][j], grid[i][j - 1]);
      } else if (i >= 1) {
        grid[i][j] += grid[i - 1][j];
      } else if (j >= 1) {
        grid[i][j] += grid[i][j - 1];
      }
    }
  }
  return grid[m - 1][n - 1];
};
