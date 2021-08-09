const numbers = [3,4,5,6,7,8,9];

//function square(element) {
//    return element*element;
//}
// square =element => element*element  (arrow function)


//const result =numbers.map(function (element){
//
//return element*element;})
//
// console.log(result);

const result = numbers.map(element =>element*element);
console.log(result);

//filter use kore kisu select korar jnno..array deba
// find o filter same..kintu sudo ekta element deba..jeta age pabe seta deba


const select= numbers.filter(element => element>5);
console.log(select);