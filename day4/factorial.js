function fact(n) {
    if (n < 2) return 1
    return n * fact(n - 1)
}
console.log("5!=>",fact(5))


