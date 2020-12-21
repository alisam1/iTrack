/* Facorial (Ex.1) */

let factorial = (number) => (number <= 0) ? 1 : (number * factorial(number - 1));

console.log (factorial(4))
console.log (factorial(6))
console.log (factorial(10))

/* Ex. 2 */

var arrayData = {}; /* Тип данных: Объект */

var arrayData = []; /* Тип данных: Массив */


/* Function from jQuery to JS (Ex.3) */

let popup = document.querySelector('.popup_open');
popup.addEventListener('click', () => {
    const form = document.querySelector('#url').parents('.form');
    const url = form.getAttributes('action');
    const request = new XMLHttpRequest();
    request.responseType =	'json';
    request.open('POST', url, true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            let data = document.getElementById('url').value;
            let popupOpen = document.querySelector('.popup_open');
            let popupInner = document.querySelector('.popup_inner');
            function successRequest(data){
                popupOpen.classList.add("open");
                popupInner.classList.add("open");
                let dataText = data.getAttributes('text');
                popupInner.innerHTML(dataText)
                let dataTitle = data.getAttributes('title');
                let dataTitleCreate = document.createElement('h1');
                dataTitleCreate.innerHTML = dataTitle;
                popupInner.before(dataTitleCreate)
           }
        }
    });
false});




/* URL (Ex.4) */

const url = "https://itrack.ru/portfolio/vnedrenie-crm/filter/crm_project_type-is-amocrm/apply/";

function getParam(url){
    let arr = url.split('/');
    let direct = arr[arr.indexOf('portfolio') + 1];
    let page = arr[arr.indexOf(direct) + 1];
    let filterParam = arr[arr.indexOf('apply') - 1];
    let urlArr = [];
    let urlArrPush = urlArr.push(direct, page, filterParam)
    console.log(urlArr)
}

console.log(getParam(url))



/* Input Range (js) (Ex.5) */

function testRange() {
    let range = document.getElementById("range").value;
    let rangeResult = document.getElementById("range-result");
    rangeResult.innerHTML = range;
}


/* Наследование (Ex.6) */

class Person {

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }

}

class Student extends Person {

  constructor(studentId, firstName, lastName) {
    super(firstName, lastName);
    this.studentId = studentId;
  }

  getStudentInfo() {
    return this.studentId + " " + this.lastName + ", " + this.firstName;
  }

}

let student = new Student(1, "Дмитрий", "Иванов");

console.log(student.getFullName());
console.log(student.getStudentInfo());