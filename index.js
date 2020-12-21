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
    const form = document.querySelector('#url').parentNode('.form');
    const data = document.getElementById('url').value;
    const url = form.getAttributes('action');
    const popupOpen = document.querySelector('.popup_open');
    const popupInner = document.querySelector('.popup_inner');

    let successRequest = () => {
      popupOpen.classList.add("open");
      popupInner.classList.add("open");
      popupInner.innerHTML = dataText;
      let dataTitleCreate = document.createElement('h1');
      dataTitleCreate.innerHTML = dataTitle;
      popupInner.insertBefore(dataTitleCreate)
  }

    axios.get(url)
            .then(response => {
                const dataResponse = response.data.data
                successRequest();
            })
            .catch(error => console.error(error));
});

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