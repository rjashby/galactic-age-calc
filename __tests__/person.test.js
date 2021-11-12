import Person from "../src/js/person";

describe("Person", () => {

  test("should correctly create a Person object with properties of age and gender", () => {
    const person1 = new Person(21, "male", "earth")
    expect(person1.age).toEqual(21);
    expect(person1.gender).toEqual("male");
    expect(person1.planet).toEqual("earth");
  });
  
  test("should correctly determine how many years are left in a person's life", () => {
    const person1 = new Person(21, "male", "earth")
    expect(person1.leftToLive()).toEqual("54.1");
  });

  test("should return a number, showing years lived on a planet based upon a person's inputted age and planet earth", () => {
    const person1 = new Person(24, "male", "earth")
    expect(person1.planetChuFrom()).toEqual("24.0");
  });

  test("should return a different number, taking inputted age and calculating years of age based on planet mercury", () => {
    const person1 = new Person(24, "male", "mercury")
    expect(person1.planetChuFrom()).toEqual("100.0");
  });

  test("should return a different number, taking inputted age and calculating years of age based on planet venus", () => {
    const person1 = new Person(64, "male", "venus")
    expect(person1.planetChuFrom()).toEqual();
  });
})