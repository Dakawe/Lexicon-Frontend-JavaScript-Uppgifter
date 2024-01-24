export const twoSum = (x,y) => eval([...x,'+',...y].join('')),
luckyNumber = (v) => v == [...String(v)].reverse().join(''),
errorMessage = (i) => +i ? 't' : !i ? "Required field":'Must be a number besides 0';

