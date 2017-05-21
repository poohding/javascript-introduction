/**
 * # 장점
 * - 객체 인스턴스의 타입을 생성자 이름으로 식별가능.
 *
 * # 단점
 * - 객체 인스턴스의 생성시마다 메서드가 중복 생성됨.
 */
var johnCar,
    janeCar;

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.sayCar = function() {
        console.log('I have a ' + this.year + ' ' + this.make + ' ' + this.model + '.');
    };
}

// create 2 car objects for John and Jane
johnCar = new Car('Ford', 'F150', '2011');
janeCar = new Car('Audi', 'A4', '2007');

// call method
johnCar.sayCar(); // ==> I have a 2011 Ford F150.
janeCar.sayCar(); // ==> I have a 2007 Audi A4.
