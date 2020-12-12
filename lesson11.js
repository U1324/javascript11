let cars = ["audi", "bmw", "lexus", "volkswagen", " porsche"];

for (let i = 1; i < 5; i++)

    console.log(cars[i]);

let names = ['beqa', 'ekaterine', 'lasha', 'nia', 'ucha']

for (x = 0; x < names.length; x++)
    if (names[x].length > 3) {
        console.log(names[x])
    }

let numbers = [2, 3, 4, 5, 8, 10, 11]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 1)
        console.log(numbers[i])
}

let numbers = [2, 3, 4, 5, 8, 10, 11]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0)
        console.log(numbers[i])
}


let user = ['name', 'age', 25, 50, 'surname', [100, 500]];

console.log(user[5][1])

var person = {
    firstname: "john",
    lastname: "doe",
    age: 50,
    eyecolor: "blue"
};

console.log(person.eyecolor)


let elements = [24, 28, 'beqa', 'giorgi', 'kato', 'nia', 'salo']

for (let i = 0; i < elements.length; i++) {

    console.log(elements[i])
}

let numbers = [5, 25, 89, 120, 36]

numbers.push('javascript', 'python')
console.log(numbers)
console.log(numbers.length);
numbers.shift();
numbers.pop();
console.log(numbers);

let fruits = ['orange', 'banana', 'pear']
console.log(fruits.length);
fruits.push('apple', 'pineapple');
fruits.unshift('watermelon');
fruits.splice(2, 0, 'Mango');
fruits.shift();
fruits.pop();
console.log(fruits.length);

let cars = ["audi", "bmw", "lexus", "volkswagen", "ferrary", "porsche", "bently"];

for (let i = 3; i < 6; i++) {

    console.log(cars[i]);
}

let newcars = cars.slice(1, 4)

console.log(newcars)

let names = ['beqa', 'giorgi', 'kato', 'nia', 'salo']
if (names.length === 5 && names[names.length - 1] === "salo") {
    console.log("მასივის რაოდენობა : 5 და ბოლო ელემენტია სალო")
}

let names1 = ["ana", 'beqa', 'giorgi', 'kato', 'nia', 'salo']
if (names1.length === 6 || names1[0] === "sandro") {
    console.log("მასივის რაოდენობა: 6 და პირველი ელემენტია სანდრო")
}