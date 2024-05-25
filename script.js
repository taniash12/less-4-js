// დავალება 1 

let array = [6, 77, 88, 99, 64, 84, 32, 55]

array.splice((array.length - 2), 1, "strawberry")
console.log(array);


// დავალება 2 

let info = "good day"

let newInfo =info.slice(5,8);
console.log(newInfo);

// დავალება 3
let item = "hello"

function x(item) {
    console.log(x.length);
}
x()
return item;

// დავალება 4

let array5 = [5, 25, 89, 120, 36]

array5.splice(0,0,"html", "css")
array5.splice(array5.length,0, "javascript", "python")
array5.shift()
array5.pop()
console.log(array5);

// დავალება 5

let fruits = ["orange","banana","kiwi"]

fruits.length;
fruits.splice(3,0,"apple", "pineapple")
fruits.splice(0,0,"watermelon")
fruits.length;
fruits.splice(2,0,"mango")
fruits.shift()
fruits.pop()
fruits.length;
console.log(fruits);

// დავალება 6

let array3 = [1, 2, 3, 4, 5]

array3.splice(3,0,"a","b","c")
console.log(array3);

// დავალება 7
let array7 =  [15, 100, 25, 10, 36]

array7.splice(3,1)
console.log(array7);


// დავალება 8

let array8 = [ 1, 2 , 3 , 4, 5] 

array8.splice(2,1,"three")
console.log(array8);

// დავალება 9

let array4 = [1, 2, 3, 4, 5]
let sum = 0

array4.forEach(function(item) {
    sum += item;
})
console.log(sum);