//task1
// Напишите программу, запрашивающую у пользователя число и подсчитывающую сумму натуральных положительных чисел 
// от 1 до введенного пользователем значения. Сумма первых n положительных чисел может быть рассчитана 
// по формуле: sum = n * (n + 1) / 2

// let sum = prompt(`n*(n+1)/2=`);
// let sum2 = Number(+sum+1);
// let sum3 = Number(sum2*sum);
// let sum4 = Number(+sum3/2);

// document.write(`n*(n+1)/2= ${sum4}<br>`);



//task2
//Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, 
// а безделушка – 112 г. Напишите программу, запрашивающую у пользователя количество тех и других покупок,
//  после чего выведите на экран общий вес посылки.

// let a = prompt(`suvenire`);
// let b = prompt(`bezdelushka`); 
// let suv = a*75;
// let bez = b*112;
// let summ = Number (+ suv+bez);

// document.write(a +" - suvenire <br>");
// document.write(b +" - bezdelushka <br>");
// document.write(suv.toFixed(2) +" gramm <br>");
// document.write(bez.toFixed(2) +" gramm<br>");
// document.write(summ.toFixed(2) +" gramm<br>");



//task3
// Представьте, что вы открыли в банке сберегательный счет под 4 % годовых. Проценты банк рассчитывает в конце года
// и добавляет к сумме счета. Напишите программу, которая запрашивает у пользователя сумму первоначального депозита,
// после чего рассчитывает и выводит на экран сумму на счету в конце первого, второго и третьего годов. 
// Все суммы должны быть округлены до двух знаков после запятой.

let Deposit=prompt("Введите суммы вашего депозита:");
const percentage=0.04;
let depositAmount=Number(Deposit);
let firstYearEnd=depositAmount*percentage+depositAmount;
let secondYearEnd=firstYearEnd*percentage+firstYearEnd;
let thirdYearEnd=secondYearEnd*percentage+secondYearEnd;


document.write(`<h3>Сумма на счету первый год: ${firstYearEnd.toFixed(2)}</h3>`)
document.write(`<h3>Сумма на счету второй год: ${secondYearEnd.toFixed(2)}</h3>`);
document.write(`<h3>Сумма на счету третий год: ${thirdYearEnd.toFixed(2)}</h3>`);


//task4
// Создайте программу, которая запрашивает у пользователя два целых числа a и b, после чего выводит на экран результаты 
// следующих математических операций:
// - сумма a и b;
// - разница между a и b;
// - произведение a и b;
// - частное от деления a на b;
// - остаток от деления a на b;
// - результат возведения числа a в степень b.

let firstNumber=prompt("Введите целое число а:");
let secondNumber=prompt("Введите целое число b:");
let a=Number(firstNumber);
let b=Number(secondNumber);
let sum=a+b;


document.write("Сумма:"+sum +"<br>");
let substract=a-b;
document.write("Разница:"+substract +"<br>");
let multiply=a*b;
document.write("Произведение:"+multiply +"<br>");
let divide=a/b;
document.write("Деление:"+divide + "<br>");
let residual=a%b;
document.write("Остаток от деления:"+residual+"<br>");
let exponentiation=a**b;
document.write("Степень:"+exponentiation);


