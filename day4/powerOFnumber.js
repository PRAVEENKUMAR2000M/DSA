function power(num1, num2) {
    if (num2 == 0) return 1
    if (num2 == 1) return num1
  return  num1 * power(num1, num2 - 1)
}
console.log(power(2, 5))

