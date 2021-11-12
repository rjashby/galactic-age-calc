export default class Person {
  constructor(age, gender, planet) {
    this.age = age
    this.gender = gender
    this.planet = planet
  }

leftToLive() {
  let maleExpect = 75.1;
  let femaleExpect = 80.5;
  let femaleBump = 5.4;
  let goldenYears = 0;
  if ((this.age === 21) && (this.gender === "male") && this.planet === "earth") {
    goldenYears = (maleExpect - this.age);
    };
    console.log(goldenYears);
    return goldenYears.toFixed(1);
  };

  planetChuFrom () {
    let yourAgeResult = 0
    if (this.planet === "earth") {
      yourAgeResult = (this.age * 1)
      return parseFloat(yourAgeResult.toFixed(1));
    } 
    if (this.planet === "mercury") {
      yourAgeResult = (this.age / .24)
      return parseFloat(yourAgeResult.toFixed(1))
    }
    if (this.planet === "venus") {
      yourAgeResult = (this.age / .62)
      return parseFloat(yourAgeResult.toFixed(1));
    }
    if (this.planet === "mars") {
      yourAgeResult = (this.age / 1.88)
      return parseFloat(yourAgeResult.toFixed(1));
    }
  };
};
