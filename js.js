// DRY - dont repeat yourself

//a
// function sayHello() {
//     document.write("Hello, welcome to my website  <br>");
//     document.write("How are you?");
// }

// sayHello();
// sayHello();

// let userName;

// sayHello();

//b
// function sayHello(greeting) {
//   document.write(greeting);
// }

// sayHello("Привет");
// sayHello("Салам");
// sayHello("hi five");

//c
// function sayHello(greeting = "Салам") {
//     document.write(greeting);
//   }
  
//   sayHello();
//   sayHello("Салам");
//   sayHello();

//d

function userInfo() {
    let userName = prompt(`Your name: `);
    let userLastName = prompt(`Your surname`);
    let userAge = prompt(`Your age: `);
    document.write(`Hi five, ${userName} ${userLastName} ${userAge}`);
}
userInfo();

// e
// function sayHello() {
//     document.write("Hello, Welcome to My Webpage!");
//   }
  
//   sayHello();
//   sayHello();
//   sayHello();

//<br>
//f

//home work 2
// function window(s, w) {
//     let line=''
//     for (let i = 0; i <= (w/2)-2; i++){
//         if (w % 2 == 0) {
//             line+='-'
//         }
//     }
//     return `${line}${s}${line}`
// }
// document.write(window(`hi`, 20))

