
//Условные операторы
// 1------------------------------------------
function result(a,b) {
    let res=(a% 2 === 0)?a*b:a+b;
    return res;
}
// console.log(result(9,12));

//2------------------------------------------


//3------------------------------------------
function summPositive(a,b,c) {
    let summ = 0;
        if (a > 0) {
            summ += a;
        }else if (b>0){
            summ+=b;
        }else(c>0)
            summ += c;
    return summ;
}
// console.log(summPositive(-5, -3, 2));

//4------------------------------------------
//5------------------------------------------


//Циклы
//1------------------------------------------
//2------------------------------------------
//3------------------------------------------
//4------------------------------------------
//5------------------------------------------
function summNum(num) {
    let sum=0;
    while (num>10){
        sum+=num%10;
        num=parseInt( num/10);
    }
    if (num<10)sum+=num;
    return sum;
}
console.log(summNum(564379));

//6------------------------------------------


//Одномерные массивы
//1------------------------------------------
function min(arr){

    let keep=arr[0];
        for (let i=0; i<arr.length; i++){
         if (keep>arr[i]){
                keep=arr[i];
    }
}
    return keep;
}
// console.log(min([1, -3, 2, 5, 7, -9, 0, 6]));

//2------------------------------------------
function max(arr){

    let keep=arr[0];
    for (let i=0; i<arr.length; i++){
        if (keep<arr[i]){
            keep=arr[i];
        }
    }
    return keep;
}
// console.log(max([1, -3, 2, 25, 7, -9, 0, 6]));

//3------------------------------------------
function minInd(arr){
let num=0;
for (let i=0; i<arr.length; i++){
    if (arr[num]>arr[i]){
        num=i;
    }
}
    return num;
}
// console.log(minInd([1, -3, 2, -25, 7, -9, 0, 6]));

//4------------------------------------------
function maxInd(arr){
    let num=0;
    for (let i=0; i<arr.length; i++){
        if (arr[num]<arr[i]){
            num=i;
        }
    }
    return num;
}
// console.log(maxInd([1, -3, 2, -25, 7, -9, 0, 600]));

//5------------------------------------------
function summOddIndex(arr) {
    let summ = 0;
    for (let i in arr)
        if (i % 2 !== 0) {
            summ+=arr[i];
        }
    return summ;
}
// console.log(summOddIndex([1, 4, 3, 4, 5, 6, 7, 8]));


//6------------------------------------------
function revers(arr){
let brr = [];
let buff = arr[arr.length - 1];
for (let i=arr.length-1; i>=0; i--) {
        brr.push(arr[i]);}
        brr[0]=buff;
    return brr;
}
// console.log(revers([1, -3, 2, -25, 7, -9, 0, 600]));

//7------------------------------------------

function resOdd(arr) {
    let result = 0;
    for (let i in arr)
        if (arr[i] % 2 !== 0) {
            result++;
        }
    return result;
}
// console.log(resOdd([1, -3, 2, 5, 9, 0, 8, 6]));

//8------------------------------------------
//9------------------------------------------
function sortBubble(arr) {
    for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
return(arr)
}
// console.log(sortBubble([1, -38, 28, -25, 7, -9, 0, 600]));

function sortSelect(arr) {
    for (let i=0; i<arr.length-1; i++){
        let min=i;
        for (let j=0; j<arr.length-1; j++) {
            if (arr[min] <= arr[j]) min=j;
            let temp=arr[i];
            arr[i]=arr[min];
            arr[min]=temp;
        }
    }
    return(arr)
}
// console.log(sortSelect([1, -3, 2, -25, 7, -9, 0, 600]));

function sortInsert(arr) {
    for (let i = 0; i < arr.length; i++){
        let v = arr[ i ], j = i-1;
         while (j >= 0 && arr[j] > v){
             arr[j+1] = arr[j]; j--;
         }
             arr[j+1] = v;
}
    return(arr)
}
// console.log(sortInsert([111, -3, 2, -25, 7, -9, 0, 60]));


//10------------------------------------------

//Функции
//1------------------------------------------
//2------------------------------------------