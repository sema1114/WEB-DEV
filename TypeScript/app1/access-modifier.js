var Taxi = /** @class */ (function () {
    //..
    function Taxi(location, color) {
        this.location = location;
        this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taksi X: " + this.location.x + " Y: " + this.location.y + " konumuna gidiyor");
    };
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 1, y: 4 });
taxi_1.travelTo({ x: 2, y: 4 });
var taxi_2 = new Taxi({ x: 5, y: 9 }, 'red');
var taxi_3 = new Taxi();
