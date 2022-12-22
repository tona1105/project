// var arr = [1,2,3,4,[5,6],7,[8,9,10]]
// var flatArr = arr.reduce((a,b) => {return a.concat(b)},[])
// console.log(flatArr)

// var topics = [
//     {
//         topic: "Front-end",
//         courses: [
//             {
//                 id: 1,
//                 title: "Html,Css"
//             },
//             {
//                 id: 2,
//                 title: "Js"
//             }
//         ]
//     },
//     {
//         topic: "Back-end",
//         courses: [
//             {
//                 id: 1,
//                 title: "Nodejs"
//             },
//             {
//                 id: 2,
//                 title: ".Net"
//             }
//         ]
//     }
// ]

// var newTopic = topics.reduce((a,b) => {
//     return a.concat(b.courses)
// }, [])
// var newNew = newTopic.map(a => {return a.title})
// console.log(newNew)

// const number = [1,2,3,4,5]
// var total = number.reduce((a,b) => {return a+=b},0)
// console.log(total).

// Array.prototype.some2 = function(cb) {
//     for ( var index in this) {
//         if (this.hasOwnProperty(index)) {
//             if (!cb(this[index],index,this)) {
//                 return false
//             }
            
//         }
//     }
//     return true
// }

// var topics = [
//                 {
//                     id: 1,
//                     title: "Html,Css",
//                     isFinish : true
//                 },
//                 {
//                     id: 2,
//                     title: "Js",
//                     isFinish : true
//                 }
//             ]

// var result = topics.some2(p => p.isFinish == true)
// console.log(result)
    


let text = "Buồn quá, bạn không muốn nhập tên!"

while(true) {
             let person = prompt("Mời bạn nhập tên của mình");
             if (person == null || person == 0) console.log(text);
             else if (person != null && person != 0)  {
                console.log( "Xin chào " + person + "!")
                break
             }
         }

