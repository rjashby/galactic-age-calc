export default class Person {
  constructor(age, gender, planet) {
    this.age = age
    this.gender = gender
    this.planet = planet
  }

  planetChuFrom () {
    let yourAgeResult = 0
    if (this.planet === "earth") {
      yourAgeResult = (this.age * 1);
      return parseFloat(yourAgeResult.toFixed(1));
    } 
    if (this.planet === "mercury") {
      yourAgeResult = (this.age / .24);
      return parseFloat(yourAgeResult.toFixed(1))
    }
    if (this.planet === "venus") {
      yourAgeResult = (this.age / .62);
      return parseFloat(yourAgeResult.toFixed(1));
    }
    if (this.planet === "mars") {
      yourAgeResult = (this.age / 1.88);
      return parseFloat(yourAgeResult.toFixed(1));
    }
    if (this.planet === "jupiter") {
      yourAgeResult = (this.age / 11.86);
      return parseFloat(yourAgeResult.toFixed(1));
    }
  };

  leftToLive() {
    let maleExpect = 75.1;
    let femaleExpect = 80.5;
    let goldenYears = 0;
    
    if (Math.sign(goldenYears) === (-1)) {
      return ("You've lived" + (goldenYears * (-1)) + "past your life expectancy. You go girl!")
    };

    if ((this.gender === "male") && this.planet === "earth") {
      goldenYears = (maleExpect - this.age);
      return parseFloat(goldenYears.toFixed(1));
    };
    if ((this.gender === "male") && this.planet === "mercury") {
      goldenYears = ((maleExpect - this.age)/(.24));
      return parseFloat(goldenYears.toFixed(1));
    }; 
    if ((this.gender === "male") && this.planet === "venus") {
      goldenYears = ((maleExpect - this.age)/(.62));
      return parseFloat(goldenYears.toFixed(1));
    }; 
    if ((this.gender === "male") && this.planet === "mars") {
      goldenYears = ((maleExpect - this.age)/(1.88));
      return parseFloat(goldenYears.toFixed(1));
    }; 
    if ((this.gender === "male") && this.planet === "jupiter") {
      goldenYears = ((maleExpect - this.age)/(11.86));
      return parseFloat(goldenYears.toFixed(1));
    }; 
  };
};