class Customer {
    constructor(id, customerNumber) {
        this.id = id;
        this.customerNumber = customerNumber;
    }
}

let customer = new Customer(1, "1,2,3,4,5");
//prototyping
customer.name = "Süleyman Atışman"
console.log(customer.name)

Customer.bisey = "Bisey"
console.log(Customer.bisey)

console.log(customer.customerNumber)

class IndividualCustomer extends Customer {
    constructor(firstName, id, customerNumber) {
        super(id, customerNumber)
        this.firstName = firstName

    }

}

class CorporateCustomer extends Customer {
    constructor(companyName, id, customerNumber) {
        super(id, customerNumber)
        this.companyName = companyName
    }

}