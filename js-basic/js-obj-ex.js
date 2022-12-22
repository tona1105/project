//1
// var user = {}
// user.name = 'David'
// console.log(user)
// user.surname = 'Xuan'
// console.log(user)
// user.name = 'Cafedev'
// console.log(user)
// delete user.name
// console.log(user)

//2
// function isEmpty (obj) {
//     if(Object.keys(obj) < 1 && Object.values(obj) <1 ) return false
//     else return true
// }
// console.log(isEmpty({
//     name: 'a'
// }))

//3
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
//     var sum = salaries.Ann + salaries.John + salaries.Pete
// console.log(sum)

//4 
// function multiplyNumeric(obj) {
//     for (var values in obj) {
        
//         if (typeof obj[values] == 'number') {
//             obj[values] = obj[values]*2
//         }
//     }
//     return  obj
// }
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu cafedev"
//   };
  
// console.log(multiplyNumeric(menu))

//5
// nothing - vì nó trả về function makeUser

//7
// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this
//     },
//     down() {
//       this.step--;
//       return this
//     },
//     showStep: function() { // shows the current step
//       alert( this.step );
//       return this
//     }
//   };

// ladder.up().up().down().showStep();


//9
// var Calculator = {
//   arr : [],
//   read() {
//     for ( var i = 0; i<2 ;i++ ) {
//       this.arr.push(prompt('Nhập số',0))
//     }
//     return this.arr
//   },
//   sum() {
//     var sum = 0
//     for (value in this.arr) {
//       sum += parseInt(this.arr[value])
//     }
//     return sum
//   },
//   mutil() {
//     var mutil = 1
//     for (value in this.arr) {
//       mutil *= parseInt(this.arr[value])
//     }
//     return mutil
//   }
// }
// console.log(Calculator.read())
// console.log(Calculator.sum())
// console.log(Calculator.mutil())

//10
// function Accumulator(startingValue) {
//   var sum = startingValue
//     while(true) {
//         var num = prompt("Nhập số",0)
//         if (isNaN(num) == true || num === null)  break 
//         sum += parseInt(num) 
//     }
//     return sum
// }

// console.log(Accumulator(3))