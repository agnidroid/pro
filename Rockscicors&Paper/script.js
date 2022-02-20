/*
--------------------------------------------------------------
At a very High Level there are two types of Data types in Javascript
1. Primitive Data type : Number, String, Boolean, undefined, Symbol, null
2. Reference Data type : Array and Object
--------------------------------------------------------------
*/
// 1. Data Types
// Number
let num1 = 34;
let num2 = 56.543;

// String
let str1 = "Nikhilendra";
let str2 = "Kumar";

// Object
let marks = {
  john: 54,
  harry: 29,
  lalit: 45,
};

// Boolean
let a = true;
let b = false;

// Undefined
let und;

// Null
let _null = null;

// Array
let arr = [1, 2, 3, 4, 5];

// console.log(arr);
// console.log(typeof _null);
// console.log(a, b);
// console.log(str1 + " " + str2);
// console.log(num1 + num2);

// 2. Operators
// Arithmetic operators
/*
console.log(`The value of ${num1} + ${num2} = ${num1 + num2}`);
console.log(`The value of ${num1} - ${num2} = ${num1 - num2}`);
console.log(`The value of ${num1} * ${num2} = ${num1 * num2}`);
console.log(`The value of ${num1} / ${num2} = ${num1 / num2}`);
*/

// Assignment operator
num1 = 5;
let num3 = num1 + 5;
// num3 += 1
// num3 *= 2
// num3 /= 3
// num3 -= 5
// console.log(num3);

// Comparison operator
(num1 = 20), (num2 = 10);
// console.log(num1 == num2);
// console.log(num1 > num2);
// console.log(num1 < num2);
// console.log(num1 >= num2);
// console.log(num1 <= num2);

// Logical operator
/*
// Logical And
console.log(true && true);
console.log(true && false);
console.log(false && false);

// Logical Or
console.log(true || false);
console.log(true || true);
console.log(false || false);

// Logical Not
console.log(!true);
console.log(!false);
*/

// Function
/*
function avg (...numbers) {
    if (numbers.length != 0) {
        let total = 0
        numbers.forEach(num => total += num)
        console.log(total / numbers.length)
    }
}
// DRY - Don't Repeat Yourshelf
avg(4)
*/

// Conditional in JavaScript
let age = 54;
/*
if (age > 54 ) {
    console.log("you are burden on earth");
} else if (age > 18) {
    console.log("You are not a teen");
} else {
    console.log("You are kid");
}
*/

// Loops
/*
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
*/

// let i = 10
// while (i >= 1){
//     console.log(i);
//     i--
// }

// Odd
/*
i = 1
while (i <= 10) {
    if (i%2 == 1) {
        console.log("Odd: " + i);
    }
    i++
}
*/

// Even
/*
i = 1
while (i <= 10) {
    if (i%2 == 0) {
        console.log(i);
    }
    i++
}
*/

// arr = [9, 145, 334, 54, 32, 93]
// i = 0

// for (let i = 0; i < arr.length; i++) {
//     if (i == 3) {
//         // break
//         continue
//     }
//     console.log(i);
// }

// str1 = "hello buddy hello tutty"
// str2 = str1.replace("hello", "bye")
// console.log(str2);

myDate = new Date();

// console.log(myDate.getTime());
// console.log(myDate % 12 || 12);

// DOM Manipulation
// let element = document.querySelectorAll(".element");

// element.forEach((el) => {
//   el.style.backgroundColor = "green";
//   el.style.fontFamily = "cursive";
// });

// let container = document.getElementById("container");
// let body = document.querySelector("body");
// let all = body.querySelectorAll("*");
// let createdElement = document.querySelector("div");
// let createdElement2 = document.querySelector("p");
// let btn = document.createElement("button");
// let anchor = document.createElement("a");
// anchor.innerText = "Download Link";
// anchor.href = "#";

// btn.textContent = "RELOAD";

// createdElement2.innerHTML = "Kaise ho bhaisaab";
// createdElement.innerHTML = "Hello world from nikhil";

// all.forEach((el) => {
//   el.style.margin = "0";
//   el.style.padding = "0";
// });

// btn.style.margin = "1rem 0 0 2.3rem";

// createdElement.style.backgroundColor = "black";
// createdElement.style.margin = "2rem 0 0 0";
// createdElement.style.padding = "1rem";
// createdElement.style.color = "white";
// createdElement.style.fontSize = "1rem";
// createdElement.style.textShadow = "0 0 4px #fff";

// createdElement2.style.backgroundColor = "blue";
// createdElement2.style.margin = "1rem 0 0 0";
// createdElement2.style.padding = "0.4rem";
// createdElement2.style.fontSize = "12px";

// // console.log(anchor);

// container.appendChild(anchor);
// container.appendChild(btn);
// container.appendChild(createdElement);
// container.replaceChild(createdElement2, createdElement);
// container.removeChild(createdElement2);

// btn = document.querySelector("button");
// btn.onclick = (el) => {
//   document.location.reload();
//   el.target.style.display = "none";
// };



// // console.log(btn);

// container.style.height = "100vh";
// container.style.backgroundColor = "red";
// body.style.margin = "0";
// body.style.padding = "0";


// function sum () {
//     return "hello from me"
// }
// Arrow Function 
// const sum = () => "hello from me"

// console.log(sum());


// setTimeout and setInterval
// post = () => {
//     document.body.innerHTML = "setinterval fired"
//     console.log("this is a post");
// }

// logkaro = ()=> {
//     console.log("I am your log");
// }
// clr = setInterval(logkaro, 2000)


// setTimeout(post, 2000)
// setInterval(post, 2000)

// let time = document.querySelector("main > div.timer > div.time")

// let sec = 60
// let clr = setInterval(() => {
//     sec -= 1
//     time.innerHTML =  sec >= 10 ? `00 : ${sec}` : `00 : 0${sec}`
//     if (sec == 0) {
//         clearInterval(clr)
//         time.innerHTML = `<span>Timed out!</span>`
//     }
// }, 1000)


// JavaScript localStorage
// let form = document.querySelector("form"),
//     inputName = form.querySelector("#name"),
//     submitBtn = form.querySelector("button")
let root = document.querySelector(".root"),
    btn = document.querySelector("#button")

// console.log(btn);
// btn.onclick = () => {
//     // console.log("hello");
//     let xhr = new XMLHttpRequest()
//     xhr.open("GET", "php.php", true)

//     xhr.onprogress = () => { 
//         console.log("loading...");
//     }

//     xhr.onload = () => {
//         if (xhr.status == 200) {
//             let data = xhr.responseText
//             console.log(data);
//             root.innerHTML = data 
//         }
//     }
//     console.log(xhr);
//     xhr.send()
// }


str1 = "Hello world"
let jso = JSON.stringify(str1)
let parsed = JSON.parse(jso)
// console.log(jso);
// console.log(parsed);

// // console.log(form, inputName, submitBtn, root);

// form.onsubmit = (el) => {
//     el.preventDefault()
// }
// let LSData = []

// const getLS = () => {
//     if (localStorage.getItem("Names")) {
//         root.innerHTML = ""
//         let getLSData = localStorage.getItem("Names")
//         // LSData.push(getLSData)
//         JSON.parse(getLSData).forEach(element => {
//             let div = document.createElement("div")
//             div.innerHTML = element
//             root.appendChild(div)
//         });
//     } else {
//         root.innerHTML = "No Data Available!" 
//     }
// }

// const setToLS = () => {
//     if (!inputName.value) {
        
//     }else {
//         LSData.push(inputName.value)
//         localStorage.setItem("Names", JSON.stringify(LSData))
//         inputName.value = ""

//         getLS()
//     }
// }

// submitBtn.onclick = () => {
    // setToLS()
    // getLS()

// getLS()

// obj = {name: "Nikhilendra", class: 7, admin: 9386}
// jso = JSON.stringify(obj)
// jsoParse = JSON.parse(jso)
// console.log(jso);
// console.log(jsoParse);


// let k = new Date()
// console.log(k.toLocaleDateString(undefined,{weekday: "long", year: "numeric", month: "long", day: "numeric"}));


// let k1 = Symbol("k1")
// let k2 = Symbol("k2")
// let k3 = Symbol("k3")
// let k4 = Symbol("k4")


// console.log(k1);
// console.log(k2);
// console.log(k3);
// console.log(k4);

// let obj1 = {}
// obj1[k1] = "Nikhilendra"
// obj1[k2] = "Nikhil"
// obj1[k3] = "HM H to kya gum h"
// obj1[k4] = "Jo bhi dekha jayega"

// console.log(obj1);

// let _map = new Map()

// k1 = "My name is anthony gonsalvie"
// k2 = {}
// k3 = () => {}

// _map.set(k1, k2, k3)

// console.log(_map);

