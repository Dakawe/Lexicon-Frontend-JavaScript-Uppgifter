export const removeDuplicates = (p) => [...new Set(p)],
  hasTrack = (p, t) => p.includes(t),
  addTrack = (p, t) => [...new Set(p).add(t)],
  deleteTrack = (p, t) => ((p = new Set(p)), p.delete(t), [...p]),
  listArtists = (p) => removeDuplicates(p.map((a) => a.split("- ")[1]));

const playlist = ["All Mine - Portishead", "Sight to Behold - Devendra Banhart", "Sour Times - Portishead"];

console.log(listArtists(playlist));
