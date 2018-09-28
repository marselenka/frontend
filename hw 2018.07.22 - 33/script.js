var array=[1, -7, 2, 5, 7, 9, 0, 6];

// 1 reduce -----------------------------------------
function reduce(arr,f) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) result=f(result,arr[i]);
    return result;
}
console.log (reduce(array,function (arg1,arg2) {
    return arg1+arg2;
}));


// 2 every -----------------------------------------
function every(arr,predicate) {
    for (let i = 0; i < arr.length; i++)
        if (!predicate(arr[i])) return false;
    return true;
}
console.log (every(array,function (elem) {
    return elem>= -25;
}));

// 3 some -----------------------------------------
function some(arr,predicate) {
    for (let i = 0; i < arr.length; i++)
        if (predicate(arr[i])) return true;
    return false;
}
console.log (some(array,function (elem) {
    return elem===5;
}));