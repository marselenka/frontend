// 1 split / join---------------------------------------------------------

function strReplaces(str, from, to){
    let arr = str.split(' ');
    for (let i=0; i<arr.length; i++){
        if(arr[i]===from) arr[i]=to;
    }
    let strNew = arr.join(' ');
    return strNew;
}
console.log(strReplaces("hello world, hello people","hello","good by"));

// 2 indexOf ------------------------------------------------------------


function strReplace(str,from,to) {
    let result='' ;
    let start=0;
    let pos;
    while ((pos  = str.indexOf(from,start))!== -1){
        result+= str.slice(start, pos) + to;
        start = pos + from.length;
    }
    result+=str.slice(start,str.length);
    return result;
}
    console.log(strReplace("hello world, hello people","hello","good by"));



