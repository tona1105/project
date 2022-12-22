// //1 
// let fruits = ["Apples", "Pear", "Orange", "Banana"]

// //2
// var style = ['Jazz','Blues']
// style.push("Rock")
// console.log(style)
// style.splice(1,1,"Classisc")
// console.log(style)
// console.log(style.shift(1))
// console.log(style)
// style.unshift("Rap","Reage")
// console.log(style)

//3
// {}

// //4
// function sumInput() {
//     var arr = []
//     while(true) {
//         var num = prompt("Nhập số",0)
//         if (isNaN(num) == true || num === null)  break
//         arr.push(num) 
//         console.log(arr)
//     }
//     var sum = arr.reduce((a,b) => {
//         return a + parseInt(b)
        
//     },0)
//     alert(`Tong la: ${sum}`)
// }
// sumInput()

//5
// var arr = [1,-2,3,4,-9,6]
// function getMaxSubSum (arr) {
//     var max = 0
//     var result = arr.reduce((a,b) => {
//         if (parseInt(b) < 0) {
//             b = 0
//         }
//         return max > (a + b) ? max : (a + b)
        
//     },0)
//     return result
// }
// console.log(getMaxSubSum(arr))

//6 
// function camilaze(str) {
//     var arr = str.split('')
//     for(var i = 0; i<arr.length; i++ ) {
//         if (arr[i] == '-') arr.splice(i,2,arr[i+1].toUpperCase())
        
//     }
//     return arr.join('')
// }
// console.log(camilaze('backgr-a-v-sound-co-lor'))

//7

// function filterRanger(arr,a,b) {
//     var arr2 = []
//     for (var i = a; i<= b; i++) {
//         arr2.push(arr[i])
//     }
//     return arr2
// }
// console.log(filterRanger([1,2,3,4,5,6,7],2,3))

// //8
// function filterRangeInPlace(arr,a,b) {
//     var arr2 = []
//     for (var i = 0; i< arr.length; i++) {
//         if(a <= arr[i] && arr[i] <= b) arr2.push(arr[i])
//     }
//     return arr2
// }
// console.log(filterRangeInPlace([1,2,3,4,5,6,7],2,3))

//9
// let arr = [5, 2, 1, -10, 8];
// // c1
// // for (var i = 0; i<arr.length; i++) {
// //     for(var j = 0; j<arr.length; j++) {
// //         if(arr[i]<arr[j]) {
// //             var temp = arr[i]
// //             arr[i] = arr[j]
// //             arr[j] = temp
// //         }
// //     }
// // }
// c2
// arr.sort()
// console.log(arr)

//10
// let arr = ["HTML", "JavaScript", "CSS"];
// var arr2 = arr.map((a) => {return a}).sort()
// console.log(arr2)
// console.log(arr)

//11
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];
// let names = [ john.name, pete.name, mary.name ];
// console.log(names)

//12 
// function person (id,name,surname) {
//     this.id = id,
//     this.name = name,
//     this.surname = surname,
//     this.fullName = () => {
//         return `${this.name} ${this.surname}`
//     }
// }

// var users = [
//     a = new person (1,'join','nguyen'),
//     john = new person (2,'join','nguyen'),
//     john = new person (3,'join','nguyen'),
// ]

// var users2 = users.map((person) => {
//     return {
//         id: person.id ,
//         fullName: person.fullName()
//     }

// })
// console.log(users2)

//13
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// function sortByAge(arr) {
//    c1
//    for(var i = 0; i<arr.length; i++) {
//     for(var j =0; j<arr.length; j++) {
//         if(arr[i].age < arr[j].age) {
//             temp = arr[i] 
//             arr[i] = arr[j]
//             arr[j] = temp
//         }
//     }
//    }
//    return arr   
// }

// c2
// function sortByAge(arr) {
//         return arr.sort(compare)
//     }

// function compare( a, b ) {
//     if ( a.age < b.age ){
//       return -1;
//     }
//     if ( a.age > b.age ){
//       return 1;
//     }
//     return 0;
//   }

// console.log(sortByAge([ john, pete, mary ]))


//14
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// function getAverageAge(arr) {
//     var length = arr.length
//     var sum =  arr.reduce((a,b) => {
//         return a + b.age
//     },0)
//     return ave = sum/length
// }
// console.log(getAverageAge([john, pete, mary]))

//15
// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
//   ];

// function groupById(arr) {
//     arr2 = arr.map(a => {
//         return `${a.id}: {id: ${a.id}, name: ${a.name}, age: ${a.age}}`
//     })
//     return arr2
// }
// arr2 = groupById(users)
// console.log(arr2)

// DONE AT 11:33PM 17/11/2022 ^^