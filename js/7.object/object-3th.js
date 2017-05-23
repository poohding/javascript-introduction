/**
 * # 장점
 * - 객체 인스턴스의 타입을 생성자 이름으로 식별가능.
 * - 객체 인스턴스의 생성시마다 메서드 중복 생성 문제 해결.
 *
 * # 단점
 * - 생성자 함수와 프로토타입의 블록이 분리되어 있어 가독성이 떨어짐.
 */
var johnCar,
    janeCar;

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Car.prototype.sayCar = function() {
    console.log('I have a ' + this.year + ' ' + this.make + ' ' + this.model + '.');
};

// create 2 car objects for John and Jane
johnCar = new Car('Ford', 'F150', '2011');
janeCar = new Car('Audi', 'A4', '2007');

// call method
johnCar.sayCar(); // ==> I have a 2011 Ford F150.
janeCar.sayCar(); // ==> I have a 2007 Audi A4.
