// let a = [];
// a.p1 = "dcfsd";
// a.p2 = "sdfdcfe";

// function b(){
//     console.log(a);
//     var check = Array.isArray(a);
//     console.log(check);
// }

// b();

// ==========loop======

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// a.forEach(function(x){
//     console.log(x);
// });

// a.forEach(function (x) {
//     if (x < 5) {
//         console.log(x);
//     }
// });

// return Array

// let filtered = a.filter(function (x) {
//     if (x < 5) {
//         return x
//     }

// })
// console.log(filtered);

// let filterItem = a.filter(function (z) {
//     if (z < 5) {
//         return z
//     }
// })
// console.log(filterItem);

// let a = [
//     {
//         id: 1,
//         name: "syedali",
//         category: "a",
//     },
//     {
//         id: 2,
//         name: "m.arsalan",
//         category: "b",
//     },
//     {
//         id: 3,
//         name: "m.abid",
//         category: "b",
//     },
//     {
//         id: 4,
//         name: "seydtalha",
//         category: "c",
//     },
//     {
//         id: 5,
//         name: "anum khan",
//         category: "d",
//     },
// ];


// let filterItem = a.filter(function(x){
//     if(x.category == 'b'){
//         return x
//     }
// })

// console.log(filterItem)

// find methood return Object

// let selectObj = a.find(function(x){
//     if(x.id==5){
//         return x
//     }
// })
// console.log(selectObj)

// let filterItem = a.filter(function(x){
//     if(x.name.includes("m.")){
//         return x
//     }
// })

// console.log(filterItem)

// let mapItem = a.map(function(x){
//     return x
// })
// console.log(mapItem)


// ==================ES6 START===================== 

// ====template literals====

// let str1 = 10.5566555
// let str2 = 20.5648468486

// let c = `the sum of ${str1} and ${str2} is 
// equal ${(str1+str2).toFixed(2)} `

// console.log(c)


// ===turnery operaters====

// let bool = true

// if (bool){
//     console.log("abc")
// }else{
//     console.log("xyz")
// }

// // true?console.log("abc"):console.log("xyz")
// 10 == 11?console.log("abc"):console.log("xyz")

// let num = 10


//  num == 10 && num == 12?console.log("number equal"):num < 5? console.log("number is too short"):console.log("bydefult value")


// let bool = 10 == 10 ? true : false;
// console.log(bool);


// let abc1 = 10
// let abc2 = 20

// let bool = abc1-abc2? "number exits": "number doesn't exit";

// console.log(bool)

