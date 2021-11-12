import Person from "../src/js/person";

$(document).ready(function() {
  $("form#galactic").submit(function(event) {
    event.preventDefault();
    let age = parseInt($("input#age").val());
    let gender = $("select#gender option:selected").val();
    let planet = $("select#planet option:selected").val();
    let person1 = new Person(age, gender, planet);
    console.log(person1);
    window.scrollTo(0,document.body.scrollHeight);
    return person1;
  });
});