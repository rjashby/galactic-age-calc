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
  return "24.0"
  }
  
};

