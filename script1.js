// Question 2 - Convert the UML diagram to Javascript class. - use number for double

class Circle {
    // private properties
    #radius;
    #color;
  
    // constructor
    constructor(radius = 1.0, color = "red") {
      this.#radius = radius;
      this.#color = color;
    }
  
    // getters and setters
    get radius() {
      return this.#radius;
    }
  
    set radius(radius) {
      this.#radius = radius;
    }
  
    get color() {
      return this.#color;
    }
  
    set color(color) {
      this.#color = color;
    }
  
    // instance methods
    toString() {
      return `Circle [radius = ${this.#radius}, color = ${this.#color}]`;
    }
  
    getArea() {
      return Math.PI * Math.pow(this.#radius, 2);
    }
  
    getCircumference() {
      return 2 * Math.PI * this.#radius;
    }
  }
  
  // create a new circle object
  const myCircle = new Circle(2.5, "blue");
  
  // print the circle object to the console
  console.log(myCircle.toString()); // Circle [radius = 2.5, color = blue]
  
  // print the area and circumference of the circle to the console
  console.log(`Area: ${myCircle.getArea()}`); // Area: 19.634954084936208
  console.log(`Circumference: ${myCircle.getCircumference()}`); // Circumference: 15.707963267948966