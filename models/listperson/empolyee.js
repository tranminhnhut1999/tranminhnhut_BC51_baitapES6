export class employee {
  #tinhLuong = 0;
  constructor(nLamViec, lTheoNgay) {
    this.nLamViec = nLamViec;
    this.lTheoNgay = lTheoNgay;
  }

  tinhLuong() {
    this.#tinhLuong == parseFloat(this.nLamViec) * parseFloat(this.lTheoNgay);
  }
}
class person extends Persion {}
