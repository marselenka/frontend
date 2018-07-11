// *****Ёлочка*****************************************************
// var row = parseInt(prompt("Введите количество строк: "));
// var n = "&nbsp;";
// for(let i = 0; i < row; i++){
//     for(let j = row; j > i - 1; j--){
//         document.write(n,n);
//     }
//     for(let star = 0; star < i+1; star++){
//         document.write("*",n,n);
//     }
//     document.write("<br>");
// }
// for(let i = 0; i < row; i++){
//     for(let j = row; j > i - 1; j--){
//         document.write(n,n);
//     }
//     for(let star = 0; star < i + 1; star++){
//         if(i===0||i===row-1||star===0||star===i)
//         document.write("*",n,n);
//         else document.write(n,n,n,n);
//
//     }
//     document.write("<br>");
// }


// *****Угадай число*****************************************************

function rand(a, b) {
    return Math.round(Math.random() * (b - a)) + a;
}
var result=true;
while (result) {
    let randNum = rand(1, 100);
    let num = parseInt(prompt("Угадайте с 5 попыток число от 1 до 100: "));
    for (let i = 1; i <= 5; i++) {
        let effort = 5 - i;
        if (num !== randNum && i === 5) {
            result=confirm("Все попытки исчерпаны - ты проиграл! сыграем еще?");
            break;
        }
        if (num > randNum) {
            num = parseInt(prompt("Нет, слишком много, осталось " + effort + " попытки"));
            continue;
        }
        if (num < randNum) {
            num = parseInt(prompt("Нет, слишком мало, осталось " + effort + " попытки"));
            continue;
        }
        if (num === randNum) {
            result=confirm("Вы выграли, сыграем еще?");
            break;
        }
    }
}



