// var number = prompt("sayı gir ");
// for (let i = 0; i <= number; i++) {
//     if (i == 5) {
//         //break; // for döngüsünü kırar.
//         continue; //şart sağlandığında döngünün başına döner
//     }

//     alert(i);
// }


// var number =1;
// while(number < 10){
//     alert(number);
//     number +=1;
// }

var age = prompt("YaŞ: ");
var result = "";
do {
    result += age;
    result += "-";
    age--;
} while (age > 0)
alert(result);