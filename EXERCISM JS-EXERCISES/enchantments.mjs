export const getItem = (c, p) => c[p],
  setItem = (c, p, r) => ((c[p] = r), c),
  insertItemAtTop = (c, n) => (c.push(n), c),
  removeItem = (c, p) => (c.splice(p, 1), c),
  removeItemFromTop = (c) => (c.pop(), c),
  insertItemAtBottom = (c, n) => (c.unshift(n), c),
  removeItemAtBottom = (c) => (c.shift(), c),
  checkSizeOfStack = (c, s) => c.length == s;

