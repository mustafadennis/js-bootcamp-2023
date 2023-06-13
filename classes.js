class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  getArea() {
    return this.height * this.width;
  }

  getPerimeter() {
    return (this.height + this.width) * 2;
  }
}

const getArea = (height, width) => {
  return height * width;
};

const getPerimeter = (height, width) => {
  return (height + width) * 2;
};

const rectangle1 = new Rectangle(10, 20);

console.log("🚀 ~ rectangle1.getArea():", rectangle1.getPerimeter());
