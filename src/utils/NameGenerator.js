export class NameGenerator {
  constructor() {
    this.names = [
      "James",
      "John",
      "Robert",
      "Michael",
      "William",
      "David",
      "Richard",
      "Joseph",
      "Charles",
      "Thomas",
      "Christopher",
      "Daniel",
      "Matthew",
      "Anthony",
      "Donald",
      "Mark",
      "Paul",
      "Steven",
      "Andrew",
      "Kenneth",
      "Joshua",
      "Kevin",
      "Brian",
      "George",
      "Edward",
      "Ronald",
      "Timothy",
      "Jason",
      "Jeffrey",
      "Ryan",
      "Jacob",
      "Gary",
      "Nicholas",
      "Eric",
      "Jonathan",
      "Stephen",
      "Larry",
      "Justin",
      "Scott",
      "Brandon",
      "Benjamin",
      "Samuel",
      "Gregory",
      "Frank",
      "Raymond",
      "Patrick",
      "Alexander",
      "Jack",
      "Dennis",
      "Jerry",
      "Tyler",
      "Aaron",
      "Henry",
      "Jose",
      "Douglas",
      "Peter",
      "Adam",
      "Zachary",
      "Nathan",
      "Walter",
      "Kyle",
      "Harold",
      "Carl",
      "Jeremy",
      "Gerald",
      "Keith",
      "Roger",
      "Arthur",
      "Terry",
      "Lawrence",
      "Sean",
      "Christian",
      "Ethan",
      "Austin",
      "Joe",
      "Albert",
      "Jesse",
      "Willie",
      "Billy",
      "Bryan",
      "Bruce",
      "Noah",
      "Jordan",
      "Dylan",
      "Alan",
      "Ralph",
      "Gabriel",
      "Roy",
      "Juan",
      "Wayne",
      "Eugene",
      "Logan",
      "Randy",
      "Louis",
      "Russell",
      "Vincent",
      "Philip",
      "Bobby",
      "Johnny",
      "Bradley",
    ];
    this.lastName = null;
    this.counter = 0;
  }

  generateName() {
    const names = this.names;
    while (true) {
      const name = names[Math.floor(Math.random() * names.length)];
      if (name !== this.lastName) {
        this.lastName = name;
        this.counter++;
        if (this.counter === 1000) {
          this.counter = 0;
          this.lastName = null;
        }
        return name;
      }
    }
  }
}
