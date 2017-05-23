/**
 * # 장점
 * - 가독성이 좋고, 직관적이며 사용이 용이하다.
 *
 * # 단점
 * - 단순한 대신 하나의 인스턴스만을 가지므로, 동일한 객체를 더 생성할 수 없다.
 */
var Car = {
    make: 'Ford',
    model: 'F150',
    year: '2011',
    sayCar: function() {
        console.log('I have a ' + this.year + ' ' + this.make + ' ' + this.model + '.');
    }
};
Car.sayCar(); // ==> I have a 2011 Ford F150.
