function Car(make, model, year) {
    console.info("this:", this);

    this.make   = make;
    this.model  = model;
    this.year   = year;
    this.sayCar = function() {
        console.log('I have a ' + this.year + ' ' + this.make + ' ' + this.model + '.');
    };
}

// create 2 car objects for John and Jane
var johnCar = new Car('Ford', 'F150', '2011');
var janeCar = Car('Audi', 'A4', '2007');
