/*alert("Я JavaScript!");//Привет, мир!*/

/*let admin, name// переменные
name="Джон"
admin=name
alert(admin)*/
																			//10
/*let name=prompt("Как тебя зовут?",)
alert(name)*/
																			//12
/*let a = prompt("Первое число?", 1);//
let b = prompt("Второе число?", 2);
alert(+a + +b); */
																			//14
/*let check=prompt("какое официальное название js",);
(check=="ECMAScript") ? alert("Верно") : alert("правльно будет ECMAScript");*/

/*let check=prompt("Введите число",);
if (check>0){alert(1)}else if(check<0){alert(-1)}else alert(0);*/

/*let result=(a+b<4) ? "malo" : "mnogo";*/

/*let messeage=(login == 'Сотрудник') ? "Привет" : (login == 'Директор') ? "Здравствуйте" : (login == '') ? "Нет логина" : "";*/
																			//15																			
/*if (age<14 || age>90)
if (age!(>=14 && age<=90)*/

/*let login = prompt("Введите логин",)
if (login=="Админ") 
	{let pass=prompt("Введите пароль",)
		if (pass=="Я главный") alert("Здравствуйте!")
		else if(pass=''|| null) alert("отменено") 
		else alert("Неверный пароль")}
else if (login==''|| null) alert("отменено")
	else alert("я вас не знаю")*/
																			//16
/*result??=num1??num2*/
																			//17
/*for (let i = 2; i <= 10; i++) 
  if (i % 2 == 0)
    alert( i );*/

/*let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}*/

/*let num;
do {
  num = prompt("Введите число больше 100",);
} while (num <= 100 && num);*/

/*let n = prompt("Введите число",10)
skip:for (let i = 2; i <= n; i++) { 
  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue skip;
  }
  alert( i );
}*/
																			//18
/*if(browser === 'Edge') 
	alert("You've got the Edge!")
else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') 
	alert( 'Okay we support these browsers too')
else 
	alert( 'We hope that this page looks ok!')	*/	

/*const number = +prompt('Введите число между 0 и 3', '');
switch (number) {
  case 0:
    alert('Вы ввели число 0');
    break;
  case 1:
    alert('Вы ввели число 1');
    break;
  case 2:
  case 3:
    alert('Вы ввели число 2, а может и 3');
    break;
}	*/														
																			//19
/*return (age > 18) ? true : confirm('Родители разрешили?');	
return (age > 18) || confirm('Родители разрешили?');*/	

/*function min(a, b) 
{return a < b ? a : b;}	*/										

/*function pow(x, n) {
  let sum = x;
  for (let i = 1; i < n; i++) {
    sum *= x;
  }
  return sum;
}

let x = prompt("число",);
let n = prompt("степень",);
if (n >= 1 && n % 1 == 0) alert( pow(x, n) );
else alert("Степень "+n+ " не является натуральным числом");
*/
																			//21
/*ask(
	"Вы согласны?",
	() => alert("Вы согласились."),
	() => alert("Вы отменили выполнение.")
);	*/									
																			//29
/*let user={};
user.name="john";
user.surname="smith";
user.name="pete";
delete user.name;	*/

/*function isEmpty(obj) {
	for (let key in obj) {
		return false;
	}
	return true;
}	*/																										

/*let sum = 0;
for (let key in salaries) {
	sum+=salaries[key]
}*/

/*function multiplyNumeric(obj) {
	for (let key in obj) {
		if (typeof(key)=='number')
			obj[key] *= 2;
	}
}*/
																			//32
/*read() {
	this.a= +prompt("Введите a",);
	this.b= +prompt("Введите b",);
}																			
sum() {
	return this.a + this.b;
}
mul() {
	return this.a * this.b;
}*/

/*добавить в каждой функции return this*/

																			//33
/*function Calculator() {
  this.read = function() {
    this.a = +prompt("Введите a", 0);
    this.b = +prompt("Введите b", 0);
  };
  this.sum = function() {
    return this.a + this.b;
  };
  this.mul = function() {
    return this.a * this.b;
  };
}		*/														

/*function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    this.value += +prompt("Добавьте число",);
  };
}*/
																						//38
/*let a = +prompt("Введите первое число", );
let b = +prompt("Введите второе число", );
alert( a + b );	*/	

/*function readNumber() {
  let num;
  while ( !isFinite(num) ) {
    num = prompt("Введите число", );
  } 
  if (num === null || num === '') return null;
  return +num;
}
alert(`Число: ${readNumber()}`);		*/			

/*function random(min, max) {
  return min + Math.random() * (max - min);
}		*/													
																								//39
/*let newStr = str[0].toUpperCase() + str.slice(1);*/

/*function checkSpam(str) {
  let lowStr = str.toLowerCase();
  return lowStr.includes('viagra') || lowStr.includes('xxx');
}*/

/*function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 3) + "..." : str;
}*/

/*function extractCurrencyValue(str) {
  return +str.slice(1);
}*/
																								//40
/*let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert( styles.shift() );
styles.unshift("Рэп", "Регги");*/				

/*function getMaxSubSum(arr) {
  let maxsum = 0;
  let sum = 0;
  for (let num of arr) {
    sum += num; 
    maxsum = Math.max(maxsum, sum); 
    if (sum < 0) sum = 0; 
  }
  return maxsum;
}				*/						
																									//41		
/*function camelize(str) {
  return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
}	*/		

/*function copySorted(arr) {
  return arr.slice().sort();
}	*/				
																									//43
/*function unique(arr) {
  return Array.from(new Set(arr));
}*/
																									//45
/*function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
}*/

/*function count(obj) {
  return Object.keys(obj).length;
}*/
																									//46
/*let {name, years: age, isAdmin = false} = user;*/

/*function topSalary(salaries) {
  let maxSalary = 0;
  let maxName = null;
  for(const [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  }
  return maxName;
}*/
																								//47
/*let d = new Date(2012, 1, 20, 3, 12);
alert( d );*/

/*function formatDate(date) {
  const now = new Date();
  const diff = now - date; 
  if (diff < 1000) {
    return "прямо сейчас";
  }
  const sec = Math.floor(diff / 1000); 
  if (sec < 60) {
    return `${sec} сек. назад`;
  }
  const min = Math.floor(sec / 60); 
  if (min < 60) {
    return `${min} мин. назад`;
  }
  const day = ("0" + date.getDate()).slice(-2);
  const month = ("0" + (date.getMonth() + 1)).slice(-2); 
  const year = ("" + date.getFullYear()).slice(-2);
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);
  return `${day}.${month}.${year} ${hours}:${minutes}`;
}*/
                                                  //48
/*let user2 = JSON.parse(JSON.stringify(user));*/

/*if (value == meetup && key !="") {
    return undefined;
  }
  return value;*/
                                                  //51
/*function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}

function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  };
}*/

/*function byField(fieldName) {
  return function(a, b) {
    return a[fieldName] > b[fieldName] ? 1 : -1;
  };
}*/
                                                //54
/*function sum(a) {
  let currentSum = a;
  function f(b) {
    currentSum += b;
    return f;
  }
  f.toString = function() {
    return currentSum;
  };
  return f;
}*/
                                                //57
/*function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }
  wrapper.calls = [];
  return wrapper;
}*/

/*function debounce(func, ms) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), ms);
  };
}*/
                                                //58
/*askPassword(user.loginOk.bind(user), user.loginFail.bind(user));*/
                                                //62
/*let hamster = {
  stomach: [],
  eat(food) {
    if (!this.stomach) {
      this.stomach = [];
    }
    this.stomach.push(food);
  }
};
let speedy = {
  __proto__: hamster,
  stomach: [] 
};
let lazy = {
  __proto__: hamster,
  stomach: [] 
};*/
                                              //64
/*Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
};*/

/*Function.prototype.defer = function(ms) {
  let f = this;
  return function(...args) {
    setTimeout(() => f.apply(this, args), ms);
  }
};
function f(a, b) {
  alert( a + b );
}

f.defer(5000)(1, 2); // выведет 3 через 1 секунду.*/
                                              //65
/*let dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join();
    }
  }
});*/
                                              //66
/*class Clock {
  constructor({ template }) {
    this.template = template;
  }
  render() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;
    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;
    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);
    console.log(output);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}
let clock = new Clock({template: 'h:m:s'});
clock.start();*/
                                          //67
/*class ExtendedClock extends Clock {
  constructor(options) {
    super(options);
    let { precision = 1000 } = options;
    this.precision = precision;
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
};*/
                                          //68
/*class Rabbit extends Object {
  constructor(name) {
    //super();
    this.name = name;
  }
}*/
                                          //74
/*class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}*/
                                          //76
/*function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}*/

/*function showCircle(cx, cy, radius) {
  return new Promise(resolve => {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);
    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';
      div.addEventListener('transitionend', function handler() {
        div.removeEventListener('transitionend', handler);
        resolve(div);
      });
    }, 0);
  });
}
showCircle(150, 150, 100).then(div => {
  div.classList.add('message-ball');
  div.append("Hello, world!");
});*/
                                        //82
/*async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new Error(response.status);
  }
}*/

/*class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}
async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}
// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
  while (true) {
    let name = prompt("Введите логин?", "iliakan");
    try {
      let user = await loadJson(`https://api.github.com/users/${name}`);
      alert(`Полное имя: ${user.name}.`);
      return user;
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
      } else {
        throw err;
      }
    }
  }
}
demoGithubUser();*/

/*wait().then(result => alert(result));*/
                                                //83
/*function* pseudoRandom(seed) {
  let value = seed;
  while (true) {
    value = value * 16807 % 2147483647;
    yield value;
  }
}*/
                                                //88
/*function wrap(target) {
  return new Proxy(target, {
    get(target, prop, receiver) {
      if (prop in target) {
        return Reflect.get(target, prop, receiver);
      } else {
        throw new Error(`Ошибка: такого свойства не существует`);
      }
    }
  });
}*/

/*array = new Proxy(array, {
  get(target, prop, receiver) {
    if (!isNaN(prop) && Number(prop) < 0) {
      prop = String(target.length + Number(prop));
    }
    return Reflect.get(target, prop, receiver);
  }
});*/

/*function makeObservable(target) {
  target.handlers = [];
  target.observe = function(handler) {
    this.handlers.push(handler);
  };
  return new Proxy(target, {
    set(target, prop, value, receiver) {
      let success = Reflect.set(target, prop, value, receiver);
      if (success) {
        target.handlers.forEach(handler => handler(prop, value));
      }
      return success;
    }
  });
}*/
                                                //89
/*let expr = prompt("Введите выражение:", '2*3+2');
alert( eval(expr) );*/
                                                //92
/*function isInteger(num) {
  return (num ^ 0) === num;
}*/
                                                //95
/*animals.sort(new Intl.Collator('ru', {
 sensitivity: 'base', ignorePunctuation: true }).compare);*/
/////////////////////////////////////////////////////////////////////////////////bros//////////////////////////////////////////////////////
                                                        //3
/*document.body.firstElementChild*/

/*document.body.lastElementChild*/

/*document.body.lastElementChild.lastElementChild*/

/*let table = document.body.firstElementChild;
for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  row.cells[i].style.backgroundColor = 'red';
}*/
                                                        //5
/*for (let li of document.querySelectorAll('li')) {
  let title = li.firstChild.data;
  let num = li.getElementsByTagName('li').length;
  alert(title + ': ' + num)
}*/                                                 
                                                        //6
/*    let elem = document.querySelector('[data-widget-name]');
    alert(elem.getAttribute('data-widget-name'));*/
/*let links = document.querySelectorAll('a');
for (let link of links) {
  let href = link.getAttribute('href');
  if (!href) continue;
  if (!href.includes('://')) continue;
  if (href.startsWith('http://internal.com')) continue;
  link.style.color = 'orange';
}*/
                                                        //7
/*function clear(elem) {
  elem.innerHTML = '';
}*/

/* let ul = document.createElement('ul');
    document.body.append(ul);
    while (true) {
      let data = prompt("Введите текст", "");
      if (!data) {
        break;
      }
      let li = document.createElement('li');
      li.textContent = data;
      ul.append(li);
    }*/

/*let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
},
"Деревья": {
 "Огромные": {
   "секвойя": {},
   "дуб": {}
  },
 "Цветковые": {
   "яблоня": {},
   "магнолия": {}
        }
  }
};function createTree(container, data) {
container.innerHTML = '';
function createTreeDom(container, data) {
  let ul = document.createElement('ul');
  container.appendChild(ul);
  for (let key in data) {
    let li = document.createElement('li');
    li.textContent = key;
    if (isObject(data[key])) {
        createTreeDom(li, data[key]);
    }
    ul.appendChild(li);
  }
}
let container = document.getElementById('container');
createTree(container, data);*/
/*
function createCalendar(elem, year, month) {
    let firstDay = new Date(year, month - 1, 1); 
    let lastDay = new Date(year, month, 0);
    let weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    let table = document.createElement('table');
    let header = table.createTHead();
    let row = header.insertRow();
    for (let day of weekdays) {
        let th = document.createElement('th');
        th.textContent = day;
        row.appendChild(th);
    }
    let body = table.createTBody();
    let date = 1;
    for (let i = 0; i < 6; i++) {
        let row = body.insertRow();
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay.getDay()) {
                let cell = row.insertCell();
                cell.textContent = '';
            } else if (date > lastDay.getDate()) {
                break;
            } else {
                let cell = row.insertCell();
                cell.textContent = date;
                date++;
            }
        }
        if (date > lastDay.getDate()) {
            break; 
        }
    }
    elem.innerHTML = '';
    elem.appendChild(table);
}
let calendarContainer = document.getElementById('calendar');
createCalendar(calendarContainer, 2012, 9);*/

/*let sortedRows = Array.from(table.rows)
  .slice(1)
  .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
table.tBodies[0].append(...sortedRows);*/

                                                              //8
/*function showNotification(options) {
    let notification = document.createElement('div');
    notification.className = 'notification';
    if (options.className) {
        notification.classList.add(options.className);
    }
    if (options.html) {
        notification.innerHTML = options.html;
    }
    notification.style.position = 'fixed';
    notification.style.top = (options.top || 0) + 'px';
    notification.style.right = (options.right || 0) + 'px';
    document.body.appendChild(notification);
    setTimeout(function() {
        notification.remove();
    }, 1500);
}
let i = 1
setInterval(() =>{
showNotification({
    top: 10,
    right: 10,
    html: "Hello!" + i++,
    className: "welcome"
});
}, 2000);*/
                                                                      //9
/*let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;*/

/*function getScrollbarWidth() {
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    outer.style.overflow = 'scroll';
    document.body.appendChild(outer);
    const scrollbarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);
    return scrollbarWidth;
}
const scrollbarWidth = getScrollbarWidth();
console.log('Ширина полосы:', scrollbarWidth, 'px');*/

/*function centerBallInField(field, ball) {
    let fieldRect = field.getBoundingClientRect();
    let fieldWidth = fieldRect.width;
    let fieldHeight = fieldRect.height;
    let fieldTop = fieldRect.top;
    let fieldLeft = fieldRect.left;
    let ballWidth = ball.offsetWidth;
    let ballHeight = ball.offsetHeight;
    let centerX = fieldLeft + fieldWidth / 2;
    let centerY = fieldTop + fieldHeight / 2;
    let ballX = centerX - ballWidth / 2;
    let ballY = centerY - ballHeight / 2;
    ball.style.position = 'absolute';
    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';
}*/

                                                                    //11
/*function positionAt(anchor, position, elem) {
    let anchorRect = anchor.getBoundingClientRect();
    switch (position) {
        case 'top':
            elem.style.left = anchorRect.left + 'px';
            elem.style.top = (anchorRect.top - elem.offsetHeight) + 'px';
            break;
        case 'right':
            elem.style.left = (anchorRect.right + 'px');
            elem.style.top = anchorRect.top + 'px';
            break;
        case 'bottom':
            elem.style.left = anchorRect.left + 'px';
            elem.style.top = (anchorRect.bottom + 'px');
            break;
        default:
            throw new Error('Неверное значение position. Используйте "top", "right" или "bottom".');
    }
}
function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = 'note';
    note.innerHTML = html;
    document.body.appendChild(note);
    positionAt(anchor, position, note);
}
let anchorElement = document.getElementById('anchor');
showNote(anchorElement, 'right', 'Это заметка справа от элемента anchor.');*/

/*function positionAt(anchor, position, elem) {
    let anchorRect = anchor.getBoundingClientRect();
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    switch (position) {
        case 'top':
            elem.style.left = anchorRect.left + scrollLeft + 'px';
            elem.style.top = anchorRect.top + scrollTop - elem.offsetHeight + 'px';
            break;
        case 'right':
            elem.style.left = anchorRect.right + scrollLeft + 'px';
            elem.style.top = anchorRect.top + scrollTop + 'px';
            break;
        case 'bottom':
            elem.style.left = anchorRect.left + scrollLeft + 'px';
            elem.style.top = anchorRect.bottom + scrollTop + 'px';
            break;
        default:
            throw new Error('Неверное значение position. Используйте "top", "right" или "bottom".');
    }
}
function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = 'note';
    note.innerHTML = html;
    document.body.appendChild(note);
    positionAt(anchor, position, note);
}
document.body.style.height = '2000px';
let anchorElement = document.getElementById('anchor');
showNote(anchorElement, 'right', 'Это заметка справа от элемента anchor.');*/

                                                                        //12
/*document.getElementById('hider').onclick = function() {
  document.getElementById('text').hidden = true;
} */                                                                

/*<input type="button" onclick="this.hidden=true" value="прячем">*/

/*field.addEventListener('click', function(event) {
  let mouseX = event.clientX;
  let mouseY = event.clientY;
  let newBallX = mouseX - ballOffsetX;
  let newBallY = mouseY - ballOffsetY;
  if (newBallX < fieldRect.left) {
      newBallX = fieldRect.left;
  } else if (newBallX + ballRect.width > fieldRect.right) {
      newBallX = fieldRect.right - ballRect.width;
  }
  if (newBallY < fieldRect.top) {
      newBallY = fieldRect.top;
  } else if (newBallY + ballRect.height > fieldRect.bottom) {
      newBallY = fieldRect.bottom - ballRect.height;
  }
  ball.style.left = newBallX + 'px';
  ball.style.top = newBallY + 'px';
});
*/

/*let messagesContainer = document.getElementById('messages');
messagesContainer.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-button')) {
    let messageToDelete = event.target.closest('.message');
    if (messageToDelete) {
      messageToDelete.remove();
    }
  }
});*/

/*document.addEventListener('mouseover', function(event) {
  let target = event.target;
  if (target.hasAttribute('data-tooltip')) {
    let tooltipText = target.getAttribute('data-tooltip');
    let tooltipElement = document.createElement('div');
    tooltipElement.classList.add('tooltip');
    tooltipElement.innerHTML = tooltipText;
    document.body.appendChild(tooltipElement);
    positionTooltip(target, tooltipElement);
  }
});
document.addEventListener('mouseout', function(event) {
  let target = event.target;
  if (target.hasAttribute('data-tooltip')) {
    let tooltip = document.querySelector('.tooltip');
    if (tooltip) {
      tooltip.remove();
    }
  }
});
function positionTooltip(anchorElement, tooltipElement) {
  let anchorRect = anchorElement.getBoundingClientRect();
  let tooltipRect = tooltipElement.getBoundingClientRect();
  let tooltipWidth = tooltipRect.width;
  let tooltipHeight = tooltipRect.height;
  let tooltipX = anchorRect.left + (anchorRect.width - tooltipWidth) / 2;
  let tooltipY = anchorRect.top - tooltipHeight - 5; 
  if (tooltipX < 0) {
    tooltipX = 0;
  } else if (tooltipX + tooltipWidth > window.innerWidth) {
    tooltipX = window.innerWidth - tooltipWidth;
  }
  if (tooltipY < 0) {
    tooltipY = anchorRect.bottom + 5;
  }
  tooltipElement.style.left = tooltipX + 'px';
  tooltipElement.style.top = tooltipY + 'px';
}*/
                                                                      //15
/*// Получаем ссылку на элемент галереи
let gallery = document.getElementById('image-gallery');
gallery.addEventListener('click', function(event) {
  if (event.target.classList.contains('thumbnail')) {
    let mainImage = document.getElementById('main-image');
    mainImage.src = event.target.src;
    mainImage.alt = event.target.alt;
  }
});*/
                                                                    //16
/*document.addEventListener('DOMContentLoaded', () => {
      const listItems = document.querySelectorAll('#ul li');

      listItems.forEach(item => {
        item.addEventListener('click', (event) => {
          if (event.ctrlKey || event.metaKey) {
            item.classList.toggle('selected');
          } else {
            listItems.forEach(i => i.classList.remove('selected'));
            item.classList.add('selected');
          }
        });
        item.addEventListener('mousedown', (event) => {
          event.preventDefault();
        });
      });
    });*/
                                                                  //18
 /*document.addEventListener('DOMContentLoaded', () => {
      let tooltip;
      document.body.addEventListener('mouseover', (event) => {
        const target = event.target.closest('[data-tooltip]');
        if (!target) return;
        if (tooltip) {
          tooltip.remove();
          tooltip = null;
        }
        tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = target.dataset.tooltip;
        document.body.append(tooltip);
        const coords = target.getBoundingClientRect();
        const top = coords.top + window.scrollY;
        const left = coords.left + window.scrollX;
        tooltip.style.display = 'block';
        tooltip.style.top = top + target.offsetHeight + 'px';
        tooltip.style.left = left + 'px';
      });
      document.body.addEventListener('mouseout', (event) => {
        if (tooltip) {
          tooltip.remove();
          tooltip = null;
        }
      });
      document.body.addEventListener('mousemove', (event) => {
        if (!tooltip) return;
        const coords = event.target.getBoundingClientRect();
        tooltip.style.top = (event.clientY + 10) + 'px';
        tooltip.style.left = (event.clientX + 10) + 'px';
      });
    });*/
                                                                      //20
/* function runOnKeys(func, ...codes) {
      let pressedKeys = new Set();
      document.addEventListener('keydown', (event) => {
        pressedKeys.add(event.code);
        for (let code of codes) {
          if (!pressedKeys.has(code)) {
            return;
          }
        }
        func();
      });
      document.addEventListener('keyup', (event) => {
        pressedKeys.delete(event.code);
      });
    }
    */

/* document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('genres');
  const selectedOption = select.options[select.selectedIndex];
  alert('Value: ' + selectedOption.value);
  alert('Text: ' + selectedOption.text);
  const newOption = document.createElement('option');
  newOption.value = 'classic';
  newOption.text = 'Классика';
  select.appendChild(newOption);
  select.value = 'classic';
  const newSelectedOption = select.options[select.selectedIndex];
  alert('New Value: ' + newSelectedOption.value);
  alert('New Text: ' + newSelectedOption.text);*/


//////////////////////////////////////////////////////////////////////////////data/////////////////////////////////////////////////////
/*area.value = localStorage.getItem('area');
area.oninput = () => {
  localStorage.setItem('area', area.value)
};*/