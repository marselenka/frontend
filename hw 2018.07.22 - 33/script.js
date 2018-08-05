// 1 reduce сумма всех элементов М-----------------------------------------

function reduce(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) sum += arr[i];
    return sum;
}

console.log(reduce([1, -7, 2, 5, 7, 9, 0, 6]));


// 2 every -----------------------------------------

function every(arr) {
    for (let i = 0; i < arr.length; i++)
        if (!(arr[i]>= -10)) return false;
    return true;
}
console.log(every([1, -7, 2, 5, 7, 9, 0, 6]));

// 3 some -----------------------------------------

function some(arr) {
    for (let i = 0; i < arr.length; i++)
        if (arr[i] ===-7) {
            return true;
        }
    return false;
}
console.log(some([1, -7, 2, 5, 7, 9, 0, 6]));