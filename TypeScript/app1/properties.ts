import {Taxi} from './Taxi';








let taxi_1:Taxi= new Taxi({x:1,y:4});

taxi_1.travelTo({x:2,y:4});
let currentLocation =taxi_1.location;
taxi_1.location={x:5,y:6};



