var digitSum = function (s, k) {
  // step1：小于 k，直接返回
  if (s.length <= k) return s;
  // step2：循环操作，基于 start & end 切割形参字符串后拼接加号，通过 eval 执行操作得到相加后的值，再拼接到新的字符串中继续递归判断直至其长度小于 k
  for (var i = 0, str = ''; i < s.length; i += k) {
    str += eval(
      s
        .substring(i, i + k)
        .split('')
        .join('+')
    );
  }
  // step3：递归
  return digitSum(str, k);
};
