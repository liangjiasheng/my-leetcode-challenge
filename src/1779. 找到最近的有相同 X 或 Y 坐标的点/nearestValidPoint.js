/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  // 存放距离和索引值
  const map = new Map();

  // 初始化最小距离及其对应的 points 索引
  let min = Number.MAX_SAFE_INTEGER,
    index = -1;

  for (let i = points.length - 1; i >= 0; i--) {
    const [x1, y1] = points[i];
    if (x1 == x || y1 == y) {
      // 满足条件，x 或 y 与形参相等
      map.set(Math.abs(x - x1) + Math.abs(y - y1), i);
    }
  }

  // 遍历找出最小距离和索引
  for (let i of map.keys()) {
    if (min > i) {
      index = map.get(i);
      min = Number(i);
    }
  }

  return index;
};
