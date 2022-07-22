
function perfectNumber() {

    for (let j = 1; j < 1000; j++) {
        let i = 1;
        let sum = 0;
        while (i <= j / 2) {
            if (j % i == 0) {
                sum = sum + i
            }
            i = i + 1
        }
        if (j == sum) {
            console.log(j + " Mükemmel sayidir")
        }
    }

}

perfectNumber();
