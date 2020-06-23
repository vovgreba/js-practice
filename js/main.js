// ------- required task ----------

let money = +prompt('Ваш месячный доход?'),
    income = '25000',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?'),
    deposit = Boolean(confirm('Есть ли у вас депозит в банке? Если есть нажмите OK, если нету то нажмите cansel')),
    mission = 50000,
    period = 12,
    expenses1 =prompt('Введите обязательную статью расходов?', 'Курсы англ.языка'),
    amount1 =+prompt('Во сколько это обойдется?', 1000),
    expenses2 =prompt('Введите обязательную статью расходов?', 'Автошкола'),
    amount2 =+prompt('Во сколько это обойдется?', 1500),
    budgetMonth = money - (amount1 + amount1),
    missionCompleted = mission / budgetMonth,
    budgetDay = budgetMonth / 30;

console.log(`Бюджет на месяц: ${budgetMonth}`);
console.log(`Цель будет достигнута за: ${Math.ceil(missionCompleted)}`);
console.log(`бюджет на день: ${Math.round(budgetDay)}`);
if (budgetDay > 1200) {
  console.log("У вас высокый уровень дохода")
  }else if (600 > budgetDay < 1200 ) {
    console.log("У вас средный уровень дохода")
  } else if (budgetDay < 600) {
    console.log("К сожалению у вас уровень дохода ниже среднего")
  }else {
    console.log("Что-то пошло не так")
}




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
 