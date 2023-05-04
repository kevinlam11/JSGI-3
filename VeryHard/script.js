// VERY HARD: Object prototype chain and prototypal inheritance exercise.
// Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add on new methods or properties to  incorporate the syntax.
// function Person(name, job, age) { }
// function Programmer(name, job, age, languages) { }

// 1. Create a Person constructor that has three properties: name, job, and age.
class Person {
  constructor(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
    // 2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
    this.exercise = function () {
      console.log(`Running is fun! - said no one ever`);
    };
    // 3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a    back-end developer".
    this.fetchJob = function () {
      console.log(`${this.name} is a ${this.job}`);
    };
  }
}
const person = new Person("Kevin", "full-stack developer", 26);
////////////////////////////////////////////////    TestTestTestTestTestTestTestTestTest    //////////////////////////////////////////////////////////////////////////////
// person.fetchJob();
// person.exercise();

// 4. Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
class Programmer extends Person {
  constructor(name, job, age, languages) {
    super(name, job, age);
    this.languages = languages;
    this.busy = true;
    // 5. Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
    this.completeTask = function () {
      this.busy = false;
    };
    // 6. Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
    this.offerNewTask = function () {
      if (this.busy) {
        console.log(`${this.name}  can't accept any new tasks right now.`);
      } else {
        console.log(`${this.name} would love to take on a new responsibility.`);
      }
    };
    // 7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.
    this.learnLanguage = function (language) {
      this.languages.push(language);
    };
    this.listLanguages = function () {
      console.log(this.name, "knows", this.languages);
    };
  }
}
// Programmers
const programmer1 = new Programmer("Osiel", "Senior Developer", 22, [
  "JavaScript",
  "Python",
]);

const programmer2 = new Programmer("J", "Designer", 25, ["HTML", "CSS"]);
////////////////////////////////////////////////    TestTestTestTestTestTestTestTestTest    //////////////////////////////////////////////////////////////////////////////
// programmer1.learnLanguage("Swift");
// programmer1.listLanguages();
// programmer2.learnLanguage("GO");
// programmer2.listLanguages();

// // 8. Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers?
const programmer3 = new Programmer("Abraham", "Junior Developer", 24, [
  "HTML",
  "Javascript",
]);
////////////////////////////////////////////////////////////   FINAL TESTS    ////////////////////////////////////////////////////////
programmer3.exercise();
programmer3.completeTask();
programmer3.offerNewTask();
programmer3.fetchJob();
programmer3.learnLanguage("Agile");
programmer3.listLanguages();
