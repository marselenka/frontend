function fibonacci(n) {
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}
console.log(fibonacci(20));
//
// //---------------------------------------------
function fibon(n) {
    if(n<=1) return n;
    return fibon(n-1)+fibon(n-2);
}
    console.log(fibon(20));

//---------------------------------------------

function fibb(maxCounter) {
    if (maxCounter === 0) {
        return 0;
    }
    if (maxCounter === 1) {
        return 1;
    }
    return fib(1, 0, 1, maxCounter - 1);
}
function fib(current,prev,currentCounter,maxCounter) {
    let newCurrent = current + prev;
    if (currentCounter === maxCounter) {
        return newCurrent;
    }
    return fib(newCurrent, current, ++currentCounter, maxCounter);
}
console.log(fibb(20));