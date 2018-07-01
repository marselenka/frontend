// Task:0***********************************************************************************************************

// var mark=2;
// var qOne=parseInt(prompt("На какой планете мы живем?  1 - Венера;  2 - Земля;  3 - Марс;"));
// if (qOne===2) { var mark=++mark;}
// var qTwo=parseInt(prompt("Какой океан самый большой в мире?  1 - Атлантический Океан;  2 - Тихий Океан;  3 - Индийский Океан;"));
// if (qTwo===2){  var mark=++mark;}
// var qThree=parseInt(prompt("Римская цифра IX записанная Арабскими цифрами？  1 - 9;  2 - 100;  3 - 11;"));
// if (qThree===1){ var mark=++mark;}
// var qFour=parseInt(prompt("Сколько костей имеет здоровый взрослый мужчина/женщина ?  1 - 206;  2 - 308;  3 - 102;"));
// if (qFour===1) { var mark=++mark;}
// var qFive=parseInt(prompt("Какое наименьшее простое число?  1 - 0;  2 - 1;  3 - 2;"));
// if (qFive===3) { var mark=++mark;}
// var qSix=parseInt(prompt("Какой город является столицей Австралии?  1 - Сидней;  2 - Мельборн;  3 - Канберра;"));
// if (qSix===3) {var mark=++mark;}
// var qSeven=parseInt(prompt("На каком языке говорит большинство людей в США?  1 - английский;  2 - французский;  3 - испанский;"));
// if (qSeven===1) { var mark=++mark;}
// var qEight=parseInt(prompt("Самый распространенный элемент в атмосфере？  1 - кислород;  2 - аргон;  3 - азот;"));
// if (qEight===3) { var mark=++mark;}
// var qNine=parseInt(prompt("Как называется самая длинная река в мире?  1 - Нил;  2 - Амазонка;  3 - Миссисипи;"));
// if (qNine===2) { var mark=++mark;}
// var qTen=parseInt(prompt("Сколько камер в сердце человека?  1 - 4;  2 - 6;  3 - 3;"));
// if (qTen===1) { var mark=++mark;}
// alert("Ваша оценка: "+mark);

// Task:1***********************************************************************************************************

// var tankVolume = parseInt(prompt("введите обьем бака, л: "));
// if (tankVolume > 100) {
//     alert("Превышен возможный обьем топливаного бака (100л) ");
// }
// else if (tankVolume <= tankVolume) {
//     var tankFuel = parseInt(prompt("введите количество топлива в баке, л: "));
// }
// if (tankFuel > tankVolume) {
//     alert("Превышен допустимый обьем топлива для данного топливного бака " + tankVolume + " л");
// }
// else if (tankFuel <= tankVolume) {
//
//     var cargoWeight = parseInt(prompt("введите вес груза, т: "));
// }
// if (cargoWeight > 5) {
//     alert("Самолет с грузом такого веса не взлетит")
// }
// else if (cargoWeight <= 5) {
//     var distanceAC = parseInt(prompt("введите расстояние до остановки, км: "));
//     var distanceCB = parseInt(prompt("введите расстояние после остановки, км: "));
// }
// var requiredFuel = parseFloat((distanceAC + distanceCB) / 100);
// var fuelAC=distanceAC / 100;
// var fuelCB=distanceCB/100;
//
// if (cargoWeight === 1) {    var index=25;}
// if (cargoWeight === 2) {    var index=30;}
// if (cargoWeight === 3) {    var index=35;}
// if (cargoWeight === 4) {    var index=42;}
// if (cargoWeight === 5) {    var index=50;}
//
// var deltaFuel = tankFuel - requiredFuel * index;
// var fuelACcargo=fuelAC*index; // количество топлива чтобы долететь до точки C
// var fuelCBcargo = fuelCB * index; // количество топлива чтобы долететь до точки В
// var delta = fuelCBcargo - (tankFuel - fuelACcargo); //сколько нужно добавить топлива в бак в точке С чтобы долететь до т В
//
// if (deltaFuel >= 0)               { alert("Самолет долетит до пункта В без дозаправки");    }
// else if (fuelACcargo > tankFuel)  { alert("Самолет не долетит до пункта С");    }
// else if (fuelACcargo <= tankFuel) { var result= fuelCBcargo <= tankVolume ? alert("необходимо дозаправить на " + Math.abs(delta)+" л") : alert("самолет не долетит до точки В, необходимо больше одно дозаправки") }


// Task:2***********************************************************************************************************
var logic = "Ваш алгортм:\n";
var presentResult =
    "нарезать хлеб\n" +
    "положить хлеб в тостер\n" +
    "включить тостер\n" +
    "подождать 5 минут\n" +
    "тосты готовы";
var presentToasterMoney = "купить тостер\n";
var presentBreadMoney = "сходить за хлебом\n";
var noToasts = "Тостов не будет (((";

if (parseInt(prompt("Есть ли у вас тостер? 1 - да; 2 - нет; ")) === 1) {
    if (parseInt(prompt("Есть ли у вас хлеб? 1 - да; 2 - нет; ")) === 1) {
        alert(logic + presentResult);
    } else {
        if (parseInt(prompt("Есть ли у вас деньги на хлеб? 1 - да; 2 - нет; ")) === 1) {
            alert(logic + presentBreadMoney + presentResult);
        } else {
            alert(noToasts);
        }
    }
} else {
    if (parseInt(prompt("Есть ли у вас деньги на тостер? 1 - да; 2 - нет; ")) === 1) {
        if (parseInt(prompt("Есть ли у вас хлеб? 1 - да; 2 - нет; ")) === 1) {
            alert(logic+presentToasterMoney+presentResult);
        } else {
            if (parseInt(prompt("Есть ли у вас деньги на хлеб? 1 - да; 2 - нет; ")) === 1) {
                alert(logic+presentToasterMoney+presentBreadMoney+presentResult);
            } else {
                alert(noToasts);
            }
        }
    } else {
        alert(noToasts);
    }
}


