function fahrenheit_celcius(celcius) {
  celcius = ((celcius - 32) / 1.8).toFixed(3);
  console.log(celcius);
}

fahrenheit_celcius(prompt("Enter fahrenheit for the Sauna:"));
