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
//taxi_1 =>41 abc 41
//taxi_1.currentLocation
//taxi_1.travelTo()
//taxi_2 =>41 abd 41
//taxi_2.currentLocation
//taxi_2.travelTo()
