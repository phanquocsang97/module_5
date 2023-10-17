const isPrimeNumber = (number) => {
    let isPrimeNumber = true;
    if (number < 2) {
        isPrimeNumber = false;
    }
    for (let i = 2; i < Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrimeNumber = false;
            break;
        }
    }
    return isPrimeNumber;
}

const array = [1, 3, 4, 6, 8, 11, 13, 17];
const arrayIsPrime = array.filter(array => isPrimeNumber(array))
console.log(arrayIsPrime);