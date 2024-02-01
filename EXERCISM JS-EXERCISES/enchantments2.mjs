export const getFirstCard = (d) => d[0],
getSecondCard = (d) => d[1],
swapTopTwoCards = ([a,b,...c]) => [b,a,...c],
discardTopCard = ([a,...b]) => [a,b],
insertFaceCards = ([a, ...b]) => console.log([a,'jack', 'queen', 'king',...b]);

insertFaceCards([1,2,3,4]);

