function callStack(val) {
    console.log("started", val)
    if (val > 0) {
        callStack(val - 1)
        console.log("ended", val)
    }
}

callStack(10)