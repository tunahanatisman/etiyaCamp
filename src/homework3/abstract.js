var Person = {
    name: "None",
    email: "None",
    sendEmail: function() {
        alert("Mail send to :" + this.name + "/" + this.email);
    }
}

function Customer(name, email) {
    this.name = name;
    this.email = email;
    //other staff
}

function Employee(name, email) {
    this.name = name;
    this.email = email;
    //other staff
}

Customer.prototype = Person;
var someCustomer = new Customer("engin", "engin@goliq.net");
someCustomer.sendEmail();