import { Person } from "../models/Person.js";
import { Student } from "../models/Person.js";
import { Employee } from "../models/Person.js";
import { Customer } from "../models/Person.js";
import { ListPerson } from "../models/listperson.js";
import { Validation } from "../models/validation.js";

const listperson = new ListPerson();
const validation = new Validation();

const domId = (id) => document.getElementById(id);

domId(`type`).onchange = () => {
  const type = domId(`type`).value;
  if (type === "Student") {
    domId(`txtMath`).style.display = "block";
    domId(`txtPhysical`).style.display = "block";
    domId(`txtChemistry`).style.display = "block";
    domId(`txtWorkDays`).style.display = "none";
    domId(`txtDailySalary`).style.display = "none";
    domId(`txtCompanyName`).style.display = "none";
    domId(`txtOrderValue`).style.display = "none";
    domId(`txtRating`).style.display = "none";
  }

  if (type === "Employee") {
    domId(`txtMath`).style.display = "none";
    domId(`txtPhysical`).style.display = "none";
    domId(`txtChemistry`).style.display = "none";
    domId(`txtWorkDays`).style.display = "block";
    domId(`txtDailySalary`).style.display = "block";
    domId(`txtCompanyName`).style.display = "none";
    domId(`txtOrderValue`).style.display = "none";
    domId(`txtRating`).style.display = "none";
  }
  if (type === "Customer") {
    domId(`txtMath`).style.display = "none";
    domId(`txtPhysical`).style.display = "none";
    domId(`txtChemistry`).style.display = "none";
    domId(`txtWorkDays`).style.display = "none";
    domId(`txtDailySalary`).style.display = "none";
    domId(`txtCompanyName`).style.display = "block";
    domId(`txtOrderValue`).style.display = "block";
    domId(`txtRating`).style.display = "block";
  }
};
// value
const infoPerson = () => {
  const id = domId("id").value;
  const type = domId("type").value;
  const name = domId("name").value;
  const address = domId("address").value;
  const email = domId("Email").value;
  const person = new Person(id, type, name, address, email);
  return person;
};

const infoStudent = () => {
  const id = domId("id").value;
  const type = domId("type").value;
  const name = domId("name").value;
  const address = domId("address").value;
  const email = domId("Email").value;
  const math = domId("math").value;
  const physical = domId("physical").value;
  const chemistry = domId("chemistry").value;
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
  return student;
};

const infoEmployee = () => {
  const id = domId("id").value;
  const type = domId("type").value;
  const name = domId("name").value;
  const address = domId("address").value;
  const email = domId("Email").value;
  const workDays = domId("workDays").value;
  const dailySalary = domId("dailySalary").value;
  const employee = new Employee(
    id,
    type,
    name,
    address,
    email,
    workDays,
    dailySalary
  );
  return employee;
};

const infoCustomer = () => {
  const id = domId("id").value;
  const type = domId("type").value;
  const name = domId("name").value;
  const address = domId("address").value;
  const email = domId("Email").value;
  const companyName = domId("companyName").value;
  const orderValue = domId("orderValue").value;
  const rating = domId("rating").value;
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
  return customer;
};

const checkValidation = () => {
  let id = domId("id").value;
  let name = domId("name").value;
  let address = domId("address").value;
  let email = domId("Email").value;
  let math = domId("math").value;
  let physical = domId("physical").value;
  let chemistry = domId("chemistry").value;
  let workDays = domId("workDays").value;
  let dailySalary = domId("dailySalary").value;
  let companyName = domId("companyName").value;
  let orderValue = domId("orderValue").value;
  let rating = domId("rating").value;
  var isValid = true;

  isValid &= validation.kiemTraSelect(
    "type",
    "errorType",
    "(*)Vui Lòng Chọn Đối Tượng"
  );
  isValid &= validation.kiemTraRong(
    id,
    "errorId",
    "(*)Vui Lòng Nhập Code",
    listperson.list
  );
  isValid &=
    validation.kiemTraRong(name, "errorName", "(*)Vui Lòng Nhập Tên") &&
    validation.kiemTraPattern(
      name,
      "errorName",
      "(*)Vui Lòng Điền Chữ",
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
    );
  isValid &= validation.kiemTraRong(
    address,
    "errorAddress",
    "(*)Vui Lòng Nhập Địa Chỉ"
  );
  isValid &=
    validation.kiemTraRong(email, "errorEmail", "(*)Vui Lòng Nhập Email") &&
    validation.kiemTraPattern(
      email,
      "errorEmail",
      "(*)Vui Lòng Nhập Đúng Định Dạng Email",
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
  isValid &=
    validation.kiemTraRong(math, "errorMath", "(*)Vui Lòng Nhập Điểm") &&
    validation.kiemTraPattern(
      math,
      "errorMath",
      "(*)Vui Lòng Nhập Số",
      /^[0-9]+$/
    );
  isValid &=
    validation.kiemTraRong(
      physical,
      "errorPhysical",
      "(*)Vui Lòng Nhập Điểm"
    ) &&
    validation.kiemTraPattern(
      physical,
      "errorPhysical",
      "(*)Vui Lòng Nhập Số",
      /^[0-9]+$/
    );
  isValid &=
    validation.kiemTraRong(
      chemistry,
      "errorChemistry",
      "(*)Vui Lòng Nhập Điểm"
    ) &&
    validation.kiemTraPattern(
      chemistry,
      "errorChemistry",
      "(*)Vui Lòng Nhập Số",
      /^[0-9]+$/
    );
  isValid &=
    validation.kiemTraRong(
      workDays,
      "errorWorkDays",
      "(*)Vui Lòng Nhập Số Ngày Làm Việc"
    ) &&
    validation.kiemTraPattern(
      workDays,
      "errorWorkDays",
      "(*)Vui Lòng Nhập Số",
      /^[0-9]+$/
    );
  isValid &=
    validation.kiemTraRong(
      dailySalary,
      "errorDailySalary",
      "(*)Vui Lòng Nhập Lương Theo Ngày"
    ) &&
    validation.kiemTraPattern(
      dailySalary,
      "errorDailySalary",
      "(*)Vui Lòng Nhập Số",
      /^[0-9]+$/
    );
  isValid &= validation.kiemTraRong(
    companyName,
    "errorCompanyName",
    "(*)Vui Lòng Nhập Tên Công Ty"
  );
  isValid &=
    validation.kiemTraRong(
      orderValue,
      "errorOrderValue",
      "(*)Vui Lòng Nhập Giá Trị Hóa Đơn"
    ) &&
    validation.kiemTraPattern(
      orderValue,
      "errorOrderValue",
      "(*)Vui Lòng Nhập Số",
      /^[0-9]+$/
    );
  isValid &= validation.kiemTraRong(
    rating,
    "errorRating",
    "(*)Vui Lòng Nhập Thông Tin Đánh Giá"
  );

  return isValid;
};

domId("btnKTra").onclick = () => {
  const type = domId(`type`).value;
  const student = infoStudent();
  const employee = infoEmployee();
  const customer = infoCustomer();
  if (type === "Student") {
    listperson.addPerson(student);
  } else if (type === "Employee") {
    listperson.addPerson(employee);
  } else if (type === "Customer") {
    listperson.addPerson(customer);
  }
  checkValidation();
  setLocalStorage();
  saveData();
};

// render UI
const renderUI = (data = listperson.list) => {
  const content = data.reduce((total, element, index, array) => {
    const {
      id,
      name,
      address,
      email,
      type,
      math,
      physical,
      chemistry,
      workDays,
      dailySalary,
      companyName,
      orderValue,
      rating,
    } = element;
    total += `
  <tr>
  <td>${id}</td>
  <td>${name}</td>
  <td>${address}</td>
  <td>${email}</td>
  <td>${type}</>
 
  `;
    if (type === "Student") {
      const student = new Student(
        id,
        name,
        address,
        email,
        type,
        math,
        physical,
        chemistry
      );
      total += student.render();
    }
    if (type === "Employee") {
      const employee = new Employee(
        id,
        name,
        address,
        email,
        type,
        workDays,
        dailySalary
      );
      total += employee.render();
    }
    if (type === "Customer") {
      const customer = new Customer(
        id,
        name,
        address,
        email,
        type,
        companyName,
        orderValue,
        rating
      );
      total += customer.render();
    }
    total += `<td><button class="btn btn-warning" onclick="Update('${id}')">Sua</button><button class="btn btn-danger" onclick="deletePerson('${id}')">Xoa</button></td>
  </tr>
  `;
    return total;
  }, "");
  domId(`tbody`).innerHTML = content;
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
//phan rut gon & van hanh data:
const saveData = () => {
  renderUI();
  setLocalStorage();
};

// lọc
domId(`fillterType`).onchange = () => {
  const type = domId(`fillterType`).value;
  const data = listperson.fillterByType(type);
  renderUI(data);
};
domId(`fillterName`).onchange = () => {
  const name = domId(`fillterName`).value;
  let listName = listperson.fillterByName(name);
  if (name === "AdenZ") {
    renderUI(listName);
  } else if (name === "ZdenA") {
    renderUI(listName);
  }
};

window.onload = () => {
  getLocalStorage();
  saveData();
};
window.deletePerson = (id) => {
  listperson.removePerson(id);
  saveData();
  setLocalStorage();
};
// cập nhật
const capNhatPerson = () => {
  domId(`btnUpdate`).onclick = () => {
    const type = domId(`type`).value;
    const student = infoStudent();
    const employee = infoEmployee();
    const customer = infoCustomer();
    if (type === "Student") {
      listperson.updatePerson(student);
    } else if (type === "Employee") {
      listperson.updatePerson(employee);
    } else if (type === "Customer") {
      listperson.updatePerson(customer);
    }
    saveData();

    domId(`btnUpdate`).style.display = "none";
    domId(`btnKTra`).style.display = "block";
  };
};
window.Update = (userCode) => {
  domId(`btnKTra`).style.display = "none";
  domId(`btnUpdate`).style.display = "block";
  const user = listperson.findPerson(userCode);
  //show value cap nhat:
  if (user.type === "Student") {
    domId(`txtMath`).style.display = "block";
    domId(`txtPhysical`).style.display = "block";
    domId(`txtChemistry`).style.display = "block";
    domId(`txtWorkDays`).style.display = "none";
    domId(`txtDailySalary`).style.display = "none";
    domId(`txtCompanyName`).style.display = "none";
    domId(`txtOrderValue`).style.display = "none";
    domId(`txtRating`).style.display = "none";

    domId(`type`).disabled = true;
    domId(`id`).disabled = true;
    domId(`id`).value = user.id;
    domId(`name`).value = user.name;
    domId(`Email`).value = user.email;
    domId(`address`).value = user.address;
    domId(`type`).value = user.type;
    domId(`math`).value = user.math;
    domId(`physical`).value = user.physical;
    domId(`chemistry`).value = user.chemistry;
    //validate:
    const keyUpThemPerson = () => {
      checkValidation();
      //cap nhat
      capNhatPerson();
    };
    domId(`id`).addEventListener("keyup", keyUpThemPerson);
    domId(`name`).addEventListener("keyup", keyUpThemPerson);
    domId(`address`).addEventListener("keyup", keyUpThemPerson);
    domId(`Email`).addEventListener("keyup", keyUpThemPerson);
    domId(`math`).addEventListener("keyup", keyUpThemPerson);
    domId(`physical`).addEventListener("keyup", keyUpThemPerson);
    domId(`chemistry`).addEventListener("keyup", keyUpThemPerson);
    domId(`workDays`).addEventListener("keyup", keyUpThemPerson);
    domId(`dailySalary`).addEventListener("keyup", keyUpThemPerson);
    domId(`companyName`).addEventListener("keyup", keyUpThemPerson);
    domId(`orderValue`).addEventListener("keyup", keyUpThemPerson);
    domId(`rating`).addEventListener("keyup", keyUpThemPerson);
  } else if (user.type === "Employee") {
    domId(`txtMath`).style.display = "none";
    domId(`txtPhysical`).style.display = "none";
    domId(`txtChemistry`).style.display = "none";
    domId(`txtWorkDays`).style.display = "block";
    domId(`txtDailySalary`).style.display = "block";
    domId(`txtCompanyName`).style.display = "none";
    domId(`txtOrderValue`).style.display = "none";
    domId(`txtRating`).style.display = "none";

    domId(`type`).disabled = true;
    domId(`id`).disabled = true;
    domId(`id`).value = user.id;
    domId(`name`).value = user.name;
    domId(`address`).value = user.address;
    domId(`Email`).value = user.email;
    domId(`type`).value = user.type;
    domId(`workDays`).value = user.workDays;
    domId(`dailySalary`).value = user.dailySalary;
    //validate:
    const keyUpThemPerson = () => {
      checkValidation();
      //cap nhat
      capNhatPerson();
    };
    domId(`id`).addEventListener("keyup", keyUpThemPerson);
    domId(`name`).addEventListener("keyup", keyUpThemPerson);
    domId(`address`).addEventListener("keyup", keyUpThemPerson);
    domId(`Email`).addEventListener("keyup", keyUpThemPerson);
    domId(`math`).addEventListener("keyup", keyUpThemPerson);
    domId(`physical`).addEventListener("keyup", keyUpThemPerson);
    domId(`chemistry`).addEventListener("keyup", keyUpThemPerson);
    domId(`workDays`).addEventListener("keyup", keyUpThemPerson);
    domId(`dailySalary`).addEventListener("keyup", keyUpThemPerson);
    domId(`companyName`).addEventListener("keyup", keyUpThemPerson);
    domId(`orderValue`).addEventListener("keyup", keyUpThemPerson);
    domId(`rating`).addEventListener("keyup", keyUpThemPerson);
  } else if (user.type === "Customer") {
    domId(`txtMath`).style.display = "none";
    domId(`txtPhysical`).style.display = "none";
    domId(`txtChemistry`).style.display = "none";
    domId(`txtWorkDays`).style.display = "none";
    domId(`txtDailySalary`).style.display = "none";
    domId(`txtCompanyName`).style.display = "block";
    domId(`txtOrderValue`).style.display = "block";
    domId(`txtRating`).style.display = "block";

    domId(`type`).disabled = true;
    domId(`id`).disabled = true;
    domId(`id`).value = user.id;
    domId(`name`).value = user.name;
    domId(`address`).value = user.address;
    domId(`Email`).value = user.email;
    domId(`type`).value = user.type;
    domId(`companyName`).value = user.companyName;
    domId(`orderValue`).value = user.orderValue;
    domId(`rating`).value = user.rating;
    //validate:
    const keyUpThemPerson = () => {
      checkValidation();
      //cap nhat
      capNhatPerson();
    };
    domId(`id`).addEventListener("keyup", keyUpThemPerson);
    domId(`name`).addEventListener("keyup", keyUpThemPerson);
    domId(`address`).addEventListener("keyup", keyUpThemPerson);
    domId(`Email`).addEventListener("keyup", keyUpThemPerson);
    domId(`math`).addEventListener("keyup", keyUpThemPerson);
    domId(`physical`).addEventListener("keyup", keyUpThemPerson);
    domId(`chemistry`).addEventListener("keyup", keyUpThemPerson);
    domId(`workDays`).addEventListener("keyup", keyUpThemPerson);
    domId(`dailySalary`).addEventListener("keyup", keyUpThemPerson);
    domId(`companyName`).addEventListener("keyup", keyUpThemPerson);
    domId(`orderValue`).addEventListener("keyup", keyUpThemPerson);
    domId(`rating`).addEventListener("keyup", keyUpThemPerson);
  }
};
