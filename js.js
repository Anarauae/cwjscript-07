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
// Упражнение 1
// Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17 лет" 

// function userInfo() {
//     let userName = prompt(`Your name: `);
//     let userLastName = prompt(`Your surname`);
//     let userAge = prompt(`Your age: `);
//     document.write(`Hi five, ${userName} ${userLastName} ${userAge}`);
// }
// userInfo();


// e
// function sayHello() {
//     document.write("Hello, Welcome to My Webpage!");
//   }
  
//   sayHello();
//   sayHello();
//   sayHello();

//<br>


//f
// Упражнение 2 (a)
// Напишите функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке
// let Day = function (day) {
//     switch (day) {
//         case 1: return "понедельник";
//         case 2: return "вторник";
//         case 3: return "среда";
//         case 4: return "четверг";
//         case 5: return "пятница";
//         case 6: return "суббота";
//         case 7: return "воскресение";
//         default: return "Вы ввели некщрректное число";
//     }
// }
// document.write(Day(1))

// Упражнение 2 (b)
// function Day() {
//     let dayOfWeek = prompt("Введите дни?")
//     let arr =["понедекльник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресение"];
//     return arr[dayOfWeek-1]
    
// }
// document.write(Day())


// Упражнение 3 
//Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости от времени суток (
//Доброе утро\день\вечер\ночи Иван)

// function Hello(){
// let date = new Date();

// let userName = prompt("как вас зовут");

// let hour = date.getHours();

// if (hour>=5 && hour<12) greeting = "Доброе утро ";  

// if (hour>=12 && hour<18) greeting = "Добрый день "; 

// if (hour>=18 && hour<24) greeting = "Добрый вечер "; 

// if (hour>=0 && hour<5) greeting = "Доброй ночи "; 

// document.write(greeting + userName);
// }
// Hello();




// Home work 1
//Напишите функцию, которая принимает в качестве параметра целое число и возвращает: 
//-1 если число отрицательное
//0 если число 0
//1 если число положительное

// function plusMinus(x) {
//     if (x < 0) return -1;
//     if (x === 0) return 0;
//     if (x > 0) return 1;
// }
// document.write(plusMinus(1))



//home work 2

// 2. Напишите функцию, которая будет принимать в качестве параметров
// строку s, а также ширину окна в символах – w. Возвращать функция долж-
// на новую строку, в которой в начале и в конце добавлено необходимое количество
// знака `-`, чтобы первоначальная строка оказалась размещена по цент-
// ру заданного окна а по бокам строки добавлены знаки -. 
    
//     Новая строка должна формироваться по следующему принципу:
//     - если длина исходной строки s больше или равна ширине заданного
//     окна, возвращаем ее в неизменном виде;
//     - в противном случае должна быть возвращена строка следующего вида: (функцию передана строка "hi", ширина 20)
//     вывод: `--------hi----------`

//1 DO
function runway(s, w) {// 2DO
    let line=''//4DO
    
    for (let i = 0; i < (w/2); i++){
        if (w % 2 == 0) {
            line += '-'  
        }
    }
    // document.write(line.length)
    if (s.length >= w) {
        return s
    } else {
         return `${line}${s}${line}` //3 DO
    }  
}
document.write(runway('s', 20)+"<br>")
document.write(runway('hello', 4)+"<br>")
document.write(runway('hello my ',56)+"<br>")
document.write(runway('hi five',20)+"<br>")
