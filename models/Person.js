export class Person {
  constructor(id, type, name, address, email) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.address = address;
    this.email = email;
  }
}
export class Student extends Person {
  constructor(id, type, name, address, email, math, physical, chemistry) {
    super(id, type, name, address, email);
    this.math = math;
    this.physical = physical;
    this.chemistry = chemistry;
  }
  render() {
    return `
    <td>toan: ${this.math} ly: ${this.physical} hoa: ${
      this.chemistry
    }<p class="text-danger">diemTB: ${this.getAvg()}</p></td>`;
  }
  getAvg() {
    return (
      (parseFloat(this.math) +
        parseFloat(this.physical) +
        parseFloat(this.chemistry)) /
      3
    ).toFixed(1);
  }
}

export class Employee extends Person {
  constructor(id, type, name, address, email, workDays, dailySalary) {
    super(id, type, name, address, email);
    this.workDays = workDays;
    this.dailySalary = dailySalary;
  }
  render() {
    return `
    <td>so ngay lam : ${this.workDays} luong : ${this.formatTien(
      this.dailySalary
    )} <p class="text-danger">Tinh luong: ${this.getSalary()}</p></td>`;
  }
  formatTien(money) {
    let VND = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    return VND.format(money);
  }

  getSalary() {
    return this.formatTien(
      parseFloat(this.workDays) * parseFloat(this.dailySalary)
    );
  }
}

export class Customer extends Person {
  constructor(id, type, name, address, email, companyName, orderValue, rating) {
    super(id, type, name, address, email);
    this.companyName = companyName;
    this.orderValue = orderValue;
    this.rating = rating;
  }
  render() {
    return `
    <td>Ten Cty : ${this.companyName} , Gia Tri Hoa Don : ${this.formatTien(
      this.orderValue
    )} , Danh Gia: ${this.rating}</td>`;
  }
  formatTien(moneyHD) {
    let VND = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    return VND.format(moneyHD);
  }
}
