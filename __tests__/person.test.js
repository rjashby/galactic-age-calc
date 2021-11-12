import Person from "../src/js/person";

describe("Person", () => {

  test("should correctly create a Person object properties of age and gender", () => {
    const person1 = new Person()
    expect(person1.age).toEqual("21");
    expect(person1.gender).toEqual("male");
    
  });
})