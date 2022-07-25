function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

function Student(favoriteCourse) {
    this.favoriteCourse = favoriteCourse;
}

Student.prototype = new Person("Tunahan", "Atisman");

var tunahan = new Student("Programming");

console.log(tunahan.firstName + " " + tunahan.lastName + " loves " + tunahan.favoriteCourse);