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
    
    if ((this.gender === "male") && this.planet === "earth") {
      goldenYears = (maleExpect - this.age);
      if (Math.sign(goldenYears) === (-1)) {
        return ("Congratulations! You've lived " + (goldenYears.toFixed(1) * (-1)) + " years past your life expectancy. Go on witcha bad self!")
      } else
      return parseFloat(goldenYears.toFixed(1));
    };

    if ((this.gender === "male") && this.planet === "mercury") {
      goldenYears = ((maleExpect - this.age)/(.24));
      if (Math.sign(goldenYears) === (-1)) {
        return ("Congratulations! You've lived " + (goldenYears.toFixed(1) * (-1)) + " years past your life expectancy. Go on witcha bad self!")
      } else
      return parseFloat(goldenYears.toFixed(1));
    }; 

    if ((this.gender === "male") && this.planet === "venus") {
      goldenYears = ((maleExpect - this.age)/(.62));
      if (Math.sign(goldenYears) === (-1)) {
        return ("Congratulations! You've lived " + (goldenYears.toFixed(1) * (-1)) + " years past your life expectancy. Go on witcha bad self!")
      } else
      return parseFloat(goldenYears.toFixed(1));
    };

    if ((this.gender === "male") && this.planet === "mars") {
      goldenYears = ((maleExpect - this.age)/(1.88));
      if (Math.sign(goldenYears) === (-1)) {
        return ("Congratulations! You've lived " + (goldenYears.toFixed(1) * (-1)) + " years past your life expectancy. Go on witcha bad self!")
      } else
      return parseFloat(goldenYears.toFixed(1));
    };

    if ((this.gender === "male") && this.planet === "jupiter") {
      goldenYears = ((maleExpect - this.age)/(11.86));
      if (Math.sign(goldenYears) === (-1)) {
        return ("Congratulations! You've lived " + (goldenYears.toFixed(1) * (-1)) + " years past your life expectancy. Go on witcha bad self!")
      } else
      return parseFloat(goldenYears.toFixed(1));
    }; 

    if ((this.gender === "female") && this.planet === "earth") {
      goldenYears = (femaleExpect - this.age);
      if (Math.sign(goldenYears) === (-1)) {
        return ("Congratulations! You've lived " + (goldenYears.toFixed(1) * (-1)) + " years past your life expectancy. You go girl!")
      } else
      return parseFloat(goldenYears.toFixed(1));
    };

    if ((this.gender === "female") && this.planet === "mercury") {
      goldenYears = ((femaleExpect - this.age)/(.24));
      if (Math.sign(goldenYears) === (-1)) {
        return ("Congratulations! You've lived " + (goldenYears.toFixed(1) * (-1)) + " years past your life expectancy. You go girl!")
      } else
      return parseFloat(goldenYears.toFixed(1));
    }; 

    if ((this.gender === "female") && this.planet === "venus") {
      goldenYears = ((femaleExpect - this.age)/(.62));
      if (Math.sign(goldenYears) === (-1)) {
        return ("Congratulations! You've lived " + (goldenYears.toFixed(1) * (-1)) + " years past your life expectancy. You go girl!")
      } else
      return parseFloat(goldenYears.toFixed(1));
    };

    if ((this.gender === "female") && this.planet === "mars") {
      goldenYears = ((femaleExpect - this.age)/(1.88));
      if (Math.sign(goldenYears) === (-1)) {
        return ("Congratulations! You've lived " + (goldenYears.toFixed(1) * (-1)) + " years past your life expectancy. You go girl!")
      } else
      return parseFloat(goldenYears.toFixed(1));
    };

    if ((this.gender === "female") && this.planet === "jupiter") {
      goldenYears = ((femaleExpect - this.age)/(11.86));
      if (Math.sign(goldenYears) === (-1)) {
        return ("Congratulations! You've lived " + (goldenYears.toFixed(1) * (-1)) + " years past your life expectancy. You go girl!")
      } else
      return parseFloat(goldenYears.toFixed(1));
    }; 
  };
};
