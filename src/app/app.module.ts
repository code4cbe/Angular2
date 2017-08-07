import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { LocatorComponent } from './locator/locator.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CONST_ROUTING } from './app.routing';
import { SharedService } from "./shared.service";
import { ProductComponent } from './product/product.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LocatorComponent,
    CatalogueComponent,
    ProductComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpModule,
    CONST_ROUTING,
    AgmCoreModule.forRoot({apiKey:'AIzaSyCJDNagEPvBOmx8dgN3HQL9H2VKt8gcm3A'})
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
