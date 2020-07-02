// // ------- required task ----------

// let money,
//     income = '25000',
//     addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?'),
//     deposit = Boolean(confirm('Есть ли у вас депозит в банке? Если есть нажмите OK, если нету то нажмите cansel')),
//     mission = 50000,
//     period = 12;
  
    

// let start = function() {
//   do {
//     money = +prompt('Ваш месячный доход?');
//   } while (isNaN(money) || money === '' || money === null);
// }

// start();

// let expenses = [];
// let getExpensesMonth = function() {
//   let sum = 0,
//       question = 0;
//   for (let i = 0; i < 2; i++) {
//       expenses[i] = prompt('Введите обязательную статью расходов?');
      
//       do {
//         question = +prompt('Во сколько это обойдется?');
//       } while (isNaN(question));
      
//       sum += question;
//     }
//     return sum;
//   }

// let expensesAmount = getExpensesMonth();


// function calculateDeposit() {
//   if(deposit === true) {
//     return +prompt('Какой у вас депозит?');
//   }
// }

// let valueDeposit = calculateDeposit();

// function getAccumulatedMonth() {
//   if(valueDeposit != undefined) {
//     return money + valueDeposit - expensesAmount ;
//   } else {
//     return money - expensesAmount;
//   }
// }
// let accumulatedMonth = getAccumulatedMonth(),
//     budgetDay = accumulatedMonth / 30;

// let getTargetMonth = function () {
//   return mission / accumulatedMonth
// }

// let getTargetMission = function () {
//   if ( getTargetMonth() > 0 ) {
//     console.log(`Цель будет достигнута за: ${Math.ceil(getTargetMonth())} месяца.`);
//   } else {
//     console.log(`Цель не будет достигнута`);
//   }
// }
// let getStatusIncome = function() {
//   if (budgetDay > 1200) {
//     console.log("У вас высокый уровень дохода")
//     } else if (budgetDay < 1200 && budgetDay > 600 ) {
//       console.log("У вас средный уровень дохода")
//     } else if (budgetDay < 600) {
//       console.log("К сожалению у вас уровень дохода ниже среднего")
//     } else {
//       console.log("Что-то пошло не так")
//   }  
// }

// console.log(`Сума обьязательных рассходов за месяц: ${expensesAmount}`);
// console.log(addExpenses.toLowerCase().split(','));
// console.log(`бюджет на день: ${Math.round(budgetDay)}`);
// getStatusIncome();
// getTargetMission();






                                            // -------- hard task -------------

/*********************Здесь мы создаем масив из семи чисел, с помощью цыкла мы по нему пробегаемся, далее с помощю конструкции задаем условия, что если в заданом масиве  есть строка которая начинается с 2 или 4 мы ее выводим в консоль*************/



// let array = ["2453", "4000", "65000" , "25860", "908540", "45000", "750004"];
// let elementArray = array.length;

// function getElemetArray() {
//   for(let i = 0; i < array.length; i++) {
//     if( array[i].substring(0,1) === "2" || array[i].substring(0,1) === "4" ) {
//       console.log(array[i]);
//     }
//   }
// }

// getElemetArray();



/*Здесь мы создаем функцию, которая будет возвращать true and false, соответственно простое число это или нет и  которая принимает один аргумент, далее с помощю цыкла мы перебираем числа от 2 до num, но так как предварительно мы задали корень квадратный от num, то нам не приходится перебират все числа до num, и если мы находим корень квадратный то число уже не евляется простым */
function isPrime(num) {
  for (var i = 2, max = Math.sqrt(num); i <= max; i++) {
    if (num % i ===  0) {
      return false;
    }
  }
  return num >= 2;
}
/**************  Здесь мы создаем цыкл внутри функции, который перебирает нам все числа до заданого n, а в условие пишем предыдущую функцию,котороя проверяет простое это число или нет и соответсвенно если условия выполняется то выводит это число в консоль *************/
function getPrime(num) {

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      console.log(`${i}: Делители этого числа: 1 и ${i}`);;
    }
  }
}
console.log(getPrime(100));