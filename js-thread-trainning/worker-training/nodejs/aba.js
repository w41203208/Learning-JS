const buffer = new ArrayBuffer(8);

const tt_a_view = new Uint32Array(buffer, 0, 1);
const tt_b_view = new Uint32Array(buffer, 4, 1);

class Tt {
  _a; //int32
  _b; //int32
  constructor(a, b) {
    this._a = a;
    this._b = b;
  }
}
const tt = new Tt(1, 2);
tt_a_view[0] = tt._a;
tt_b_view[0] = tt._b;
console.log(buffer);
