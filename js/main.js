// ------- required task ----------

let money = 20000,
    income = '25000',
    addExpenses = 'Internet, Taxi, Shopping',
    deposit = true,
    mission = 50000,
    period = 12;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);
console.log(`"Период равен ${period} месяцев"`);
console.log(`"Цель заработать ${mission} гривень"`);

let arayExpenses = addExpenses.toLowerCase().split();
console.log(arayExpenses);

 let budgetDay = money / 30;
 console.log(parseInt(budgetDay));

//  -------- hard task -------------

 let num = 266219;
 let array = String(num).split("");

 let result = array.reduce(function(sum, current) {
  return sum * current;
}, 1);

console.log(result);
let exponent = result ** 3;
console.log(exponent.toString().substr(0,2));

