const deepFlatten = arr =>
  [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

const r = deepFlatten([1, [2], [[3], 4], 5]);
console.log(r);
