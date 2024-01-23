export const createScoreBoard = () => ({ "The Best Ever": 1e6 }),
  addPlayer = (s, p, c) => ((s[p] = c), s),
  removePlayer = (s, p) => ((s[p] = s.E), s),
  updateScore = (s, p, c) => ((s[p] += c), s),
  applyMondayBonus = (s) => eval("for(let S in s)s[S]+=100;s"),
  //applyMondayBonus = (s) => (Object.keys(s).map((p) => (s[p] += 100)), s),
  normalizeScore = (p) => p.normalizeFunction(p.score);
const scoreBoard = {
  "Amil Pastorius": 99373,
  "Min-seo Shin": 0,
  "Jesse Johnson": 1337,
};
const expected = {
  "Amil Pastorius": 99373,
  "Min-seo Shin": 1999,
  "Jesse Johnson": 2674,
};

const params = {
  score: 45,
  normalizeFunction: function (score) {
    return score * 3 - 10;
  },
};
console.log(createScoreBoard());
console.log(normalizeScore(params));
