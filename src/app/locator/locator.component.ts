import { Component, OnInit } from '@angular/core';
import { SharedService } from "./../shared.service";
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './../map/map.component';

export class Store{
  
}


@Component({
  selector: 'app-locator',
  templateUrl: './locator.component.html',
  styles: [],
    providers: [MapComponent]
})
export class LocatorComponent implements OnInit {
zip: string ;
stores: Store[];
lat:number;
lng:number;
clicked:boolean=false;
  
  
constructor(private _sharedService: SharedService, public mapLocation:MapComponent) { this.lat=56;this.lng=56;}

  ngOnInit() {
  }
    
callMapComponent(lat,lng){
    this.clicked=true;
    this.mapLocation.setLatLong(lat,lng);
    this.lat=lat;
    this.lng=lng;
}
  
  callSharedService() { 
      this.clicked=false;
        this._sharedService.findStore(this.zip)
            .subscribe(
                lstresult => { 
                
                    this.stores = lstresult;
    console.log(this.stores);
                },
                error => {
                    console.log("Error. The findStore result JSON value is as follows:");
                    console.log(error);
                }
            ); 
    }

}
