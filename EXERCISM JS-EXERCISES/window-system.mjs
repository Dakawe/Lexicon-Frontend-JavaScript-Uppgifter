export class Size {
  constructor(w = 80, h = 60) {
    this.width = w;
    this.height = h;
  }

  resize(w, h) {
    this.width = w;
    this.height = h;
  }
}
export class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(data) {
    this.size.resize(
      Math.max(1, Math.min(data.width, this.screenSize.width - this.position.x)),
      Math.max(1, Math.min(data.height, this.screenSize.height - this.position.y))
    );
  }
  move(data) {
    this.position.move(
      Math.max(0, Math.min(data.x, this.screenSize.width - this.size.width)),
      Math.max(0, Math.min(data.y, this.screenSize.height - this.size.height))
    );
  }
}

  export function changeWindow(data){
    data.position = new Position();
    data.resize(400,300);
    data.move(100,150);
  }

const pro = new ProgramWindow();
console.log(pro.resize(new Size(222, 230)));
console.log(pro.size.width);
