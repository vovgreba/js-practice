// // ------- required task ----------

// let money = +prompt('Ваш месячный доход?'),
//     income = '25000',
//     addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?').split(','),
//     deposit = Boolean(confirm('Есть ли у вас депозит в банке? Если есть нажмите OK, если нету то нажмите cansel')),
//     mission = 50000,
//     period = 12,
//     expenses1 =prompt('Введите обязательную статью расходов?', 'Курсы англ.языка'),
//     amount1 =+prompt('Во сколько это обойдется?', 1000),
//     expenses2 =prompt('Введите обязательную статью расходов?', 'Автошкола'),
//     amount2 =+prompt('Во сколько это обойдется?', 1500);
// let showTypeOf = function(data) {
//   console.log(data, typeof(data));
// }

// let getExpensesMonth = function() {
//   return amount1 + amount1;
// }
// function calculateDeposit() {
//   if(deposit === true) {
//     return +prompt('Какой у вас депозит?');
//   }
// }
// let valueDeposit = calculateDeposit();
// function getAccumulatedMonth() {
//   if(valueDeposit != undefined) {
//     return money + valueDeposit - (amount1 + amount2) ;
//   } else {
//     return money - (amount1 + amount2);
//   }
// }
// let accumulatedMonth = getAccumulatedMonth(),
//     budgetDay = accumulatedMonth / 30;
// function getTargetMonth() {
//   return mission / accumulatedMonth
// }
// let getStatusIncome = function() {
//   if (budgetDay > 1200) {
//     console.log("У вас высокый уровень дохода")
//     }else if (600 > budgetDay < 1200 ) {
//       console.log("У вас средный уровень дохода")
//     } else if (budgetDay < 600) {
//       console.log("К сожалению у вас уровень дохода ниже среднего")
//     }else {
//       console.log("Что-то пошло не так")
//   }  
// }
// showTypeOf(money);
// showTypeOf(income);
// showTypeOf(addExpenses);
// console.log(`Сума обьязательных рассходов за месяц: ${getExpensesMonth()}`);
// console.log(`Возможные рассходы: ${addExpenses}`);
// console.log(`Цель будет достигнута за: ${Math.ceil(getTargetMonth())} месяцев.`);
// console.log(`бюджет на день: ${Math.round(budgetDay)}`);
// getStatusIncome();


function stringsMake(user) {
  if(user === typeof(Number)) {
    return console.log('ты передал число');
  }else {
    return alert(' Ты передал что то другое');
  }
}
stringsMake(5254);



                                            // -------- hard task -------------
/*
let lang = prompt("Введите на каком языке вам показать дни недели: 'ru' или 'en'");
const weekOfRussian = "Понедельник, вторник, среда, четверг, пятница, суббота, неделя";
const weekOfEnglish = "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday";
if (lang === 'ru') {
  console.log(`Дни недели на русском: ${weekOfRussian}`);
} else if (lang === 'en') {
console.log(`Days of the week in English: ${weekOfEnglish}`);
} else {
  console.log("Что то пошло не так, вы ввели неправальние значания!")
}
*/

// ------------ делаем все тоже самое только с помомощью конструкции switch -----
/*
let lang = prompt("Введите на каком языке вам показать дни недели: 'ru' или 'en'");
const weekOfRussian = "Понедельник, вторник, среда, четверг, пятница, суббота, неделя";
const weekOfEnglish = "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday";
switch(lang) {
    case "ru": 
        console.log(`Дни недели на русском: ${weekOfRussian}`);
        break;
    case "en": 
        console.log(`Days of the week in English: ${weekOfEnglish}`);
        break;
    default: 
        console.log("Что то пошло не так, вы ввели неправальние значания!")
        break;
}
*/

// сдесь мы спрашиваем у посетителя его имя, и с помощью тернарного оператора выводим разные значения 
// let namePerson = prompt("введите ваше имя с большой буквы:");

// namePerson === "Артем" ? console.log("директор") : namePerson ==="Максим" ? console.log("преподаватель") : console.log("студент");
 