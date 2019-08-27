class Try {
  constructor(x, y) {
    this.x = x;
    this.y = x;
  }

  setx(f) {
    this.x = f;
  }
  getx() {
    return this.x;
  }
}

let b = new Try(10, 15);
console.log(b);
