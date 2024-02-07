export const buildSign = (o,n) => `Happy ${o} ${n}!`,
buildBirthdaySign = (a) => `Happy Birthday! What a ${a<50?'young':'mature'} fellow you are.`,
graduationFor = (n,y) => `Congratulations ${n}!\nClass of ${y}`,
costOf = (s,c) => `Your sign costs ${(s.length*2+20)}.00 ${c}.`;


console.log(costOf('Happy Birthday Rob!', 'dollars'));