import {Vehicle} from './Vehicle';
import {Point} from './Point';

export class Taxi implements Vehicle{
    //..


constructor(private _location?:Point,private _color?:string){
  
}

travelTo(point :Point):void{
console.log(`Taksi X: ${this._location.x} Y: ${this._location.y} konumuna gidiyor`);

}

get location(){
    return this._location;
}

set location(value:Point){

if(value.x<0 ||value.y<0){

    throw new Error('koordinat bilgileri hatalı');
}
this._location=value;

}


}
