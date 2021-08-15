// -------------------TASK 1------------------------------------
let person = {
    firstName: 'Ivan',
    secondName: 'Ivanov',
    showDate() {
        console.log(`${this.firstName},${this.secondName}`);
    }
}

let newPerson = Object.assign({}, person);
newPerson.firstName = 'Petro',
newPerson.secondName = 'Petriv',

person.showDate();
newPerson.showDate();

// -------------------TASK 2------------------------------------
let MyMath = {};
MyMath.a = 5,
MyMath.b = 2,
MyMath.sum = function () {
console.log(this.a + this.b);
}
MyMath.sum ();

MyMath.multiplication = function () {
    console.log(this.a * this.b);
    }
MyMath.multiplication ();

MyMath.division = function () {
    console.log(this.a / this.b);
    }
MyMath.division ();

MyMath.subtraction = function () {
    console.log(this.a - this.b);
    }
MyMath.subtraction ();