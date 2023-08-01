export class student {
  #dtb = 0;
  constructor(toan, ly, hoa) {
    this.toan = toan;
    this.ly = ly;
    this.hoa = hoa;
  }
  tinhDTB() {
    this.#dtb ==
      (parseFloat(this.toan) + parseFloat(this.ly) + parseFloat(this.hoa)) / 3;
  }
}
class person extends Persion {}
