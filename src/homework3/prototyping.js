function Customer(first, last, city, country, age) {
    this.first = first;
    this.last = last;
    this.city = city;
    this.age = age;
    this.country = country;
}

var someCustomer = new Customer("Engin", "Demiroğ", "Ankara", "Turkey", 30);

Customer.prototype.eMail = "engin@goliq.net";
Customer.prototype.fullName = function() {
    return this.first + " " + this.last
};

alert(someCustomer.eMail);
alert(someCustomer.fullName());