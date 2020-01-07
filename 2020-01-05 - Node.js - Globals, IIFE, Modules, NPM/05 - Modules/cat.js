class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
    }
}

module.exports = Cat;

