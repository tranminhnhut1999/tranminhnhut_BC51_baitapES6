import { Person } from "../models/Person.js";
import { ListPerson } from "../models/listperson.js";

const domId = (id) => document.getElementById(id);

domId("KiemTra").onclick = () => {
  const id = domId("id").value;
  const type = domId("type").value;
  const name = domId("name").value;
  const address = domId("address").value;
  const email = domId("Email").value;
  const math = domId("math").value;
  const physical = domId("physical").value;
  const chemistry = domId("chemistry").value;
  const workDays = domId("workDays").value;
  const dailySalary = domId("dailySalary").value;
  const companyName = domId("companyName").value;
  const orderValue = domId("orderValue").value;
  const rating = domId("rating").value;

  const person = new Person(
    id,
    type,
    name,
    address,
    email,
    math,
    physical,
    chemistry,
    workDays,
    dailySalary,
    companyName,
    orderValue,
    rating
  );
  console.log(person);
};
