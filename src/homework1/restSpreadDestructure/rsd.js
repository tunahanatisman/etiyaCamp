let sayi1 = 10;
sayi1 = "Tunahan Atışman"
let student = { id: 1, name: "Tunahan" }
    //console.log(student);

function save(puan = 10, ogrenci) {
    console.log(ogrenci.name + " : " + puan)
}

//save(undefined, student);

let students = ["Tunahan Atışman", "Muharrem Atışman", "Ali Veli", "Ahmet Yılmaz"]

//console.log(students)

let students2 = [student, { id: 2, name: "Ruçhan" }, "Zonguldak", { city: "Ankara" }]

//rest 
let showProducts = function(id, ...products) {
    console.log(id)
    console.log(products[0])
}

//console.log(typeof showProducts)
//showProducts(10, ["Erik", "İncir", "Cilek"])

//spread: ayrıştırmak
let points = [1, 2, 3, 4, 50, 4, 60, 14]
console.log(...points)
console.log(Math.max(...points))
console.log(...
    "ABC", "D", ...
    "EFG", "H")

//Destructuring : elimizdeki arraylerin değerlerini değişkenlere atar.
let populations = [10000, 20000, 30000, [40000, 100000]]
let [small, medium, high, [veryHigh, maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1], number) {
    console.log(small1)
}

someFunction(populations)

let category = { id: 1, name: "İcecek" }
console.log(category.id)
console.log(category["name"])

let { id, name } = category
console.log(id)
console.log(name)