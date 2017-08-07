import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['map.component.css']
})
export class MapComponent  {

  
    lat:number= -96.967644;
    lng:number = 32.920578;

  

setLatLong(lt,lg){
    console.log("latitude"+lt);
    console.log("longitude"+lg);
    this.lat=lt;
    this.lng=lg;
}
  
    

}
