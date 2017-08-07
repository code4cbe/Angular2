import { Routes, RouterModule } from '@angular/router';
import { LocatorComponent } from "./locator/locator.component";
import { CatalogueComponent } from "./catalogue/catalogue.component";
import { ProductComponent } from "./product/product.component";

const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/catalogue', pathMatch: 'full' },
    { path: 'locator', component: LocatorComponent },
    { path: 'catalogue', component: CatalogueComponent },
    {path:'product',component:ProductComponent}
    
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);