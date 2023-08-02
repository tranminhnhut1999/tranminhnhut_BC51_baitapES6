import { Customer, Employee, Person, Student } from "../models/Person.js";
import { ListPerson } from "../models/listperson.js";

const listperson = new ListPerson();

const domId = (id) => document.getElementById(id);

domId("btnKTra").onclick = () => {
  const id = domId("id").value;
  const name = domId("name").value;
  const address = domId("address").value;
  const email = domId("Email").value;
  const type = domId("type").value;
  const math = domId("math").value;
  const physical = domId("physical").value;
  const chemistry = domId("chemistry").value;
  const workDays = domId("workDays").value;
  const dailySalary = domId("dailySalary").value;
  const companyName = domId("companyName").value;
  const orderValue = domId("orderValue").value;
  const rating = domId("rating").value;

  const person = new Person(id, type, name, address, email);

  const student = new Student(
    id,
    type,
    name,
    address,
    email,
    math,
    physical,
    chemistry
  );

  const employee = new Employee(
    id,
    type,
    name,
    address,
    email,
    workDays,
    dailySalary
  );

  const customer = new Customer(
    id,
    type,
    name,
    address,
    email,
    companyName,
    orderValue,
    rating
  );

  listperson.addPerson(person, student, employee, customer);
  // AVG
  //person.Avg();

  // Salary
  //person.Salary();
  setLocalStorage();
  renderUI();
};
// render UI
const renderUI = () => {
  const content = listperson.list.reduce((total, element, index, arry) => {
    total += `
      <tr>
      <td>${element.id}</td>
      <td>${element.name}</td>
      <td>${element.email}</td>
      <td></td>
      <td></td>
      <td>${element.companyName}</td>
      <td>${element.orderValue}</td>
      <td>${element.rating}</td>
      <td>
          <button class="btn btn-primary">SỬA</button>
          <button class="btn btn-danger">XOÁ</button>
      </td>
      </tr>
    `;
    console.log(total);
    return total;
  }, "");

  domId("tbody").innerHTML = content;
};

// localstorage
const setLocalStorage = () => {
  const stringify = JSON.stringify(listperson.list);

  localStorage.setItem("DATA", stringify);
};

const getLocalStorage = () => {
  const stringify = localStorage.getItem("DATA");

  if (stringify) {
    listperson.list = JSON.parse(stringify);
  }
};

window.onload = () => {
  getLocalStorage();
  renderUI();
};
