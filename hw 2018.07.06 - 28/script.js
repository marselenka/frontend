// #1 Поменять местами минимальный и максимальный элементы массива******************************************

// var arr=[1,-22,10,4,-5,-10];
// var min=0;
// var max=0;
// for (let i=0; i<arr.length; i++){
//     if (arr[min]>arr[i]) min=i;
//     if (arr[max]<arr[i]) max=i;
// }
// var memory=arr[min];
// arr[min]=arr[max];
// arr[max]=memory;
//
// alert(arr);

// #2 Изменить порядок элементов массива на противоположный *************************************************

// var arr = [1, 2, 3, 4, 5, 6];
// var brr = [];
// var buff = arr[arr.length - 1];
// for (let i=arr.length-1; i>=0; i--) {
//     brr.push(arr[i]);
// }
// brr[0]=buff;
// document.write(brr);

// #3 вывести в документ в виде списка ссылок****************************************************************

var links = ['http://google.com','http://fb.com', 'http://vk.com'];
var names = ['google','facebook','vkontakte'];
for (let i=0; i<links.length; i++){
document.write("<li>"+"<a href=" + links[i] +">" + names[i] + "</a>"+"</li>");
}

// #3 Отсортировать элементы массива в порядке возрастания***************************************************

// var arr = [1, -22, 10, 4, -5, -10];
//
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i] < arr[j]) {
//             var temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// alert(arr);