import { Component, OnInit } from '@angular/core';
import { SharedService } from "./../shared.service";


export class Product{
  str_id:string;
  str_name: string ;
  str_country: string ;
  str_coordinates: string ;
  str_address: string ;
  str_city: string ;
  str_state: string ;
  str_zip: string ;
  str_phone: string ;
  str_timezone: string ;
  str_sundayOpen: string ;

}


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {
    id_product: string ;
selectedProduct: Product;
itemId:string;
name:string;
  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
  }
    
 /* callSharedService() { 
        this._sharedService.getProductDetails(this.id_product)
            .subscribe(
                lstresult => { 
                   this.itemId = lstresult["itemId"];
this.name = lstresult["name"];
    console.log(this.selectedProduct);
                },
                error => {
                    console.log("Error. The findStore result JSON value is as follows:");
                    console.log(error);
                }
            ); 
    }*/

}

/*
import { Component, OnInit } from '@angular/core';
import { SharedService } from "./../shared.service";

export class Store{
  str_id:string;
  str_name: string ;
  str_country: string ;
  str_coordinates: string ;
  str_address: string ;
  str_city: string ;
  str_state: string ;
  str_zip: string ;
  str_phone: string ;
  str_timezone: string ;
  str_sundayOpen: string ;

}


@Component({
  selector: 'app-locator',
  templateUrl: './locator.component.html',
  styles: []
})
export class LocatorComponent implements OnInit {
zip: string ;
stores: Store[];
    
  
  
  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
  }
    

  
  callSharedService() { 
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
*/
