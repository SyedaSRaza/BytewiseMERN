// // // console.log('My practice Javascript Code')

// // // let name="sughra"
// // // console.log(name)

// // // let sum = 0
// // // sum=5
// // // console.log(sum)

// // const name = "sughra"
// // const grade = 16
// // const isEven= true

// // const res = null

// // const person ={
// //     firstName:'Syeda',
// //     lastName: 'Raza'
// // }
// // console.log(person.lastName)

// // const primeNumbers=[2,3,5,7]
// //Operators and equality
// let x= 5
// let y=9
// console.log(x+y)
// console.log(++x)

// console.log(x===y)
// const isEven = 10%2==0 ? true : false
// console.log(isEven)
// //Will return 0
// console.log(parseInt('5'))

// //conditional operators

// const num = 5

// if(num>=6){
//     console.log("Is Greater than 5")
// }
// else{
//     console.log("Number is lesser than 5")
// }

// color = "green"
// switch(color){
//     case 'blue':
//         console.log("Color is blue")
//         break
//     case 'red':
//         console.log("Color is red")
//         break
//     case 'green':
//         console.log("Color is green")
//         break
//     default:
//         console.log("Color is default")

// }

// for(let i=1; i<=10;i++){
//     console.log(i)
// }

// let i =1
// while(i<11){
//     console.log(i)
//     i++
// }
/* 
let i=1
do{
    console.log(i)
    i++
}while(i<11) */

//Best for collection of data
/* const num=[1,2,3,5,6,7]

for(const n of num){
    console.log(n)
} */

// Function
function hello(name){
    console.log("Hello " + name)
}
hello('sughra')

function product(x,y){
    return x * y
}
const prod = product(4,6)
console.log(prod)
