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






                                            // -------- hard task -------------

function stringsMake(user) {
  if(user != typeof(String)) {
    console.log("ты  передал не строку");
  }else {
    console.log(' Ты передал строку');
  }
}
stringsMake("ledp");


