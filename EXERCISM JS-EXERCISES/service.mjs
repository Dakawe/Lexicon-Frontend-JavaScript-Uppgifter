export const TakeOutDog = (dogHome) =>
  new Promise((resolve, reject) => (dogHome ? resolve("Dog is going out with you!") : reject("Dog is not available.")));

TakeOutDog(1)
  .then((m) => console.log(m))
  .catch((err) => console.log(err));

const myPromise = new Promise(function (resolve, reject) {
  let sampleData = [2, 4, 6, 8];
  let randomNumber = Math.ceil(Math.random() * 5);
  let rand = sampleData[randomNumber];
  if (rand) {
    resolve(rand);
  } else {
    reject(console.error(`${rand} is not a number`));
  }
});

myPromise
  .then(function (e) {
    console.log(e);
  })
  .catch(function (error) {
    throw new Error(error);
  })
  .finally(function () {
    console.log("Promise completed");
  });
