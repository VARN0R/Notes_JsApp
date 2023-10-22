console.log('Start')

const names = ['test1', 'test2', 'test3', 'test4']

// names.push('zalupa')
// console.log("Names:", names)

// names.unshift('hren')
// console.log("Names:", names)

// names.shift()
// console.log("Names:", names)

// names.pop()
// console.log("Names: ", names)

//const newItem = names.toReversed()
// console.log(names.toReversed())
// console.log(names)

// names.sort()
// console.log(names)

// names.splice(1, 3)
// console.log(names)

// const item2 = names.toSpliced(1,3)
// console.log(names)
// console.log(item2)

//console.log(names.indexOf('test4'))

// const numbers = [10,7,3,9,5]
// numbers.sort(function(a,b){
//     return b-a
// })
// console.log(numbers)

// const newNames = names.with(1,'HUI')
// console.log(names)
// console.log(newNames)

// const newNames = names.map(function(name){
//     return  name + '!'
// })

// const newNames2 = names.map(function(name, index){
//     if (index === 1){
//         return 'HUIIIII'
//     }
//     return name
// }) 

// console.log(newNames2)

//console.log(names.includes('test1'))

// реализация метода includes через indexof
// function contain(word){
//     if (names.indexOf(word) !== -1){
//         return true
//     } else {
//         return false
//     }

// }

// console.log(contain('test4'))
// console.log(contain('test5'))

//  const people = [
//      {name: 'Vlad', budget: 500},
//      {name: 'John', budget: 700},
//      {name: 'Ivan', budget: 900},
//      {name: 'Pet', budget: 300}
//  ]

// const finded = people.find(function(person){
//      return person.budget > 300 
//  })

// console.log(finded)


// let a = 13

// if (a % 2 === 0){
//     console.log('четное')
// } else {
//     a++
//     console.log(a)
// }


// for (let a = 0; a <= 1000; a++){
//     if (a % 2 !== 0){
//         console.log(a)
//     }
//     if(a % 12 === 0){
//         console.log(a)
//     }
// }

// const array = [12,2,31,5,6]

// const newArray = array.map(function(num){
//     return num*=0.25
// })

// console.log(newArray)

// function sayHello(name){
//     if (name === undefined){
//         return "Hello, someone"
//     }
//     return `Hello, ${name}`
// }

// console.log(sayHello())

// const sayHello = (name) => name === undefined ? 'Hello, someone' : `Hello, ${name}`
    

// console.log(sayHello('vlad'))

// function calc(a,b,operation){
//     if (operation === '+'){
//         return a + b
//     } else if(operation === '-') {
//         return a - b
//     } else if(operation === '*') {
//         return a * b
//     } else if(operation === '/') {
//         return a / b
//     }
//  }

//  console.log(calc(4,5,'+'))
 
//  let age = 19

//  let category = (age >= 18 ? 'Взрослый' : 'Детский')
 
//  console.log(category) 

// let a1 = 25
// let a2 = 20
 




// let c = (a1 > a2? a1 : a2)

// console.log(c)


//Замыкания в JS
// function createPerson(name) {
//     return function(lastname) {
//         return function(thirdname) {
//             console.log(name + ' ' + lastname + ' ' + thirdname)
//         }
//     }
// }

// createPerson('vlad')('mal')('aleks')
