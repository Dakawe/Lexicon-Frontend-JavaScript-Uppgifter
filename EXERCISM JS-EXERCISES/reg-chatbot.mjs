export const isValidCommand = (m) => !m.match(/ChAtBoT/i).index,
  removeEmoji = (m) => m.replace(/\w*emoji\w*/gi, ""),
  checkPhoneNumber = (n) =>
    /^\(\+\d{2}\) \d{3}-\d{3}-\d{3}$/.test(n) ? "Thanks! You can now download me to your phone." : `Oops, it seems like I can't reach out to ${n}`,
  getURL = (u) => u.match(/\w*\.\w*/g),
  niceToMeetYou = (n) => ((n = n.split(", ")), `Nice to meet you, ${n[1]} ${n[0]}`);

let str = "Smith, John";

console.log(niceToMeetYou(str));

console.log("This is a emoji1a2b3c movie.".match(/emoji\w*/));
