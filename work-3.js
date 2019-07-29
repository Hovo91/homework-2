function sumOfNumberDigits(number, result = 0) {
  while (number > 0) {
    let lastDigit = number % 10;
    result = result + lastDigit;
    number = (number - lastDigit) / 10;
  }
  return result > 9 ? sumOfNumberDigits(result) : result;
}

console.log(sumOfNumberDigits(1234));
