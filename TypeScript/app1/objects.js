var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taksi X: " + point.x + " Y: " + point.y + " konumuna gidiyor");
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("Bus X: " + point.x + " Y: " + point.y + " konumuna gidiyor");
    };
    return Bus;
}());
var taxi_1 = new Taxi();
taxi_1.travelTo({ x: 2, y: 4 });
taxi_1.currentLocation = { x: 1, y: 4 };
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
