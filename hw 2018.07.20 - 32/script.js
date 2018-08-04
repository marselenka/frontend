// 1 плоащдь треугольника по сторонам ------------------------------------------------

function square(a, b, c) {
    p = (a + b + c) / 2;
    sq = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    return sq;
}

console.log(square(3, 6, 7));

// 2 меньшее из 2х чисел--------------------------------------------------------------

function minimum(a,b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
console.log(minimum(7,-3));

// 3 минимальный элемент М ----------------------------------------------------------

function minElem(arr) {
let min=arr[0];
for (let i=0; i<arr.length; i++) {
   min=minimum(arr[i],min);
}
    return min;
}
console.log(minElem([1,-7,2,5,7,9,0,6]));

// 4 индекс минимального элемента в заданном диапазоне М ------------------------------------

function minElementIndex(arr, startIndex, endIndex) {
    let minIndex = startIndex;
    for (let i = startIndex + 1; i < endIndex; i++) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i;
        }
    }
    return minIndex;
}
console.log(minElementIndex([1, -3, 2, 5, 7, 9, 0, 6], 2, 7));

// 5 функция сортировки М методом выбора ----------------------------------------------------------------

function selectSort(arr) {
     for (let i = 0; i < arr.length-1; i++) {
        let minIndex = minElementIndex(arr, i, arr.length);
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
console.log(selectSort([1, -3, 2, 5, 7, 9, 0, 6]));

// 6 сумма четных чисел М ----------------------------------------------------------------

function summEven(arr) {
    let summ = 0;
    for (let i in arr)
        if (arr[i] % 2 === 0) {
            summ += arr[i];
        }
    return summ;
}
console.log(summEven([1, -3, 2, 5, 7, 9, 0, 6]));

// 7 реализация функции ndexOf ----------------------------------------------------------------

function ElemIndex(arr,elem) {
    let index;
    for (let i = 0; i < arr.length; i++) {
        if (elem===arr[i]) {
            index = i;
        }
    }
    return index;
}
console.log(ElemIndex([1,-3,2,5,7,9,0,6],7));




