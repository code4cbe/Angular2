import { Component, OnInit } from '@angular/core';
import { SharedService } from "./../shared.service";

export class Product{
    
}

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styles: []
})
export class CatalogueComponent implements OnInit {
productid:string;
selectedProduct:Product;
query:string;
products:Product[];
    constructor(private _sharedService: SharedService) { }

  ngOnInit() {
  }
    
  callProductService(productid) { 
        
        this._sharedService.getProductDetails(productid)
            .subscribe(
                lstresult => { 
                
                    this.selectedProduct = lstresult;
    console.log(this.products);
                },
                error => {
                    console.log("Error. The findProduct result JSON value is as follows:");
                    console.log(error);
                }
            ); 
    }    

    
  callSharedService() { 
        this.selectedProduct = null;
        this._sharedService.findProduct(this.query)
            .subscribe(
                lstresult => { 
                
                    this.products = lstresult.items;
    console.log(this.products);
                },
                error => {
                    console.log("Error. The findProduct result JSON value is as follows:");
                    console.log(error);
                }
            ); 
    }    

}


